import { Question } from '../types';

// AMRIGS 2025 (RS) — residência médica (acesso direto). 100 questões, 4 alternativas.
// Gabarito conferido no gabarito comentado do AjudaMédico; explicações com texto próprio.
export const AMRIGS_2025_QUESTIONS: Question[] = [
  {
    "id": "amrigs2025-1",
    "module": "Clínica Médica",
    "text": "Sobre a hipertensão arterial sistêmica, analise as assertivas a seguir:\nI. Para diagnóstico, indica-se a medição anual de pressão arterial se a pressão arterial aferida for inferior a 140/90 mmHg.\nII. O diagnóstico da hipertensão arterial sistêmica deve ser baseado na medição da pressão fora do consultório com monitorização ambulatorial da pressão arterial, desde que seja viável sua realização.\nIII. História prévia de pré-eclâmpsia em mulheres é fator de risco para hipertensão arterial sistêmica.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três assertivas estão corretas.\n\nI: com PA de consultório abaixo de 140/90 mmHg (normal ou pré-hipertensão), a recomendação é repetir a medida pelo menos uma vez por ano.\nII: sempre que possível, o diagnóstico deve ser confirmado fora do consultório (MAPA ou MRPA), que identifica hipertensão do avental branco e hipertensão mascarada.\nIII: pré-eclâmpsia e outras síndromes hipertensivas da gestação aumentam o risco de hipertensão crônica e de doença cardiovascular ao longo da vida.",
    "commentary": "Apenas I e II (A): deixa de fora a III, que está correta.\n\nApenas I e III (B): deixa de fora a II, que está correta.\n\nApenas II e III (C): deixa de fora a I, que está correta.",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial — SBC 2020 / Diretriz Brasileira de Hipertensão 2025",
    "tags": [
      "hipertensão arterial",
      "MAPA",
      "pré-eclâmpsia",
      "rastreamento"
    ],
    "tip": "Diagnóstico de HAS: confirmar fora do consultório (MAPA/MRPA) sempre que possível."
  },
  {
    "id": "amrigs2025-2",
    "module": "Clínica Médica",
    "text": "Sobre a dengue, analise as assertivas a seguir:\nI. Existem técnicas laboratoriais para identificação do vírus (até o 5º dia de início da doença) e pesquisa de anticorpos (a partir do 6º dia de início da doença).\nII. O tratamento inclui medidas de suporte, hidratação, repouso e antibioticoterapia.\nIII. O controle do vetor Aedes aegypti é o principal método para a prevenção.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 1,
    "explanation": "I correta: até o 5º dia (viremia) usam-se métodos diretos (NS1, RT-PCR, isolamento viral); a partir do 6º dia, sorologia IgM.\nII incorreta: dengue é infecção viral; o tratamento é hidratação, repouso e sintomáticos (dipirona/paracetamol). Antibiótico não tem papel.\nIII correta: o controle do Aedes aegypti (eliminação de criadouros) continua sendo a principal medida de prevenção.",
    "commentary": "Apenas I e II (A): a II está errada — não há indicação de antibiótico.\n\nApenas II e III (C): inclui a II, errada, e exclui a I, correta.\n\nI, II e III (D): a II está errada.",
    "reference": "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "tags": [
      "dengue",
      "NS1",
      "sorologia",
      "arboviroses"
    ],
    "tip": "Dengue: NS1/PCR até o 5º dia; IgM a partir do 6º."
  },
  {
    "id": "amrigs2025-3",
    "module": "Clínica Médica",
    "text": "Em relação ao colesterol, analise as assertivas a seguir:\nI. Níveis elevados de HDL-C costumam estar relacionados a menor risco cardiovascular.\nII. Altos níveis de HDL-C decorrentes de algumas doenças genéticas podem não proteger de doença cardiovascular, provavelmente em razão das alterações metabólicas e lipídicas concomitantes.\nIII. Causas secundárias de HDL-C elevado incluem cirrose biliar primária, hipertireoidismo e alcoolismo sem cirrose.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: em termos populacionais, HDL-C alto se associa a menor risco cardiovascular (transporte reverso do colesterol).\nII correta: em algumas condições genéticas (deficiência de CETP, mutações de SR-BI), o HDL muito alto é disfuncional e não protege.\nIII incorreta: o hipertireoidismo reduz colesterol total, LDL e HDL. Causas secundárias de HDL alto incluem álcool sem cirrose, exercício, estrogênio e cirrose biliar primária.",
    "commentary": "Apenas I e III (B): a III está errada (hipertireoidismo não eleva HDL).\n\nApenas II e III (C): exclui a I, correta, e inclui a III, errada.\n\nI, II e III (D): a III está errada.",
    "reference": "Atualização da Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose — SBC",
    "tags": [
      "HDL",
      "dislipidemia",
      "hipertireoidismo",
      "risco cardiovascular"
    ],
    "tip": "Hipertireoidismo baixa o colesterol; hipotireoidismo eleva."
  },
  {
    "id": "amrigs2025-4",
    "module": "Clínica Médica",
    "text": "Em relação à leptospirose, analise as assertivas a seguir:\nI. A penetração do Leptospira ocorre apenas a partir de lesões de pele imersa por longos períodos em água contaminada.\nII. O período de incubação pode variar de 1 a 30 dias e normalmente ocorre entre 7 e 14 dias após a exposição a situações de risco.\nIII. A antibioticoterapia está indicada em qualquer período da doença, mas sua eficácia costuma ser maior na 1ª semana do início dos sintomas.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: a Leptospira penetra por lesões de pele, por mucosas (conjuntiva, boca, nariz) e pela pele íntegra macerada por imersão prolongada — o \"apenas\" torna a frase falsa.\nII correta: incubação de 1 a 30 dias, geralmente 7 a 14.\nIII correta: o antibiótico é indicado em qualquer fase, com maior benefício quando iniciado na primeira semana (fase precoce: doxiciclina ou amoxicilina; fase grave: penicilina cristalina, ceftriaxona ou ampicilina).",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Ministério da Saúde — Leptospirose: diagnóstico e manejo clínico / Guia de Vigilância em Saúde",
    "tags": [
      "leptospirose",
      "zoonoses",
      "doxiciclina"
    ],
    "tip": "Leptospira entra até por pele íntegra macerada e mucosas."
  },
  {
    "id": "amrigs2025-5",
    "module": "Clínica Médica",
    "text": "Em relação à nefropatia diabética, analise as assertivas a seguir:\nI. No estágio de nefropatia incipiente, ainda não há alteração na membrana basal glomerular nem no mesângio.\nII. A nefropatia clínica é caracterizada pela proteinúria persistente superior a 500 mg/24h, excreção urinária de albumina superior a 200 mg/L e declínio da taxa de filtração glomerular.\nIII. No estágio de doença renal crônica, estabelecida a proteinúria, os pacientes passam a perder gradativamente a função renal, e mais de 10% evoluem para a doença renal crônica.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: as lesões estruturais precedem a albuminúria; na nefropatia incipiente (microalbuminúria) já há espessamento da membrana basal glomerular e expansão mesangial.\nII correta: a nefropatia clínica (macroalbuminúria) tem proteinúria persistente acima de 500 mg/24h, albumina em amostra acima de cerca de 200 mg/L e queda progressiva da filtração glomerular.\nIII correta (segundo a banca): estabelecida a proteinúria, a perda de função é progressiva e parte relevante dos pacientes chega à doença renal crônica avançada.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.\n\nObservação: a redação da III (\"mais de 10% evoluem para a doença renal crônica\") é imprecisa — a proporção que progride para DRC terminal varia muito entre as séries. A banca a considerou correta.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes — Doença renal do diabetes",
    "tags": [
      "nefropatia diabética",
      "doença renal do diabetes",
      "albuminúria",
      "diabetes"
    ],
    "tip": "Na nefropatia diabética a lesão histológica vem antes da microalbuminúria."
  },
  {
    "id": "amrigs2025-6",
    "module": "Clínica Médica",
    "text": "Em relação ao rastreio para o câncer de próstata, analise as assertivas a seguir e assinale a alternativa correta.\nI. Homens a partir de 45 anos, mesmo sem apresentar sintomas, devem procurar o médico para avaliação individualizada, tendo como objetivo o diagnóstico precoce do câncer de próstata.\nII. Homens que integram o grupo de risco (raça negra ou com parentes de primeiro grau com câncer de próstata) devem começar seus exames mais precocemente, a partir dos 40 anos.\nIII. Após os 70 anos, somente homens com perspectiva de vida maior do que 10 anos poderão fazer essa avaliação.",
    "options": [
      "Todas as assertivas estão corretas.",
      "Todas as assertivas estão incorretas.",
      "Apenas a assertiva II está correta.",
      "Apenas a assertiva III está correta."
    ],
    "correctAnswer": 1,
    "explanation": "Todas as assertivas estão incorretas.\n\nO Ministério da Saúde e o INCA não recomendam o rastreamento populacional do câncer de próstata (os danos de sobrediagnóstico e sobretratamento superam o benefício). Mesmo pela posição da Sociedade Brasileira de Urologia, que defende avaliação individualizada, as idades citadas estão erradas: a partir dos 50 anos (I fala em 45), e a partir dos 45 nos grupos de risco — negros e parentes de primeiro grau (II fala em 40). Após os 75 anos (não 70), a avaliação só é feita se a expectativa de vida for superior a 10 anos (III).",
    "commentary": "Todas corretas (A): nenhuma das idades bate com as recomendações.\n\nApenas a II (C): o grupo de risco começa aos 45, não aos 40.\n\nApenas a III (D): o corte de idade é 75 anos, não 70.",
    "reference": "INCA — Detecção precoce do câncer (2021) / Sociedade Brasileira de Urologia — Nota sobre o câncer de próstata",
    "tags": [
      "câncer de próstata",
      "rastreamento",
      "PSA",
      "prevenção quaternária"
    ],
    "tip": "SBU: 50 anos (45 se negro ou parente de 1º grau); acima de 75, só se expectativa de vida >10 anos."
  },
  {
    "id": "amrigs2025-7",
    "module": "Clínica Médica",
    "text": "O escore de Wells é um modelo de predição clínica amplamente utilizado para auxílio no diagnóstico de Trombose Venosa Profunda (TVP). Qual das alternativas abaixo apresenta um achado clínico que NÃO aumenta a suspeição de diagnóstico de TVP?",
    "options": [
      "Edema de toda a extremidade.",
      "Presença de celulite.",
      "Veias colaterais superficiais não varicosas.",
      "Palpação dolorosa ao longo do trajeto de veias do sistema profundo."
    ],
    "correctAnswer": 1,
    "explanation": "O escore de Wells para TVP soma pontos por: câncer ativo, paralisia/imobilização do membro, acamamento recente ou cirurgia maior, dor no trajeto do sistema venoso profundo, edema de todo o membro, panturrilha ≥3 cm maior que a contralateral, edema depressível unilateral, veias colaterais superficiais não varicosas e TVP prévia. Um diagnóstico alternativo tão ou mais provável (como celulite) SUBTRAI 2 pontos — ou seja, reduz a suspeita.",
    "commentary": "Edema de toda a extremidade (A): soma 1 ponto.\n\nVeias colaterais superficiais não varicosas (C): soma 1 ponto.\n\nDor à palpação no trajeto venoso profundo (D): soma 1 ponto.",
    "reference": "Wells PS et al. NEJM 2003 / Diretrizes da SBACV para TVP",
    "tags": [
      "trombose venosa profunda",
      "escore de Wells",
      "celulite"
    ],
    "tip": "Diagnóstico alternativo tão provável quanto TVP = −2 no Wells."
  },
  {
    "id": "amrigs2025-8",
    "module": "Clínica Médica",
    "text": "Dor crônica difusa, subjetividade dos sintomas, preponderância em mulheres e falta de dados objetivos de imagem e de exames laboratoriais fazem com que a principal suspeita clínica seja de:",
    "options": [
      "Artrite reumatoide.",
      "Polimialgia reumática.",
      "Fibromialgia.",
      "Depressão."
    ],
    "correctAnswer": 2,
    "explanation": "Dor crônica difusa, sintomas subjetivos (fadiga, sono não reparador, alterações cognitivas), predomínio em mulheres e exames laboratoriais e de imagem normais compõem o quadro clássico da fibromialgia, cujo diagnóstico é clínico (critérios ACR 2010/2016: índice de dor generalizada e escala de gravidade de sintomas, por pelo menos 3 meses).",
    "commentary": "Artrite reumatoide (A): há sinovite objetiva, provas inflamatórias e autoanticorpos alterados e erosões na imagem.\n\nPolimialgia reumática (B): acomete idosos (>50 anos), com dor e rigidez de cinturas e VHS/PCR elevados.\n\nDepressão (D): é comorbidade frequente, mas não explica sozinha a síndrome dolorosa difusa descrita.",
    "reference": "Recomendações da Sociedade Brasileira de Reumatologia para o diagnóstico e tratamento da fibromialgia / Critérios ACR 2016",
    "tags": [
      "fibromialgia",
      "dor crônica",
      "reumatologia"
    ],
    "tip": "Dor difusa + exames normais + mulher = fibromialgia."
  },
  {
    "id": "amrigs2025-9",
    "module": "Clínica Médica",
    "text": "A presença de bandas oligoclonais no líquor sugere fortemente o diagnóstico de:",
    "options": [
      "Alzheimer.",
      "Esclerose múltipla.",
      "Linfoma de células B.",
      "Meningite viral."
    ],
    "correctAnswer": 1,
    "explanation": "Bandas oligoclonais de IgG no líquor (ausentes no soro) indicam síntese intratecal de imunoglobulinas e estão presentes em mais de 90% dos pacientes com esclerose múltipla. Pelos critérios de McDonald 2017, podem substituir a disseminação no tempo.",
    "commentary": "Alzheimer (A): o líquor mostra queda de beta-amiloide 42 e aumento de tau, não bandas oligoclonais.\n\nLinfoma de células B (C): no líquor, busca-se citologia oncótica e citometria de fluxo.\n\nMeningite viral (D): pleocitose linfocitária, proteína pouco elevada e glicose normal; bandas podem surgir transitoriamente, mas não sugerem o diagnóstico.",
    "reference": "Critérios de McDonald 2017 / Consenso brasileiro de esclerose múltipla (ABN)",
    "tags": [
      "esclerose múltipla",
      "bandas oligoclonais",
      "líquor"
    ],
    "tip": "Bandas oligoclonais no líquor = pense em esclerose múltipla."
  },
  {
    "id": "amrigs2025-10",
    "module": "Clínica Médica",
    "text": "Em relação ao hipotireoidismo, analise as assertivas a seguir:\nI. Pode-se começar o tratamento de hipotireoidismo com a reposição de levotiroxina sódica na dose de 2 μg/kg/dia no adulto jovem e 1,5 μg/kg/dia total no idoso (sem antecedentes de cardiopatia).\nII. A medida do TSH sérico em pacientes jovens hipotireoideos só deve ser solicitada para avaliar a reposição hormonal após seis semanas de início do tratamento regular.\nIII. Drogas como anticonvulsivantes, rifampicina e sertralina podem acelerar o metabolismo da levotiroxina e, neste caso, a dose precisa ser ajustada.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três assertivas foram consideradas corretas.\n\nI: a dose plena de levotiroxina no adulto jovem fica em torno de 1,6–2,0 μg/kg/dia; no idoso sem cardiopatia pode-se iniciar com dose um pouco menor. Cardiopatas começam com 12,5–25 μg/dia.\nII: a meia-vida da levotiroxina é de cerca de 7 dias; o TSH só reflete o novo equilíbrio após 6 a 8 semanas.\nIII: indutores enzimáticos (carbamazepina, fenitoína, fenobarbital, rifampicina) e a sertralina aumentam a depuração da levotiroxina e podem exigir ajuste.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora alguma assertiva correta.\n\nObservação: a II diz que o TSH \"só deve ser solicitado\" após seis semanas — a ideia é não medir antes do equilíbrio, não proibir dosagens em situações clínicas específicas.",
    "reference": "Consenso Brasileiro para Abordagem Clínica e Tratamento do Hipotireoidismo Subclínico / SBEM — Hipotireoidismo",
    "tags": [
      "hipotireoidismo",
      "levotiroxina",
      "TSH",
      "interações medicamentosas"
    ],
    "tip": "Ajuste de levotiroxina: TSH só após 6–8 semanas."
  },
  {
    "id": "amrigs2025-11",
    "module": "Clínica Médica",
    "text": "Sobre o diabetes melito, analise as assertivas a seguir:\nI. A taxa de glicação da fração A1c da hemoglobina A (HbA1c) é expressa em porcentagem e se relaciona com a média das glicemias diárias nas últimas 3 semanas.\nII. É recomendada a meta de HbA1c <7,0% para indivíduos com qualquer tipo de diabetes, para prevenção de complicações macrovasculares em longo prazo, desde que não incorra em hipoglicemias graves e frequentes, exceto em idosos.\nIII. Em idosos com diabetes melito, com objetivo de evitar hipoglicemia, uma meta de HbA1c <8,0% deve considerar quando houver status funcional comprometido, síndrome de fragilidade, presença de comorbidades que limitem a expectativa de vida e/ou alteração da função cognitiva.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: a HbA1c reflete a glicemia média dos últimos 2 a 3 meses (vida média da hemácia), não de 3 semanas — esse período é o da frutosamina.\nII correta: a meta geral de HbA1c <7% vale para a maioria dos adultos com diabetes, se não houver hipoglicemias graves ou frequentes; idosos têm metas individualizadas.\nIII correta: em idosos frágeis, com comprometimento funcional ou cognitivo ou expectativa de vida limitada, aceita-se HbA1c <8,0% (ou até 8,5%) para evitar hipoglicemia.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "Diretriz da Sociedade Brasileira de Diabetes (2024) — Metas no tratamento do diabetes",
    "tags": [
      "diabetes melito",
      "HbA1c",
      "metas glicêmicas",
      "idoso"
    ],
    "tip": "HbA1c = 2–3 meses; frutosamina = 2–3 semanas."
  },
  {
    "id": "amrigs2025-12",
    "module": "Clínica Médica",
    "text": "Em relação à retocolite ulcerativa, analise as assertivas a seguir:\nI. Os surtos agudos de retocolite ulcerativa podem ser controlados com derivados do ácido 5-aminossalicílico.\nII. Os que não responderem ao tratamento com derivados do ácido 5-aminossalicílico devem receber corticosteroides para indução da remissão da retocolite ulcerativa.\nIII. Pacientes com retocolite ulcerativa grave sem resposta ao uso de corticosteroide são candidatos ao uso de ciclosporina.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três estão corretas e descrevem o escalonamento do tratamento da retocolite ulcerativa:\n\nI: 5-ASA (mesalazina oral e/ou retal) é a base da indução e manutenção na doença leve a moderada.\nII: sem resposta ao 5-ASA, usa-se corticoide (oral ou, na forma grave, intravenoso) para indução da remissão.\nIII: na colite grave refratária ao corticoide IV (3 a 5 dias), as opções de resgate são ciclosporina ou infliximabe; sem resposta, colectomia.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva correta.",
    "reference": "Consenso Brasileiro de Doença Inflamatória Intestinal (GEDIIB) / PCDT Retocolite Ulcerativa — Ministério da Saúde",
    "tags": [
      "retocolite ulcerativa",
      "doença inflamatória intestinal",
      "mesalazina",
      "ciclosporina"
    ],
    "tip": "RCU grave refratária a corticoide IV: ciclosporina ou infliximabe; sem resposta, colectomia."
  },
  {
    "id": "amrigs2025-13",
    "module": "Clínica Médica",
    "text": "A Síndrome da Resposta Inflamatória Sistêmica (SIRS) é uma resposta complexa do organismo a uma série de insultos. Em relação aos critérios diagnósticos e características fisiopatológicas de SIRS, assinale a alternativa correta.",
    "options": [
      "A presença de pelo menos um critério da SIRS é suficiente para diagnóstico de sepse, independentemente da causa subjacente.",
      "O diagnóstico da SIRS pode ser confirmado pela elevação de biomarcadores específicos, como a troponina e a creatinina.",
      "A SIRS é caracterizada por uma resposta inflamatória que pode ocorrer na ausência de infecção, como em casos de pancreatite aguda ou queimaduras extensas.",
      "SIRS resulta em hipotensão arterial que não responde à reposição volêmica."
    ],
    "correctAnswer": 2,
    "explanation": "SIRS é uma resposta inflamatória sistêmica que pode ser desencadeada por causas infecciosas ou não infecciosas — pancreatite aguda, grandes queimaduras, trauma, cirurgia de grande porte. Os critérios clássicos são: temperatura >38 °C ou <36 °C, FC >90 bpm, FR >20 irpm ou PaCO₂ <32 mmHg, leucócitos >12.000 ou <4.000/mm³ ou >10% de bastões; são necessários pelo menos dois.",
    "commentary": "Um critério basta para sepse (A): são necessários pelo menos dois critérios, e a definição antiga de sepse exigia infecção; hoje (Sepsis-3) sepse é disfunção orgânica por resposta desregulada à infecção (SOFA ≥2).\n\nConfirmação por troponina e creatinina (B): não existem biomarcadores específicos de SIRS; o diagnóstico é clínico-laboratorial pelos critérios acima.\n\nHipotensão refratária a volume (D): isso define choque (séptico ou não), não SIRS.",
    "reference": "Bone RC et al. ACCP/SCCM Consensus 1992 / Sepsis-3 (JAMA 2016) / ILAS",
    "tags": [
      "SIRS",
      "sepse",
      "pancreatite aguda",
      "queimaduras"
    ],
    "tip": "SIRS ≠ infecção: pancreatite e queimadura também dão SIRS."
  },
  {
    "id": "amrigs2025-14",
    "module": "Clínica Médica",
    "text": "Em relação à malária, analise as assertivas a seguir:\nI. O diagnóstico confirmatório da malária baseia-se no encontro de parasitos no sangue. O método mais utilizado é a microscopia de gota espessa de sangue, colhida por punção digital e corada pelo método de Walker.\nII. A sorologia para pesquisa de anticorpos antiplasmodium não deve ser realizada no caso de suspeita de malária. Seu resultado é relacionado à exposição prévia e é restrito apenas a estudos científicos. Sua solicitação no contexto clínico leva à demora no diagnóstico e maior risco de complicações.\nIII. Pessoas com deficiência suspeita ou confirmada de glicose-6-fosfato-desidrogenase (G6PD), atividade abaixo de 30%, não deverão fazer uso de primaquina.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três estão corretas.\n\nI: o diagnóstico de rotina no Brasil é a gota espessa (corada por Walker ou Giemsa), que permite identificar a espécie e quantificar a parasitemia.\nII: a sorologia indica exposição prévia, não infecção atual; não tem lugar no diagnóstico de malária aguda e atrasaria o tratamento.\nIII: na deficiência de G6PD (atividade <30%), a primaquina pode causar hemólise grave; nesses casos o esquema é adaptado conforme o Guia do MS.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva correta.",
    "reference": "Ministério da Saúde — Guia de Tratamento da Malária no Brasil (2021/2024)",
    "tags": [
      "malária",
      "gota espessa",
      "primaquina",
      "deficiência de G6PD"
    ],
    "tip": "Malária: gota espessa para diagnóstico; G6PD baixa contraindica primaquina."
  },
  {
    "id": "amrigs2025-15",
    "module": "Clínica Médica",
    "text": "Em relação à osteoporose, analise as assertivas a seguir:\nI. O raloxifeno está aprovado para prevenção e tratamento da osteoporose da coluna vertebral em mulheres na pós-menopausa, sem sintomas climatéricos, promovendo redução significante de fraturas vertebrais, sem impacto na redução de outras fraturas.\nII. Pacientes com T-score igual ou menor do que -2,5 DP na coluna lombar, colo femoral, fêmur total ou rádio 33% devem ser considerados para terapia farmacológica.\nIII. O tratamento com altas doses de vitamina D (dose superior a 50.000 UI por semana) é recomendado para todas as mulheres em pós-menopausa, independentemente do nível sérico de vitamina D e do histórico de fraturas.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: o raloxifeno (modulador seletivo do receptor de estrogênio) reduz fraturas vertebrais, sem redução comprovada de fraturas não vertebrais ou de quadril; não é usado com fogachos (pode piorá-los).\nII correta: T-score ≤ −2,5 em coluna lombar, colo do fêmur, fêmur total ou rádio 33% define osteoporose e indica tratamento farmacológico.\nIII incorreta: vitamina D em doses altas não é recomendada para todas; a reposição depende do nível sérico e do risco, e megadoses intermitentes chegaram a aumentar quedas e fraturas em estudos.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada e a I está correta.\n\nI, II e III (D): a III está errada.",
    "reference": "Diretriz Brasileira para o Diagnóstico e Tratamento da Osteoporose em Mulheres na Pós-Menopausa (2023) / PCDT Osteoporose",
    "tags": [
      "osteoporose",
      "raloxifeno",
      "densitometria",
      "vitamina D"
    ],
    "tip": "Raloxifeno: protege vértebra, não quadril."
  },
  {
    "id": "amrigs2025-16",
    "module": "Clínica Médica",
    "text": "Em relação à doença pulmonar obstrutiva crônica, analise as assertivas a seguir:\nI. O diagnóstico funcional de obstrução ao fluxo aéreo se baseia na relação entre volume expiratório forçado no primeiro segundo e capacidade vital forçada (VEF1 e CVF, respectivamente), considerando-se anormal um valor inferior a 80%.\nII. A dosagem do nível sérico de alfa-1-antitripsina deve ser considerada para casos de enfisema pulmonar panlobular com predomínio basal de início precoce (antes da 4ª década), especialmente em não fumantes.\nIII. A teofilina é eficaz na redução de dispneia em estudos clínicos randomizados, mas o risco de toxicidade e a necessidade de monitorização do nível sérico limitam sua utilidade clínica.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 2,
    "explanation": "I incorreta: obstrução ao fluxo aéreo é definida por VEF1/CVF pós-broncodilatador <0,70 (GOLD), não <80%.\nII correta: enfisema panlobular de predomínio basal, em jovens (antes dos 45 anos) ou em não fumantes, deve levar à dosagem de alfa-1-antitripsina — e a OMS recomenda dosar em todo paciente com DPOC.\nIII correta: a teofilina tem efeito broncodilatador modesto, mas a janela terapêutica estreita, as interações e a necessidade de dosar nível sérico limitam seu uso.",
    "commentary": "Apenas I e II (A): a I está errada.\n\nApenas I e III (B): a I está errada.\n\nI, II e III (D): a I está errada.",
    "reference": "GOLD 2024 / Diretrizes da SBPT para DPOC",
    "tags": [
      "DPOC",
      "espirometria",
      "alfa-1-antitripsina",
      "teofilina"
    ],
    "tip": "DPOC: VEF1/CVF pós-BD <0,70."
  },
  {
    "id": "amrigs2025-17",
    "module": "Clínica Médica",
    "text": "Um dos desafios no cuidado ao paciente idoso é reconhecer as particularidades que essa faixa etária apresenta em relação a outras. Qual das alternativas a seguir apresenta uma particularidade comum nos pacientes idosos e que requer atenção especial?",
    "options": [
      "O metabolismo dos medicamentos é mais rápido, exigindo doses mais altas.",
      "A sensibilidade à dor diminui, tornando desnecessário o uso de analgésicos.",
      "A polifarmácia, devido ao risco aumentado de interações medicamentosas.",
      "A capacidade cognitiva melhora, facilitando a adesão ao tratamento."
    ],
    "correctAnswer": 2,
    "explanation": "A polifarmácia é uma das principais síndromes geriátricas: o uso de muitos medicamentos aumenta interações, efeitos adversos, quedas, delirium e internações. Exige revisão periódica da prescrição e uso de critérios como Beers e STOPP/START.",
    "commentary": "Metabolismo mais rápido (A): no idoso a depuração hepática e renal cai; em geral as doses devem ser menores.\n\nSensibilidade à dor diminui, sem analgesia (B): a dor é subdiagnosticada e subtratada nos idosos, mas precisa ser tratada.\n\nCapacidade cognitiva melhora (D): com a idade, aumentam a prevalência de comprometimento cognitivo e as dificuldades de adesão.",
    "reference": "Critérios de Beers (AGS 2023) / Caderno de Atenção Básica nº 19 — Envelhecimento e saúde da pessoa idosa",
    "tags": [
      "polifarmácia",
      "idoso",
      "geriatria",
      "interações medicamentosas"
    ],
    "tip": "No idoso: comece com dose baixa, aumente devagar e revise a lista de remédios."
  },
  {
    "id": "amrigs2025-18",
    "module": "Clínica Médica",
    "text": "O angioedema é uma condição potencialmente grave, caracterizada pelo edema súbito de tecidos subcutâneos e submucosos. Em relação à fisiopatologia, diagnóstico e manejo do angioedema, assinale a alternativa correta.",
    "options": [
      "O angioedema hereditário é causado por uma deficiência de C3, resultando em uma produção excessiva de bradicinina.",
      "Os Inibidores da Enzima Conversora de Angiotensina (IECA) são a causa mais comum de angioedema adquirido, com boa resposta a anti-histamínicos.",
      "O angioedema mediado por bradicinina responde bem ao tratamento com anti-histamínicos e corticosteroides.",
      "A dosagem de C1-inibidor é fundamental para o diagnóstico de angioedema hereditário."
    ],
    "correctAnswer": 3,
    "explanation": "O angioedema hereditário decorre da deficiência quantitativa (tipo I) ou funcional (tipo II) do inibidor de C1 esterase. Por isso, a investigação inclui C4 (baixo) e dosagem quantitativa e funcional do C1-INH. É mediado por bradicinina, sem urticária, e não responde a anti-histamínicos, corticoides ou adrenalina — trata-se com concentrado de C1-INH, icatibanto ou plasma.",
    "commentary": "Deficiência de C3 (A): o defeito é do inibidor de C1, não de C3.\n\nIECA, com boa resposta a anti-histamínicos (B): o angioedema por IECA é mediado por bradicinina e não responde a anti-histamínicos; a causa adquirida mais comum, no geral, é a mediada por histamina (alérgica/urticária).\n\nResposta a anti-histamínicos e corticoides (C): é exatamente o que não ocorre no angioedema bradicinérgico.",
    "reference": "Diretrizes Brasileiras do Angioedema Hereditário (ASBAI/GEBRAEH, 2022)",
    "tags": [
      "angioedema hereditário",
      "inibidor de C1",
      "bradicinina",
      "IECA"
    ],
    "tip": "Angioedema sem urticária que não responde a anti-histamínico: pense em bradicinina (C1-INH, IECA)."
  },
  {
    "id": "amrigs2025-19",
    "module": "Clínica Médica",
    "text": "Homem, 21 anos, com quadro de alucinações auditivas e delírios persecutórios é levado à emergência. Como estava desconfiado e com comportamento desafiador, optou-se por administrar 1 ampola de haloperidol IM para buscar acalmá-lo. Em 30 minutos, necessitou mais uma dose. Duas horas após ter recebido a medicação, passou a ter sensação de desconforto, angústia e desassossego, mexendo o tronco, mantendo pés e braços agitados, e ficando mais ansioso e irritado. Referia não conseguir ficar parado, pedindo por socorro.\n\nConsiderando o caso apresentado, qual é a possível hipótese diagnóstica e a conduta a ser tomada, respectivamente?",
    "options": [
      "Crise de pânico – administração de benzodiazepínico.",
      "Acatisia – administração de benzodiazepínico/propranolol.",
      "Agitação psicótica – administração de antipsicótico.",
      "Delirium hiperativo – administração de antipsicótico."
    ],
    "correctAnswer": 1,
    "explanation": "Inquietação motora subjetiva e objetiva (não consegue ficar parado, mexe tronco e pernas, angústia), surgindo horas após doses repetidas de haloperidol, é acatisia — efeito extrapiramidal dos antipsicóticos de alta potência. O tratamento é reduzir ou suspender o antipsicótico e usar propranolol, benzodiazepínico (ou anticolinérgico, menos eficaz na acatisia).",
    "commentary": "Crise de pânico (A): o quadro começou após o antipsicótico e é dominado pela inquietação motora, não por ataque súbito de medo com sintomas autonômicos.\n\nAgitação psicótica, mais antipsicótico (C): confundir acatisia com piora psicótica e dar mais haloperidol é o erro clássico, que agrava o quadro.\n\nDelirium hiperativo (D): não há alteração de consciência ou de atenção flutuante.",
    "reference": "Kaplan & Sadock — Compêndio de Psiquiatria / ABP — Diretrizes para emergências psiquiátricas",
    "tags": [
      "acatisia",
      "haloperidol",
      "efeitos extrapiramidais",
      "antipsicóticos"
    ],
    "tip": "Inquietação após haloperidol = acatisia: propranolol/benzodiazepínico, nunca mais antipsicótico."
  },
  {
    "id": "amrigs2025-20",
    "module": "Clínica Médica",
    "text": "Mulher, 78 anos, estava em tratamento para hipertensão arterial, diabetes tipo 2, dislipidemia e incontinência urinária. Realizou cirurgia de revascularização miocárdica. No terceiro dia de pós-operatório, a paciente achava que estava em sua casa, referindo aguardar seu marido chegar do trabalho, não demonstrando ter ciência de que ele já era falecido. Em alguns momentos, parecia mais calma e lúcida, mas alternava esse comportamento com outros de desorganização e discurso incoerente. Durante o dia, tendia a ficar mais sonolenta. Na avaliação, a paciente não colaborava com o exame físico. Mostrava-se perplexa, assustando-se com sons do ambiente, via cachorros caminhando no quarto. Distraía-se com facilidade, não focando sua atenção nas perguntas feitas pelo médico. Durante a noite, ficou agitada, desorganizada, agressiva com a equipe, com tentativas de arrancar os cateteres. Paciente foi diagnosticada com delirium. Em relação ao quadro diagnóstico apresentado, assinale a alternativa INCORRETA.",
    "options": [
      "O processo de identificação e tratamento de possíveis causas clínicas associadas deve ser rápido.",
      "Estratégias como reorientação, otimização do sono, exercícios e mobilização do paciente, hidratação oral, auxílio visual e auditivo são medidas preventivas importantes, demonstrando redução da prevalência dessa condição.",
      "Deve-se evitar o uso de benzodiazepínico, sendo reservado a casos específicos, como de delirium secundário a abstinência de álcool ou de sedativos/hipnóticos.",
      "O uso de antipsicóticos está indicado tanto para prevenção como para o tratamento do delirium hiperativo."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a INCORRETA. Antipsicóticos NÃO estão indicados para prevenção de delirium e não mostraram reduzir sua duração ou mortalidade; no tratamento, ficam reservados para agitação grave com risco para o paciente ou a equipe ou sintomas psicóticos angustiantes, na menor dose e pelo menor tempo.",
    "commentary": "Busca rápida de causas (A): correta — delirium é emergência médica; tratar a causa (infecção, distúrbio metabólico, fármacos, dor, retenção urinária) é o principal tratamento.\n\nMedidas não farmacológicas (B): correta — reorientação, sono, mobilização, hidratação, óculos e aparelho auditivo (modelo HELP) reduzem a incidência.\n\nEvitar benzodiazepínicos (C): correta — pioram o delirium, salvo na abstinência de álcool ou de sedativos.",
    "reference": "NICE CG103 — Delirium / American Geriatrics Society — Postoperative delirium guideline",
    "tags": [
      "delirium",
      "idoso",
      "antipsicóticos",
      "pós-operatório"
    ],
    "tip": "Delirium: trate a causa e use medidas não farmacológicas; antipsicótico só para agitação perigosa."
  },
  {
    "id": "amrigs2025-21",
    "module": "Cirurgia",
    "text": "Paciente em NPO em pós-operatório necessita receber volume adequado de líquidos e quantidade adequada de eletrólitos. Quais são os valores corretos das necessidades básicas (mEq/quilo/dia) de sódio e de potássio, respectivamente?",
    "options": [
      "1,3 e 3,4.",
      "2,0 e 1,0.",
      "3,4 e 1,3.",
      "19,0 e 22,9."
    ],
    "correctAnswer": 1,
    "explanation": "Na hidratação de manutenção do adulto em jejum, as necessidades basais são de cerca de 25–35 mL/kg/dia de água, 1–2 mEq/kg/dia de sódio e cerca de 0,5–1 mEq/kg/dia de potássio. A alternativa que corresponde a essas faixas é sódio 2,0 e potássio 1,0 mEq/kg/dia.",
    "commentary": "1,3 e 3,4 (A): potássio muito acima do basal, com risco de hipercalemia.\n\n3,4 e 1,3 (C): sódio acima da necessidade de manutenção.\n\n19,0 e 22,9 (D): valores absurdos para mEq/kg/dia.",
    "reference": "Sabiston — Tratado de Cirurgia / NICE CG174 — Intravenous fluid therapy in adults",
    "tags": [
      "hidratação venosa",
      "pós-operatório",
      "sódio",
      "potássio"
    ],
    "tip": "Manutenção do adulto: Na ~1–2 e K ~1 mEq/kg/dia."
  },
  {
    "id": "amrigs2025-22",
    "module": "Cirurgia",
    "text": "A doença de Crohn é caracterizada por um processo inflamatório que compromete o intestino e pode causar dor abdominal, diarreia e perda de peso. Sobre a doença de Crohn, assinale a alternativa correta.",
    "options": [
      "O processo inflamatório limita-se à mucosa da parede intestinal.",
      "A etiologia está sempre associada a agentes infecciosos.",
      "Todas as camadas da parede intestinal são comprometidas pela inflamação.",
      "Compromete unicamente o íleo terminal."
    ],
    "correctAnswer": 2,
    "explanation": "A doença de Crohn causa inflamação transmural — acomete todas as camadas da parede intestinal. Isso explica suas complicações típicas: fístulas, abscessos e estenoses. Pode acometer qualquer segmento, da boca ao ânus, de forma salteada; o íleo terminal é a localização mais frequente.",
    "commentary": "Limitada à mucosa (A): isso descreve a retocolite ulcerativa.\n\nSempre associada a infecção (B): a etiologia é multifatorial (genética, microbiota, imunidade, ambiente); não há agente infeccioso definido.\n\nApenas íleo terminal (D): é o local mais comum, mas não o único; cólon, jejuno, região perianal e trato digestivo alto também podem ser acometidos.",
    "reference": "Consenso Brasileiro de Doença Inflamatória Intestinal (GEDIIB) / Sabiston",
    "tags": [
      "doença de Crohn",
      "doença inflamatória intestinal",
      "inflamação transmural"
    ],
    "tip": "Crohn: transmural e salteado; RCU: mucosa e contínua a partir do reto."
  },
  {
    "id": "amrigs2025-23",
    "module": "Cirurgia",
    "text": "Paciente adulto, em pós-operatório de grande cirurgia, apresenta edema generalizado em membro inferior direito e dor na panturrilha, mais acentuada à flexão do pé direito.\n\nConsiderando o caso apresentado, a hipótese diagnóstica mais provável é:",
    "options": [
      "Traumatismo por mobilização excessiva.",
      "Oclusão arterial aguda.",
      "Trombose venosa profunda.",
      "Tromboangeíte obliterante."
    ],
    "correctAnswer": 2,
    "explanation": "Pós-operatório de grande cirurgia (imobilização, estado pró-trombótico), edema unilateral do membro inferior e dor na panturrilha à dorsiflexão do pé (sinal de Homans) apontam para trombose venosa profunda. A confirmação é feita com ultrassonografia com Doppler venoso.",
    "commentary": "Trauma por mobilização (A): não explica edema de todo o membro em contexto de alto risco trombótico.\n\nOclusão arterial aguda (B): membro frio, pálido, sem pulsos, com dor intensa e parestesia — não edema.\n\nTromboangeíte obliterante (D): doença de jovens fumantes, com isquemia distal e flebite migratória, sem relação com pós-operatório.",
    "reference": "Diretrizes da SBACV — Trombose venosa profunda",
    "tags": [
      "trombose venosa profunda",
      "pós-operatório",
      "sinal de Homans",
      "tromboembolismo venoso"
    ],
    "tip": "Pós-operatório + edema unilateral + dor na panturrilha = TVP até prova em contrário."
  },
  {
    "id": "amrigs2025-24",
    "module": "Cirurgia",
    "text": "Em pacientes adultos, obstruções intestinais em cólon causadas por doença neoplásica são mais comuns no:",
    "options": [
      "Ângulo hepático.",
      "Ângulo esplênico.",
      "Cólon transverso.",
      "Cólon esquerdo."
    ],
    "correctAnswer": 3,
    "explanation": "A obstrução do cólon por câncer é mais frequente no cólon esquerdo (descendente e sigmoide): a luz é mais estreita, as fezes são mais sólidas e os tumores costumam ser anulares e estenosantes (\"em anel de guardanapo\"). No cólon direito, de luz maior e fezes líquidas, o tumor tende a sangrar (anemia) antes de obstruir.",
    "commentary": "Ângulo hepático (A): pertence ao cólon direito/transverso, menos sujeito a obstrução.\n\nÂngulo esplênico (B): é um ponto de estreitamento e pode obstruir, mas, isoladamente, não é a localização mais comum.\n\nCólon transverso (C): menos frequente que o cólon esquerdo como sede de câncer obstrutivo.",
    "reference": "Sabiston — Tratado de Cirurgia / Diretrizes da SBCP",
    "tags": [
      "câncer colorretal",
      "obstrução intestinal",
      "cólon esquerdo"
    ],
    "tip": "Cólon esquerdo obstrui; cólon direito sangra (anemia)."
  },
  {
    "id": "amrigs2025-25",
    "module": "Cirurgia",
    "text": "Paciente adulto, sexo masculino, apresenta quadro de estenose pilórica. Considerando o quadro, assinale a alternativa que apresenta o diagnóstico mais provável.",
    "options": [
      "Carcinoma gástrico.",
      "Úlcera péptica duodenal.",
      "Pólipos gástricos.",
      "Fitobezoar gástrico."
    ],
    "correctAnswer": 0,
    "explanation": "No adulto, a obstrução do trato de saída gástrico (estenose pilórica) hoje tem como principal causa a neoplasia — sobretudo o adenocarcinoma gástrico distal (antro e piloro). A úlcera péptica era a causa mais comum no passado, mas perdeu espaço com os IBPs e a erradicação do H. pylori. Diante de estenose pilórica no adulto, a primeira hipótese a investigar (EDA com biópsia) é câncer.",
    "commentary": "Úlcera péptica duodenal (B): causa clássica e ainda frequente em algumas séries, mas superada pelas neoplasias na era dos IBPs.\n\nPólipos gástricos (C): raramente causam obstrução.\n\nFitobezoar (D): causa rara, associada a gastroparesia ou cirurgia gástrica prévia.\n\nObservação: algumas referências ainda citam a úlcera péptica como causa mais comum; a banca seguiu a visão atual, de predomínio neoplásico.",
    "reference": "Sabiston — Tratado de Cirurgia (obstrução do trato de saída gástrico)",
    "tags": [
      "estenose pilórica",
      "obstrução do trato de saída gástrico",
      "câncer gástrico",
      "úlcera péptica"
    ],
    "tip": "Estenose pilórica no adulto: câncer gástrico até prova em contrário."
  },
  {
    "id": "amrigs2025-26",
    "module": "Cirurgia",
    "text": "Paciente com fibrilação atrial, com quadro de dor abdominal e história de colecistectomia prévia. A dor iniciou em epigástrio e irradiou para a região umbilical e fossa ilíaca direita. Apresenta temperatura axilar 37,5°C, acompanhada de náuseas e vômitos. Ao exame físico, apresentou dor à palpação abdominal e presença de sinal de Blumberg. Qual é a hipótese diagnóstica mais provável no caso?",
    "options": [
      "Síndrome intestinal inflamatória.",
      "Doença de Crohn.",
      "Trombose mesentérica.",
      "Apendicite aguda."
    ],
    "correctAnswer": 3,
    "explanation": "A dor que começa no epigástrio/periumbigo e migra para a fossa ilíaca direita, com febre baixa, náuseas e vômitos e Blumberg positivo, é a apresentação clássica da apendicite aguda (cronologia de Murphy). A colecistectomia prévia afasta colecistite.",
    "commentary": "Síndrome intestinal inflamatória (A): quadro crônico, com diarreia, sangue ou muco e perda de peso.\n\nDoença de Crohn (B): pode simular apendicite (ileíte), mas costuma haver história crônica de diarreia, dor e emagrecimento.\n\nTrombose mesentérica (C): a fibrilação atrial lembra embolia mesentérica, mas esta se apresenta com dor desproporcional ao exame físico e sem migração para a fossa ilíaca direita; aqui o exame mostra irritação peritoneal localizada.\n\nObservação: a fibrilação atrial é um distrator forte; a banca considerou que a migração típica da dor define o diagnóstico de apendicite.",
    "reference": "Sabiston — Tratado de Cirurgia / WSES Jerusalem guidelines (2020)",
    "tags": [
      "apendicite aguda",
      "abdome agudo",
      "sinal de Blumberg",
      "isquemia mesentérica"
    ],
    "tip": "Dor periumbilical que migra para FID + Blumberg = apendicite."
  },
  {
    "id": "amrigs2025-27",
    "module": "Cirurgia",
    "text": "Pólipos de vesícula biliar são achados comuns em ecografias. Assinale a alternativa que apresenta uma indicação para tratamento cirúrgico nesse caso.",
    "options": [
      "História familiar de neoplasia de via biliar.",
      "Medida do pólipo acima de 8 milímetros.",
      "Presença de pólipos em cólon.",
      "Pólipos múltiplos."
    ],
    "correctAnswer": 1,
    "explanation": "O tamanho é o principal preditor de malignidade dos pólipos de vesícula. As diretrizes indicam colecistectomia em pólipos ≥10 mm e em pólipos sintomáticos; pólipos de 6–9 mm com fatores de risco (idade >50–60 anos, colangite esclerosante primária, origem asiática, base séssil/espessamento focal) também podem ser operados. Entre as opções, o tamanho acima de 8 mm é a única característica ligada à indicação cirúrgica.",
    "commentary": "História familiar de neoplasia biliar (A): não é, isoladamente, indicação cirúrgica nas diretrizes.\n\nPólipos no cólon (C): não têm relação com o manejo do pólipo de vesícula.\n\nPólipos múltiplos (D): multiplicidade sugere pseudopólipos de colesterol, geralmente benignos.\n\nObservação: o corte clássico é 10 mm; o limite de 8 mm da alternativa é discutível, aceito pela banca por ser a única opção ligada ao tamanho.",
    "reference": "ESGAR/EAES/EFISDS/ESGE — Management and follow-up of gallbladder polyps (2022)",
    "tags": [
      "pólipo de vesícula biliar",
      "colecistectomia",
      "vesícula biliar"
    ],
    "tip": "Pólipo de vesícula ≥10 mm (ou 6–9 mm com fator de risco) = colecistectomia."
  },
  {
    "id": "amrigs2025-28",
    "module": "Cirurgia",
    "text": "Sobre as hérnias de hiato, é INCORRETO afirmar que:",
    "options": [
      "Qualquer tipo de hérnia pode gerar sintomas clássicos de refluxo.",
      "A membrana frenoesofágica é uma continuação da fáscia endoabdominal que se ancora no esôfago.",
      "As hérnias paraesofágicas podem estar associadas à doença do refluxo gastroesofágico (DRGE).",
      "A pressão relativamente positiva dentro do tórax facilita a migração visceral."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a INCORRETA. A pressão intratorácica é negativa em relação à abdominal; é esse gradiente (pressão abdominal positiva, torácica negativa) que favorece a migração das vísceras para o tórax. Dizer que o tórax tem pressão \"relativamente positiva\" está errado.",
    "commentary": "Qualquer tipo pode dar sintomas de refluxo (A): correta — inclusive as paraesofágicas.\n\nMembrana frenoesofágica (B): correta — é uma continuação da fáscia endoabdominal (transversalis) que se ancora no esôfago.\n\nParaesofágicas associadas a DRGE (C): correta — sobretudo as mistas (tipo III), em que a junção também migra.",
    "reference": "Sabiston — Tratado de Cirurgia / SAGES — Guidelines for the management of hiatal hernia (2013)",
    "tags": [
      "hérnia de hiato",
      "DRGE",
      "membrana frenoesofágica"
    ],
    "tip": "Gradiente: abdome com pressão positiva, tórax negativa — as vísceras sobem."
  },
  {
    "id": "amrigs2025-29",
    "module": "Cirurgia",
    "text": "Sobre o tratamento da DRGE, assinale a alternativa correta.",
    "options": [
      "Endoscopia Digestiva Alta (EDA), manometria, monitoramento do pH, esofagograma e cintilografia são exames essenciais para avaliação pré-operatória.",
      "O Inibidor de Bomba de Prótons (IBP) age ligando-se de forma reversível às células parietais do estômago.",
      "O padrão-ouro para o diagnóstico da DRGE é a pHmetria de 24 horas.",
      "A dose mínima de IBP é o padrão-ouro para o manejo dos sintomas de refluxo."
    ],
    "correctAnswer": 0,
    "explanation": "Antes da cirurgia antirrefluxo, a avaliação deve confirmar o refluxo e estudar a anatomia e a motilidade: EDA (esofagite, Barrett, hérnia), manometria (exclui acalásia e distúrbios motores, orienta o tipo de fundoplicatura), pHmetria/impedanciometria (prova o refluxo) e esofagograma (anatomia da hérnia). A cintilografia de esvaziamento gástrico entra quando há suspeita de gastroparesia. A banca considerou esse conjunto como a avaliação pré-operatória correta.",
    "commentary": "IBP com ligação reversível (B): os IBPs ligam-se de forma covalente e irreversível à H⁺/K⁺-ATPase.\n\npHmetria como padrão-ouro diagnóstico (C): a banca a considerou incorreta; o diagnóstico de DRGE é sobretudo clínico (e pela resposta ao IBP), e a pHmetria é o melhor exame para documentar refluxo ácido patológico, não padrão-ouro diagnóstico isolado.\n\nDose mínima de IBP como padrão-ouro (D): o tratamento inicial é com dose plena por 8 semanas; a dose mínima eficaz é estratégia de manutenção.\n\nObservação: chamar a cintilografia de exame \"essencial\" no pré-operatório é exagerado (é seletiva), e muitos textos chamam a pHmetria de 24 h de padrão-ouro para refluxo ácido. A questão é discutível.",
    "reference": "Consenso Brasileiro da DRGE (FBG) / Consenso de Lyon 2.0 (2023) / SAGES guidelines",
    "tags": [
      "DRGE",
      "fundoplicatura",
      "pHmetria",
      "manometria esofágica",
      "inibidor de bomba de prótons"
    ],
    "tip": "Antes da fundoplicatura: EDA + manometria + pHmetria (+ esofagograma)."
  },
  {
    "id": "amrigs2025-30",
    "module": "Cirurgia",
    "text": "Homem, 72 anos, apresenta quadro de dor epigástrica há cerca de 90 dias. Na última semana, apresentou quadro de hemorragia digestiva baixa. EDA mostra lesão submucosa, com área de ulceração central, com cerca de 4 cm na região do corpo do estômago. Biópsia endoscópica não revela tumor. Tomografia computadorizada de abdome sugere diagnóstico de tumor do estroma gastrointestinal (GIST) de 8 cm no maior diâmetro. Considerando o caso apresentado, analise as assertivas a seguir:\nI. Biópsia percutânea guiada por tomografia computadorizada é o melhor método para definir o diagnóstico dessa lesão.\nII. O exame imunoistoquímico é fundamental para o diagnóstico desses tumores.\nIII. A profundidade da invasão na parede gástrica e a presença de linfonodos comprometidos são os principais fatores prognósticos para definir a sobrevida.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas II e III."
    ],
    "correctAnswer": 1,
    "explanation": "I incorreta: GIST ressecável e com imagem típica não precisa de biópsia pré-operatória; a biópsia percutânea é evitada pelo risco de ruptura e disseminação peritoneal. Quando necessária, prefere-se a punção por ecoendoscopia.\nII correta: a imunoistoquímica (CD117/KIT e DOG1) é fundamental para o diagnóstico.\nIII incorreta: o prognóstico do GIST depende de tamanho, índice mitótico, localização e ruptura tumoral (critérios de Miettinen/Joensuu); não se usa profundidade de invasão, e metástase linfonodal é rara.",
    "commentary": "Apenas I (A): a I está errada.\n\nApenas III (C): os fatores da III são os do adenocarcinoma, não os do GIST.\n\nApenas II e III (D): a III está errada.",
    "reference": "NCCN Guidelines — GIST / ESMO (2022) — Gastrointestinal stromal tumours",
    "tags": [
      "GIST",
      "tumor estromal gastrointestinal",
      "CD117",
      "imunoistoquímica"
    ],
    "tip": "GIST: CD117/DOG1; prognóstico = tamanho + mitoses + local + ruptura."
  },
  {
    "id": "amrigs2025-31",
    "module": "Cirurgia",
    "text": "Após sofrer acidente automobilístico, homem, 50 anos, vem à consulta com a necessidade de realizar procedimento cirúrgico de retirada do baço. Está muito preocupado com o risco de apresentar um quadro infeccioso e solicita informações sobre possíveis complicações infecciosas tardias. Considerando o caso em questão, analise as assertivas a seguir:\nI. O micro-organismo mais frequentemente envolvido é o S. pneumoniae.\nII. O período de maior risco para desenvolvimento da sepse pós-esplenectomia é durante os primeiros 12 meses após a retirada do baço, sendo muito rara após esse período.\nIII. A mortalidade por sepse pós-esplenectomia é maior nos indivíduos que fizeram a esplenectomia por trauma do que naqueles que realizaram a operação por doenças hematológicas.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas I e III."
    ],
    "correctAnswer": 3,
    "explanation": "I correta: o Streptococcus pneumoniae é o agente mais frequente da sepse fulminante pós-esplenectomia (OPSI), seguido de Haemophilus influenzae b e meningococo.\nII incorreta: o risco é maior nos primeiros 2 anos, mas persiste por toda a vida; há casos décadas após a cirurgia — por isso vacinação e orientação são permanentes.\nIII considerada correta pela banca.",
    "commentary": "Apenas I (A): a banca considerou a III também correta.\n\nApenas II (B): a II está errada.\n\nApenas III (C): a I está correta.\n\nObservação: a III é discutível. A maior parte da literatura mostra risco e mortalidade por OPSI MENORES após esplenectomia por trauma do que por doenças hematológicas (talassemia, linfoma, anemia falciforme), atribuídos à imunodepressão de base e, no trauma, à esplenose residual. Pela literatura, a resposta seria \"Apenas I\" (A); o gabarito oficial é D.",
    "reference": "Sabiston — Tratado de Cirurgia (baço) / Guia do CRIE — Ministério da Saúde",
    "tags": [
      "esplenectomia",
      "OPSI",
      "pneumococo",
      "asplenia"
    ],
    "tip": "Asplenia: risco de OPSI por toda a vida — vacinar contra pneumococo, Hib e meningococo."
  },
  {
    "id": "amrigs2025-32",
    "module": "Cirurgia",
    "text": "Mulher, 18 anos, apresenta nódulo isolado em lobo direito da tireoide diagnosticado há 30 dias. Provas de função da tireoide normais. Ecografia demonstra lesão sólida com 2,5 cm de diâmetro. Assinale a alternativa que apresenta a melhor conduta para avaliação diagnóstica desse nódulo.",
    "options": [
      "Cintilografia de tireoide.",
      "Tomografia computadorizada com contraste endovenoso.",
      "Punção aspirativa com agulha fina.",
      "Cirurgia com congelação do nódulo."
    ],
    "correctAnswer": 2,
    "explanation": "Nódulo tireoidiano sólido de 2,5 cm com função tireoidiana normal (TSH normal) tem indicação de punção aspirativa com agulha fina (PAAF), que define a conduta pelo sistema de Bethesda. Em nódulo sólido, a PAAF é indicada a partir de 1–1,5 cm conforme o padrão ultrassonográfico (TI-RADS/ATA).",
    "commentary": "Cintilografia (A): reservada para TSH baixo, à procura de nódulo hiperfuncionante (\"quente\").\n\nTomografia com contraste (B): não avalia malignidade; o iodo pode atrapalhar uma eventual radioiodoterapia.\n\nCirurgia com congelação (D): não é a primeira etapa; a congelação tem baixa acurácia para lesões foliculares.",
    "reference": "Consenso Brasileiro sobre Nódulos e Câncer Diferenciado de Tireoide (SBEM) / ATA 2015",
    "tags": [
      "nódulo tireoidiano",
      "PAAF",
      "classificação de Bethesda",
      "tireoide"
    ],
    "tip": "Nódulo com TSH normal: ultrassom + PAAF; TSH baixo: cintilografia."
  },
  {
    "id": "amrigs2025-33",
    "module": "Cirurgia",
    "text": "Mulher, 78 anos, assintomática, realiza ecografia abdominal de rotina que detecta lesão de 12 mm de diâmetro localizada na cabeça do pâncreas. Exames laboratoriais normais. Tomografia computadorizada de abdome com contraste revela nódulo hipervascularizado na cabeça do pâncreas, sugestivo de um tumor neuroendócrino não funcionante. Considerando o caso em questão, analise as assertivas a seguir:\nI. Esse tipo de tumor se apresenta mais frequentemente associado a síndromes genéticas do que de maneira esporádica.\nII. A dosagem da cromogranina A é de auxílio diagnóstico nesses casos.\nIII. Indicação de ressecção cirúrgica está sempre indicada por tratar-se de um tumor invariavelmente maligno, com alto risco de desenvolver metástases.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas I e II."
    ],
    "correctAnswer": 1,
    "explanation": "I incorreta: a maioria dos tumores neuroendócrinos pancreáticos é esporádica; só uma minoria se associa a síndromes genéticas (NEM-1, von Hippel-Lindau, NF-1, esclerose tuberosa).\nII correta: a cromogranina A é o marcador sérico mais usado nos tumores neuroendócrinos, inclusive nos não funcionantes, com limitações (IBP, insuficiência renal).\nIII incorreta: nem todo TNE é maligno; tumores não funcionantes pequenos (<2 cm), assintomáticos e de baixo grau podem ser observados, sobretudo em idosas como a paciente.",
    "commentary": "Apenas I (A): a I está errada.\n\nApenas III (C): a III está errada — ressecção não é \"sempre\" indicada.\n\nApenas I e II (D): a I está errada.",
    "reference": "ENETS Consensus Guidelines (2023) — Non-functioning pancreatic NETs / NCCN Neuroendocrine Tumors",
    "tags": [
      "tumor neuroendócrino pancreático",
      "cromogranina A",
      "pâncreas",
      "NEM-1"
    ],
    "tip": "TNE pancreático não funcionante <2 cm, assintomático: pode ser observado."
  },
  {
    "id": "amrigs2025-34",
    "module": "Cirurgia",
    "text": "Sobre o esôfago de Barrett, assinale a alternativa correta.",
    "options": [
      "Ablação por radiofrequência (RFA) pode erradicar displasia de alto grau.",
      "Esofagectomia está indicada diante do achado de adenocarcinoma.",
      "Uso de crioterapia está associado a elevado risco de estenose esofágica.",
      "Os pacientes possuem elevado risco absoluto de desenvolvimento de câncer."
    ],
    "correctAnswer": 0,
    "explanation": "No esôfago de Barrett com displasia de alto grau (ou adenocarcinoma intramucoso), o tratamento de escolha é endoscópico: ressecção das lesões visíveis seguida de ablação por radiofrequência, que erradica a displasia e a metaplasia na maioria dos pacientes.",
    "commentary": "Esofagectomia diante de adenocarcinoma (B): o adenocarcinoma restrito à mucosa (T1a) é tratado por via endoscópica; a esofagectomia fica para lesões mais profundas.\n\nCrioterapia com alto risco de estenose (C): é uma alternativa de ablação, com taxas de estenose baixas, semelhantes às da radiofrequência.\n\nRisco absoluto elevado de câncer (D): o risco relativo é alto, mas o absoluto é baixo (cerca de 0,1–0,5% ao ano no Barrett sem displasia).",
    "reference": "ACG Clinical Guideline — Barrett's Esophagus (2022) / Consenso Brasileiro sobre Esôfago de Barrett",
    "tags": [
      "esôfago de Barrett",
      "displasia de alto grau",
      "ablação por radiofrequência"
    ],
    "tip": "Barrett com displasia de alto grau: ressecção endoscópica + ablação, não esofagectomia."
  },
  {
    "id": "amrigs2025-35",
    "module": "Cirurgia",
    "text": "Sobre o atendimento à vítima de ingestão acidental de soda cáustica, assinale a alternativa correta.",
    "options": [
      "O exame físico é pouco revelador, e o diagnóstico ocorre pela endoscopia digestiva alta.",
      "A avaliação por meio de endoscopia digestiva alta é mais segura após 48 horas do acidente.",
      "A prescrição rotineira de corticosteroides não está recomendada para redução do risco de estenose.",
      "A esofagectomia é o tratamento de escolha nos casos de lesões ulceradas ou circunferenciais."
    ],
    "correctAnswer": 2,
    "explanation": "Na ingestão de cáusticos, os corticoides não são recomendados de rotina: os estudos não mostraram redução de estenose e eles podem mascarar perfuração e favorecer infecção.",
    "commentary": "Exame físico pouco revelador (A): o exame (lesões orais, sialorreia, estridor, dor torácica ou abdominal, peritonite) é importante para gravidade e via aérea, embora não exclua lesão esofágica.\n\nEDA mais segura após 48 h (B): a EDA deve ser feita precocemente, nas primeiras 12–48 h (idealmente nas primeiras 24 h); entre 5 e 15 dias, quando a parede está mais frágil, há maior risco de perfuração.\n\nEsofagectomia para úlceras ou lesões circunferenciais (D): a maioria dessas lesões é tratada clinicamente; cirurgia de urgência fica para necrose transmural/perfuração.",
    "reference": "WSES-COSD guidelines — Caustic ingestion (2019) / Sabiston",
    "tags": [
      "ingestão de cáusticos",
      "soda cáustica",
      "endoscopia digestiva alta",
      "estenose esofágica"
    ],
    "tip": "Cáustico: EDA nas primeiras 24 h; corticoide não previne estenose."
  },
  {
    "id": "amrigs2025-36",
    "module": "Cirurgia",
    "text": "Sobre as hérnias hiatais paraesofágicas, assinale a alternativa correta.",
    "options": [
      "Os sintomas mais frequentes são saciedade precoce, disfagia, odinofagia e dor torácica.",
      "A decisão pelo reparo cirúrgico ou tratamento conservador está baseada nos sintomas.",
      "Na hérnia hiatal tipo II, a junção esofagogástrica está situada acima do diafragma.",
      "Na hérnia hiatal tipo III, ocorre migração do estômago e outras vísceras acima do hiato."
    ],
    "correctAnswer": 1,
    "explanation": "Nas hérnias paraesofágicas, a decisão entre reparo cirúrgico eletivo e acompanhamento se baseia na presença de sintomas: hérnias sintomáticas devem ser operadas; nas assintomáticas, sobretudo em idosos, a vigilância é aceitável, porque o risco anual de complicação aguda (volvo, encarceramento) é baixo.",
    "commentary": "Sintomas mais frequentes (A): grande parte é assintomática ou oligossintomática; quando há sintomas, predominam saciedade precoce, dor pós-prandial e azia — odinofagia não é típica.\n\nTipo II com JEG acima do diafragma (C): no tipo II (paraesofágica pura) a junção esofagogástrica fica na posição normal; ela sobe no tipo I e no tipo III.\n\nTipo III com outras vísceras (D): migração de outras vísceras (cólon, baço) define o tipo IV; o tipo III é misto (JEG e fundo acima do hiato).",
    "reference": "SAGES — Guidelines for the management of hiatal hernia (2013)",
    "tags": [
      "hérnia de hiato",
      "hérnia paraesofágica",
      "classificação das hérnias de hiato"
    ],
    "tip": "Hiato: I = deslizamento; II = só fundo; III = misto; IV = outras vísceras."
  },
  {
    "id": "amrigs2025-37",
    "module": "Cirurgia",
    "text": "Sobre a hemorragia digestiva alta por úlcera péptica, assinale a alternativa que apresenta risco elevado de ressangramento.",
    "options": [
      "Úlcera Forrest IIc.",
      "Úlcera na grande curvatura gástrica.",
      "Úlcera na parede posterior do bulbo.",
      "Necessidade de transfusão de 3U de concentrado de hemácias."
    ],
    "correctAnswer": 2,
    "explanation": "Úlceras na parede posterior do bulbo duodenal ficam sobre a artéria gastroduodenal, vaso calibroso: têm alto risco de ressangramento e de falha do tratamento endoscópico. O mesmo vale para úlceras altas na pequena curvatura (artéria gástrica esquerda).",
    "commentary": "Forrest IIc (A): base com hematina (mancha plana), risco de ressangramento baixo (<10%).\n\nGrande curvatura (B): não é sítio de alto risco; a pequena curvatura alta é que preocupa.\n\nTransfusão de 3 U (D): a necessidade de transfusão entra nos escores de gravidade, mas não é um fator anatômico clássico de ressangramento como a parede posterior do bulbo.",
    "reference": "ESGE Guideline — Non-variceal upper GI hemorrhage (2021) / Sabiston",
    "tags": [
      "hemorragia digestiva alta",
      "úlcera péptica",
      "classificação de Forrest",
      "artéria gastroduodenal"
    ],
    "tip": "Úlcera de parede posterior do bulbo = artéria gastroduodenal = alto risco."
  },
  {
    "id": "amrigs2025-38",
    "module": "Cirurgia",
    "text": "Sobre os hormônios dos eixos enteroencefálico e enteroinsular e a cirurgia bariátrica, assinale a alternativa correta.",
    "options": [
      "A grelina é produzida pelas células parietais do corpo gástrico.",
      "GLP-1 promove redução do esvaziamento gástrico.",
      "Após bypass gástrico, ocorre redução da expressão de PYY.",
      "A liberação de NPY não é influenciada pela grelina circulante."
    ],
    "correctAnswer": 1,
    "explanation": "O GLP-1, liberado pelas células L do íleo distal e do cólon, retarda o esvaziamento gástrico, aumenta a saciedade e estimula a secreção de insulina dependente de glicose (efeito incretina). Após o bypass gástrico, o alimento chega mais rápido ao íleo e o GLP-1 aumenta, o que contribui para a perda de peso e a melhora do diabetes.",
    "commentary": "Grelina das células parietais (A): é produzida pelas células X/A (P/D1) oxínticas do fundo gástrico, não pelas parietais.\n\nRedução de PYY após bypass (C): o PYY (também das células L) aumenta após o bypass.\n\nNPY independente da grelina (D): a grelina estimula neurônios NPY/AgRP do núcleo arqueado, aumentando a fome.",
    "reference": "Sabiston — Tratado de Cirurgia (cirurgia bariátrica e metabólica)",
    "tags": [
      "cirurgia bariátrica",
      "GLP-1",
      "grelina",
      "PYY",
      "incretinas"
    ],
    "tip": "Bypass: sobem GLP-1 e PYY, cai a grelina."
  },
  {
    "id": "amrigs2025-39",
    "module": "Cirurgia",
    "text": "Sobre as obstruções intestinais, assinale a alternativa correta.",
    "options": [
      "Na obstrução intestinal por doença de Crohn agudizada, o tratamento cirúrgico está indicado.",
      "No atendimento inicial, a hidratação deve ocorrer sem excesso, para evitar síndrome compartimental.",
      "Drenagem percutânea de abscesso intra-abdominal pode ser indicada para resolver quadro obstrutivo.",
      "Na obstrução intestinal por enterite actínica, o tratamento cirúrgico é a opção de escolha."
    ],
    "correctAnswer": 2,
    "explanation": "Um abscesso intra-abdominal pode causar obstrução intestinal (compressão, íleo inflamatório, aderências). Nesse caso, a drenagem percutânea guiada por imagem pode resolver a obstrução sem laparotomia.",
    "commentary": "Cirurgia na obstrução por Crohn agudizado (A): a obstrução inflamatória aguda costuma responder a tratamento clínico (descompressão, corticoide, antibiótico se houver abscesso); cirurgia fica para estenoses fibróticas ou complicações.\n\nHidratação sem excesso (B): o paciente obstruído costuma estar muito desidratado; a reposição deve ser vigorosa, guiada por diurese e parâmetros hemodinâmicos.\n\nEnterite actínica com cirurgia de escolha (D): a cirurgia é difícil e arriscada (alças friáveis, fístulas); prefere-se tratamento conservador sempre que possível.",
    "reference": "Sabiston — Tratado de Cirurgia (obstrução intestinal)",
    "tags": [
      "obstrução intestinal",
      "abscesso intra-abdominal",
      "drenagem percutânea",
      "enterite actínica"
    ],
    "tip": "Obstrução por abscesso: drenar o abscesso pode resolver."
  },
  {
    "id": "amrigs2025-40",
    "module": "Cirurgia",
    "text": "A parede abdominal é formada por nove camadas de tecido que, dispostas da camada mais externa para a mais interna, apresentam a seguinte sequência: pele, tecido subcutâneo, fáscia superficial, músculo ______________, músculo______________, músculo______________, fáscia transversalis, tecido adiposo pré-peritoneal e peritônio. Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
    "options": [
      "oblíquo externo – oblíquo interno – transverso do abdome",
      "oblíquo interno – oblíquo externo – transverso do abdome",
      "transverso – oblíquo interno – oblíquo externo",
      "oblíquo externo – transverso do abdome – oblíquo interno"
    ],
    "correctAnswer": 0,
    "explanation": "Os músculos da parede anterolateral do abdome, de fora para dentro, são: oblíquo externo, oblíquo interno e transverso do abdome. Abaixo deles vêm a fáscia transversalis, a gordura pré-peritoneal e o peritônio.",
    "commentary": "Oblíquo interno – oblíquo externo – transverso (B): inverte os oblíquos.\n\nTransverso – oblíquo interno – oblíquo externo (C): ordem de dentro para fora, inversa à pedida.\n\nOblíquo externo – transverso – oblíquo interno (D): o transverso é o mais profundo.",
    "reference": "Moore — Anatomia Orientada para a Clínica",
    "tags": [
      "anatomia",
      "parede abdominal",
      "músculos abdominais"
    ],
    "tip": "De fora para dentro: oblíquo Externo, oblíquo Interno, Transverso (E-I-T)."
  },
  {
    "id": "amrigs2025-41",
    "module": "Ginecologia e Obstetrícia",
    "text": "Em relação ao sangramento uterino anormal em uma mulher na menacme, é correto afirmar que:",
    "options": [
      "Sempre se deve descartar um caso de gravidez.",
      "O encaminhamento para especialista deve ser feito se não houver resposta ao tratamento clínico otimizado por 3 semanas.",
      "É irrelevante verificar o índice de massa corporal da paciente.",
      "A espessura endometrial, verificada por ecografia pélvica transvaginal, faz parte da investigação em qualquer fase do ciclo menstrual."
    ],
    "correctAnswer": 0,
    "explanation": "Em toda mulher na menacme com sangramento uterino anormal, o primeiro passo é excluir gravidez (β-hCG), já que abortamento, gestação ectópica e doença trofoblástica são causas importantes e mudam completamente a conduta. Depois, investiga-se pela classificação PALM-COEIN.",
    "commentary": "Encaminhar após 3 semanas sem resposta (B): o prazo de resposta ao tratamento clínico avaliado é de cerca de 3 meses, não 3 semanas.\n\nIMC irrelevante (C): obesidade causa anovulação e é fator de risco para hiperplasia e câncer de endométrio — o IMC importa.\n\nEspessura endometrial em qualquer fase (D): na menacme a espessura varia ao longo do ciclo; o ultrassom deve ser feito, de preferência, na fase folicular precoce, logo após a menstruação.",
    "reference": "FEBRASGO — Sangramento uterino anormal (Protocolo nº 30) / FIGO PALM-COEIN",
    "tags": [
      "sangramento uterino anormal",
      "PALM-COEIN",
      "gravidez",
      "menacme"
    ],
    "tip": "Sangramento uterino anormal na menacme: primeiro β-hCG."
  },
  {
    "id": "amrigs2025-42",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente de 34 anos vem à consulta por sangramento uterino anormal há 2 meses. No exame físico especular, foi identificada uma lesão polipoide, friável, extruindo pelo colo uterino. A paciente tem dosagem de progesterona de 4 ng/ml (valores de normalidade após a ovulação = 5 a 20 ng/ml). A hipótese diagnóstica mais provável e a conduta adequada são, respectivamente:",
    "options": [
      "Câncer de colo uterino – realizar citopatológico.",
      "Pólipos cervicais prolapsados – encaminhar para ginecologista.",
      "Abortamento em curso – encaminhar para uma emergência obstétrica.",
      "Mola hidatiforme – iniciar tratamento com metotrexato."
    ],
    "correctAnswer": 1,
    "explanation": "Lesão polipoide, friável, exteriorizando-se pelo colo, em mulher de 34 anos com sangramento irregular, sugere pólipo (endocervical ou endometrial prolapsado). A progesterona baixa (4 ng/mL) indica ciclo anovulatório e afasta gestação em curso. A conduta é encaminhar ao ginecologista para polipectomia e estudo histológico.",
    "commentary": "Câncer de colo – citopatológico (A): diante de lesão visível, o citopatológico não basta — a lesão deve ser biopsiada; além disso, o aspecto é o de pólipo.\n\nAbortamento em curso (C): não há dado de gestação, e o quadro tem 2 meses de evolução.\n\nMola hidatiforme com metotrexato (D): mola se trata com esvaziamento uterino; metotrexato é para neoplasia trofoblástica persistente, e não há β-hCG descrito.",
    "reference": "FEBRASGO — Tratado de Ginecologia / Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres",
    "tags": [
      "pólipo endocervical",
      "sangramento uterino anormal",
      "anovulação"
    ],
    "tip": "Lesão polipoide saindo pelo colo: pólipo — retirar e mandar para histologia."
  },
  {
    "id": "amrigs2025-43",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma paciente de 60 anos, pós-menopáusica, traz uma mamografia convencional de rotina que revela um novo agrupamento de microcalcificações pleomórficas numa pequena área da mama direita. Nega cirurgias prévias. A conduta mais adequada no caso consiste em:",
    "options": [
      "Repetir a mamografia em 6 meses para verificar se há evolução das microcalcificações. Se não houver evolução, continuar com a avaliação de rotina.",
      "Solicitar cálcio sérico com correção da albumina para verificar risco de aterosclerose.",
      "Encaminhar para centro de referência para realizar biópsia da lesão.",
      "Solicitar mamografia digital com incidências adicionais de Eklund."
    ],
    "correctAnswer": 2,
    "explanation": "Microcalcificações pleomórficas, novas e agrupadas, são altamente suspeitas de malignidade (BI-RADS 4B/4C ou 5, frequentemente carcinoma ductal in situ). A conduta é biópsia percutânea guiada por estereotaxia (mamotomia) em serviço de referência.",
    "commentary": "Repetir em 6 meses (A): controle precoce é para achados provavelmente benignos (BI-RADS 3), não para microcalcificações pleomórficas.\n\nCálcio sérico (B): as microcalcificações mamárias não refletem calcemia nem aterosclerose.\n\nMamografia digital com Eklund (D): a manobra de Eklund é para mulheres com implantes mamários; incidências adicionais não substituem a biópsia.",
    "reference": "Colégio Brasileiro de Radiologia — BI-RADS / INCA — Parâmetros técnicos para o rastreamento do câncer de mama",
    "tags": [
      "microcalcificações",
      "BI-RADS",
      "mamografia",
      "câncer de mama"
    ],
    "tip": "Microcalcificação pleomórfica agrupada = biópsia."
  },
  {
    "id": "amrigs2025-44",
    "module": "Ginecologia e Obstetrícia",
    "text": "São opções terapêuticas para os sintomas vasomotores da síndrome climatérica:\nI. Modificações de estilo de vida: roupas leves, temperatura ambiente mais baixa e não fumar.\nII. Terapia de reposição hormonal sistêmica.\nIII. Uso de inibidores seletivos da recaptação de serotonina e inibidores seletivos de recaptação da serotonina e noradrenalina.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "Todas são opções válidas para os sintomas vasomotores do climatério:\n\nI: medidas comportamentais (roupas leves, ambiente fresco, cessar tabagismo, controle de peso) ajudam nos casos leves.\nII: a terapia hormonal sistêmica é o tratamento mais eficaz, na ausência de contraindicações.\nIII: ISRS (paroxetina, escitalopram) e IRSN (venlafaxina, desvenlafaxina) são alternativas não hormonais com eficácia comprovada.",
    "commentary": "Apenas I (A), Apenas II (B), Apenas I e II (C): todas deixam de fora opções válidas.",
    "reference": "FEBRASGO — Consenso Brasileiro de Terapêutica Hormonal da Menopausa (2018) / NAMS 2023 Nonhormone Therapy Position Statement",
    "tags": [
      "climatério",
      "sintomas vasomotores",
      "terapia hormonal",
      "ISRS"
    ],
    "tip": "Fogachos: TH é o mais eficaz; sem TH, ISRS/IRSN, gabapentina ou fezolinetante."
  },
  {
    "id": "amrigs2025-45",
    "module": "Ginecologia e Obstetrícia",
    "text": "Mulher de 31 anos está sendo investigada por amenorreia secundária. O exame de gravidez é negativo, não faz uso de medicamentos, nega alterações de peso, alterações neurológicas, saída de leite pelas mamas ou procedimento cirúrgico recente. O exame de prolactina, da tireoide e do hormônio estimulante do folículo estavam dentro da normalidade. Após ter utilizado 10 mg de acetato de medroxiprogesterona por via oral por 10 dias, a paciente teve um sangramento pela vagina, que durou só um dia. A hipótese diagnóstica mais provável é:",
    "options": [
      "Síndrome dos ovários policísticos.",
      "Síndrome de Kallmann.",
      "Insuficiência ovariana prematura.",
      "Insensibilidade aos androgênios."
    ],
    "correctAnswer": 0,
    "explanation": "Amenorreia secundária com β-hCG negativo, prolactina, TSH e FSH normais e sangramento após o teste de progestagênio (privação positiva) indica que há estrogênio endógeno suficiente e trato de saída pérvio — o problema é a anovulação crônica. Entre as opções, a causa típica é a síndrome dos ovários policísticos.",
    "commentary": "Síndrome de Kallmann (B): hipogonadismo hipogonadotrófico com anosmia e amenorreia primária; o hipoestrogenismo faz o teste de progestagênio ser negativo.\n\nInsuficiência ovariana prematura (C): FSH elevado e estrogênio baixo; o teste seria negativo.\n\nInsensibilidade androgênica (D): cariótipo 46,XY, amenorreia primária, sem útero — não haveria sangramento.",
    "reference": "FEBRASGO — Amenorreia: investigação (Protocolo) / Consenso Rotterdam / Diretriz Internacional de SOP (2023)",
    "tags": [
      "amenorreia secundária",
      "teste do progestagênio",
      "síndrome dos ovários policísticos",
      "anovulação"
    ],
    "tip": "Teste do progestagênio positivo = tem estrogênio: pense em anovulação (SOP)."
  },
  {
    "id": "amrigs2025-46",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na colocação do dispositivo intrauterino de cobre, qual dos instrumentais abaixo é o mais utilizado para a apreensão do colo uterino de acordo com a técnica preconizada?",
    "options": [
      "Instrumental da figura A.",
      "Instrumental da figura B.",
      "Instrumental da figura C.",
      "Instrumental da figura D."
    ],
    "correctAnswer": 0,
    "explanation": "Na inserção do DIU, o colo é apreendido (geralmente no lábio anterior) e tracionado para retificar o ângulo entre colo e corpo uterino, facilitando a histerometria e reduzindo o risco de perfuração. O instrumento usado é a pinça de Pozzi — longa, com pontas finas em gancho (figura A).",
    "commentary": "Figura B: pinça com extremidades em anel/apreensão romba (tipo Allis/Foerster), usada para apreender tecidos ou gaze, não para tracionar o colo na inserção do DIU.\n\nFigura C: pinça curva longa (tipo Cheron), usada para antissepsia vaginal e cervical com gaze.\n\nFigura D: pinça anatômica (de dissecção), usada para manipular tecidos delicados.",
    "reference": "Ministério da Saúde — Manual técnico para profissionais de saúde: DIU com cobre TCu 380A (2018) / FEBRASGO",
    "tags": [
      "DIU de cobre",
      "pinça de Pozzi",
      "instrumental cirúrgico",
      "contracepção"
    ],
    "tip": "DIU: pinça de Pozzi no lábio anterior do colo para retificar o útero.",
    "image": "/images/amrigs2025-46.webp"
  },
  {
    "id": "amrigs2025-47",
    "module": "Ginecologia e Obstetrícia",
    "text": "Na figura abaixo, a seta indica o(s):",
    "options": [
      "Prepúcio.",
      "Grandes lábios.",
      "Pequenos lábios.",
      "Clitóris."
    ],
    "correctAnswer": 2,
    "explanation": "A seta aponta para a prega cutânea fina, sem pelos e pigmentada, situada medialmente aos grandes lábios, que delimita o vestíbulo: o pequeno lábio. Na fotografia, os grandes lábios são as pregas mais laterais, afastadas pelos dedos enluvados.",
    "commentary": "Prepúcio (A): é a prega formada pela união superior dos pequenos lábios sobre a glande do clitóris. A seta está perto dessa junção, mas aponta para a borda lateral da prega do pequeno lábio.\n\nGrandes lábios (B): são as pregas mais externas, com pelos e tecido adiposo, que estão sendo afastadas na foto.\n\nClitóris (D): é a glande, no ápice superior do vestíbulo, coberta pelo prepúcio.",
    "reference": "Moore — Anatomia Orientada para a Clínica (períneo) / FEBRASGO — Tratado de Ginecologia",
    "tags": [
      "anatomia da vulva",
      "pequenos lábios",
      "genitália externa feminina"
    ],
    "tip": "Pequenos lábios: pregas finas, sem pelos, dentro dos grandes lábios.",
    "image": "/images/amrigs2025-47.webp"
  },
  {
    "id": "amrigs2025-48",
    "module": "Ginecologia e Obstetrícia",
    "text": "Sobre o tratamento para o condiloma vulvar acuminado, que pode ser realizado na unidade de saúde, é correto afirmar que:",
    "options": [
      "O ácido tricloroacético (ATA) a 10% pode ser feito em 3 aplicações.",
      "O ATA a 80%-90% pode ser aplicado semanalmente por 8 a 10 semanas.",
      "O ATA não pode ser aplicado na gestação.",
      "O imiquimod 5% creme só pode ser aplicado depois do segundo trimestre."
    ],
    "correctAnswer": 1,
    "explanation": "Pelo PCDT de IST do Ministério da Saúde, o ácido tricloroacético (ATA) a 80–90% é aplicado pelo profissional, em pequena quantidade sobre a lesão, semanalmente, por 8 a 10 semanas. Pode ser usado na gestação.",
    "commentary": "ATA a 10% em 3 aplicações (A): a concentração eficaz é 80–90%; a 10% não serve.\n\nATA proibido na gestação (C): o ATA é um dos tratamentos de escolha na gestante, junto com a crioterapia e a exérese.\n\nImiquimode após o segundo trimestre (D): imiquimode e podofilina são contraindicados em toda a gestação.",
    "reference": "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022)",
    "tags": [
      "condiloma acuminado",
      "HPV",
      "ácido tricloroacético",
      "IST"
    ],
    "tip": "Condiloma na gestante: ATA 80–90%, crioterapia ou exérese; nada de imiquimode ou podofilina."
  },
  {
    "id": "amrigs2025-49",
    "module": "Ginecologia e Obstetrícia",
    "text": "Durante o parto, no momento em que o feto desprende o ombro anterior, o médico deve:",
    "options": [
      "Solicitar que seja administrado 10 UI de ocitocina por via intramuscular para prevenir a hemorragia pós-parto.",
      "Realizar a massagem uterina para evitar a retenção da placenta.",
      "Solicitar a administração de 5 UI de ocitocina e metilergonovina por via intravenosa como conduta ativa no secundamento.",
      "Aguardar a saída completa do feto e realizar a ligadura precoce do cordão umbilical, para reduzir a ocorrência de hemorragia pós-parto."
    ],
    "correctAnswer": 0,
    "explanation": "O manejo ativo do terceiro período inclui ocitocina 10 UI por via intramuscular logo após o desprendimento do ombro anterior (ou imediatamente após o nascimento). É a principal medida para prevenir a hemorragia pós-parto.",
    "commentary": "Massagem uterina para evitar retenção placentária (B): a massagem é feita após a dequitação para manter o útero contraído; não é a conduta no desprendimento do ombro.\n\nOcitocina 5 UI + metilergonovina IV (C): a dose profilática é 10 UI IM, e a metilergonovina não se faz IV em bolus (risco de crise hipertensiva) nem é rotina.\n\nLigadura precoce do cordão (D): o clampeamento deve ser oportuno (1–3 min) e não reduz hemorragia pós-parto.",
    "reference": "OPAS/Ministério da Saúde — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)",
    "tags": [
      "hemorragia pós-parto",
      "ocitocina",
      "manejo ativo do terceiro período",
      "parto"
    ],
    "tip": "Ombro anterior saiu: ocitocina 10 UI IM."
  },
  {
    "id": "amrigs2025-50",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma gestante de 10 semanas e 6 dias vem à consulta de pré-natal. Ela não apresenta fatores de risco ou queixas. Após a consulta, o médico agenda uma ultrassonografia para ser realizada em 1 semana. O tipo de ultrassonografia que ela deverá realizar é:",
    "options": [
      "Obstétrica transvaginal com doppler das artérias ovarianas para ver a função do corpo lúteo.",
      "Morfológica de primeiro trimestre (medir a translucência nucal).",
      "Morfológica do segundo trimestre.",
      "Obstétrica para ver o fenômeno de centralização."
    ],
    "correctAnswer": 1,
    "explanation": "Com 10 semanas e 6 dias, a ultrassonografia agendada para daqui a uma semana cairá em 11 semanas e 6 dias — dentro da janela do ultrassom morfológico de primeiro trimestre (11 a 13 semanas e 6 dias, CCN 45–84 mm), que mede a translucência nucal e rastreia aneuploidias.",
    "commentary": "Doppler das artérias ovarianas para corpo lúteo (A): não é exame de rotina do pré-natal.\n\nMorfológico de segundo trimestre (C): é feito entre 20 e 24 semanas.\n\nAvaliação de centralização (D): o Doppler fetal para centralização é usado no terceiro trimestre, em suspeita de restrição de crescimento.",
    "reference": "FEBRASGO — Ultrassonografia no primeiro trimestre / Fetal Medicine Foundation",
    "tags": [
      "translucência nucal",
      "ultrassonografia obstétrica",
      "pré-natal",
      "rastreamento de aneuploidias"
    ],
    "tip": "Translucência nucal: 11 a 13+6 semanas."
  },
  {
    "id": "amrigs2025-51",
    "module": "Ginecologia e Obstetrícia",
    "text": "Considerando a figura abaixo, o diagnóstico mais provável e a conduta mais adequada são, respectivamente:",
    "options": [
      "Retocele – cirurgia de Burch.",
      "Retocele – cirurgia de colpocleise (Le Fort).",
      "Cisto de Bartholin – marsupialização.",
      "Cistocele – encaminhar para centro especializado, se a paciente for sintomática."
    ],
    "correctAnswer": 3,
    "explanation": "A figura mostra abaulamento da parede vaginal anterior, logo abaixo do meato uretral, ocupando o introito: cistocele (prolapso da parede anterior). O tratamento só é necessário se houver sintomas; a paciente sintomática deve ser encaminhada para serviço especializado (pessário, fisioterapia ou cirurgia).",
    "commentary": "Retocele com Burch (A): a retocele é na parede posterior; a cirurgia de Burch trata incontinência urinária de esforço, não prolapso.\n\nRetocele com colpocleise (B): parede errada; a colpocleise é reservada a idosas sem vida sexual com prolapso avançado.\n\nCisto de Bartholin (C): lesão cística lateral, na posição de 4 ou 8 horas do introito, não na parede anterior.",
    "reference": "FEBRASGO — Prolapso genital (Protocolo) / IUGA–ICS — POP-Q",
    "tags": [
      "cistocele",
      "prolapso genital",
      "distopias genitais",
      "uroginecologia"
    ],
    "tip": "Parede anterior = cistocele; posterior = retocele. Só trata se houver sintomas.",
    "image": "/images/amrigs2025-51.webp"
  },
  {
    "id": "amrigs2025-52",
    "module": "Ginecologia e Obstetrícia",
    "text": "Uma mulher de 24 anos foi submetida a parto cesáreo, há três dias, por parada do trabalho de parto. Após a cesárea, permaneceu 10 horas com sondagem vesical de demora. Hoje, vem à consulta por apresentar febre de 38,8°C. Nega tosse ou disúria. Ao exame físico, as mamas apresentam saída espontânea de leite. Não há dor na região costovertebral ou na incisão cutânea. O fundo uterino está acima da cicatriz umbilical e é doloroso. Considerando o caso apresentado, o diagnóstico mais provável e a conduta são, respectivamente:",
    "options": [
      "Endometrite – antibioticoterapia.",
      "Pielonefrite – antibioticoterapia.",
      "Ingurgitamento mamário – analgésicos orais.",
      "Hematoma supra-aponeurótico – drenagem com agulha grossa."
    ],
    "correctAnswer": 0,
    "explanation": "Febre no puerpério de cesárea com útero subinvoluído (acima da cicatriz umbilical no 3º dia) e doloroso é endometrite pós-parto, a infecção puerperal mais comum (a cesárea, sobretudo após trabalho de parto, é o principal fator de risco). Trata-se com antibiótico de amplo espectro — classicamente clindamicina + gentamicina.",
    "commentary": "Pielonefrite (B): não há disúria nem dor costovertebral.\n\nIngurgitamento mamário (C): as mamas estão com saída espontânea de leite, sem descrição de dor ou endurecimento; o ingurgitamento raramente causa febre de 38,8 °C.\n\nHematoma supra-aponeurótico (D): não há dor ou abaulamento na incisão.",
    "reference": "FEBRASGO — Infecção puerperal / Zugaib — Obstetrícia",
    "tags": [
      "endometrite",
      "infecção puerperal",
      "puerpério",
      "cesárea"
    ],
    "tip": "Febre no puerpério + útero amolecido, doloroso e subinvoluído = endometrite."
  },
  {
    "id": "amrigs2025-53",
    "module": "Ginecologia e Obstetrícia",
    "text": "O transporte de substâncias por meio da placenta ocorre por meio dos seguintes mecanismos:\nI. Difusão simples.\nII. Transporte ativo.\nIII. Pinocitose.\n\nQuais estão corretos?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As trocas placentárias usam todos os mecanismos citados: difusão simples (gases, água, ureia), difusão facilitada (glicose), transporte ativo (aminoácidos, cálcio, ferro) e pinocitose/endocitose (IgG, por receptores).",
    "commentary": "Apenas I (A), Apenas II (B), Apenas III (C): cada uma deixa de fora mecanismos que de fato ocorrem.",
    "reference": "Moore — Embriologia Clínica / Zugaib — Obstetrícia",
    "tags": [
      "placenta",
      "fisiologia placentária",
      "transporte transplacentário"
    ],
    "tip": "Placenta: difusão (O₂/CO₂), difusão facilitada (glicose), ativo (aminoácidos), pinocitose (IgG)."
  },
  {
    "id": "amrigs2025-54",
    "module": "Ginecologia e Obstetrícia",
    "text": "Paciente com 13 semanas de gestação gemelar, dicoriônica e diamniótica, vem para o pré-natal de rotina na unidade de saúde. No momento, não apresenta queixas. Nesse caso, o médico deve:",
    "options": [
      "Prescrever ácido acetilsalicílico e carbonato de cálcio até 36 semanas para a prevenção da pré-eclâmpsia.",
      "Recomendar a vacinação para febre amarela.",
      "Solicitar o teste de tolerância a glicose com 75 g, pois está indicado nessa idade gestacional.",
      "Manter o pré-natal no posto de saúde, por não ser uma gestação de alto risco."
    ],
    "correctAnswer": 0,
    "explanation": "Gestação gemelar é fator de risco para pré-eclâmpsia. Pelas recomendações brasileiras, gestantes com risco aumentado devem iniciar AAS em dose baixa (100–150 mg à noite) entre 12 e 16 semanas, mantido até 36 semanas, e suplementação de cálcio (em populações com baixa ingestão).",
    "commentary": "Vacina de febre amarela (B): vacina de vírus vivo, contraindicada na gestação, salvo surto com risco alto.\n\nTOTG 75 g agora (C): o TOTG é feito entre 24 e 28 semanas (com glicemia de jejum no primeiro trimestre).\n\nPré-natal só no posto (D): gemelar é gestação de alto risco e exige acompanhamento com pré-natal de alto risco.",
    "reference": "Ministério da Saúde — Manual de Gestação de Alto Risco (2022) / RBEHG — Pré-eclâmpsia: prevenção",
    "tags": [
      "gestação gemelar",
      "pré-eclâmpsia",
      "ácido acetilsalicílico",
      "cálcio",
      "pré-natal de alto risco"
    ],
    "tip": "Gêmeos = risco de pré-eclâmpsia: AAS de 12–16 a 36 semanas + cálcio."
  },
  {
    "id": "amrigs2025-55",
    "module": "Ginecologia e Obstetrícia",
    "text": "A figura abaixo mostra um embrião. Considerando a imagem apresentada, o diagnóstico mais provável é:",
    "options": [
      "Descolamento prematuro de placenta.",
      "Placenta prévia.",
      "Aborto incompleto.",
      "Aborto inevitável."
    ],
    "correctAnswer": 3,
    "explanation": "A figura mostra um embrião ainda dentro do útero, com sangramento e colo dilatado, por onde passam sangue e material. Sangramento com colo aberto e produto da concepção ainda intrauterino caracteriza o aborto inevitável — a evolução para expulsão é certa.",
    "commentary": "Descolamento prematuro de placenta (A): ocorre após 20 semanas, com feto, não embrião, e hematoma retroplacentário.\n\nPlacenta prévia (B): também é da segunda metade da gestação; placenta inserida sobre ou junto ao orifício interno.\n\nAborto incompleto (C): parte do conteúdo já foi expelida e restam restos; aqui o embrião ainda está na cavidade.",
    "reference": "Ministério da Saúde — Atenção humanizada ao abortamento / FEBRASGO — Abortamento",
    "tags": [
      "aborto inevitável",
      "abortamento",
      "sangramento na primeira metade da gestação"
    ],
    "tip": "Colo aberto + produto ainda dentro = inevitável; já saiu parte = incompleto.",
    "image": "/images/amrigs2025-55.webp"
  },
  {
    "id": "amrigs2025-56",
    "module": "Clínica Médica",
    "text": "Mulher, 22 anos, com diagnóstico de esquizofrenia paranoide teve alta de unidade psiquiátrica com a resolução dos sintomas psicóticos utilizando adequadamente um antipsicótico. Com o tempo, começou a apresentar perda da libido, oligomenorreia, aumento das mamas e galactorreia. Exames laboratoriais indicaram aumento de prolactina, sendo as demais causas excluídas. Entre os antipsicóticos abaixo, qual seria o causador mais provável do evento adverso relatado?",
    "options": [
      "Risperidona.",
      "Olanzapina.",
      "Clorpromazina.",
      "Quetiapina."
    ],
    "correctAnswer": 0,
    "explanation": "Galactorreia, ginecomastia/aumento das mamas, oligomenorreia e perda de libido por hiperprolactinemia decorrem do bloqueio dopaminérgico D2 na via tuberoinfundibular. Entre os antipsicóticos atípicos, a risperidona (e a paliperidona) é a que mais eleva a prolactina, mais até que vários típicos de baixa potência, como a clorpromazina.",
    "commentary": "Olanzapina (B): elevação leve e transitória da prolactina; o principal efeito é metabólico.\n\nClorpromazina (C): típico de baixa potência, causa hiperprolactinemia, mas em menor grau que a risperidona; predominam sedação e hipotensão.\n\nQuetiapina (D): praticamente não eleva a prolactina.",
    "reference": "Kaplan & Sadock — Compêndio de Psiquiatria / Maudsley Prescribing Guidelines in Psychiatry",
    "tags": [
      "hiperprolactinemia",
      "risperidona",
      "antipsicóticos",
      "galactorreia"
    ],
    "tip": "Atípico que mais eleva a prolactina: risperidona; que menos eleva: quetiapina, clozapina e aripiprazol."
  },
  {
    "id": "amrigs2025-57",
    "module": "Ginecologia e Obstetrícia",
    "text": "Analise as seguintes assertivas a respeito da depressão pós-parto:\nI. Gravidez não planejada ou não desejada, complicações médicas ao longo da gestação, percepção de falta de suporte social (familiar ou do parceiro) e condições socioeconômicas desfavoráveis não são considerados fatores de risco para a condição.\nII. Entre os diagnósticos diferenciais, o blues, definido por disforia e sintomas depressivos leves, transitórios e autolimitados, é geralmente considerado um fenômeno normal, não requerendo nenhum tratamento além de validação, psicoeducação e suporte psicossocial.\nIII. Escalas de autoavaliação, como Postpartum Depression Screening Scale (PDSS) e Edinburgh Postnatal Depression Scale (EPDS), para triagem de mulheres com depressão pós-parto em serviços de atendimento primário mostram-se bastante úteis, aumentando a possibilidade de detecção de depressão pós-parto em comparação com a detecção espontânea durante avaliações clínicas de rotina.\nIV. Sertralina e paroxetina são considerados antidepressivos seguros para o período de amamentação.\n\nQuais estão corretas?",
    "options": [
      "Apenas I, II e III.",
      "Apenas I, II e IV.",
      "Apenas I, III e IV.",
      "Apenas II, III e IV."
    ],
    "correctAnswer": 3,
    "explanation": "I incorreta: gravidez não planejada, complicações gestacionais, falta de suporte social e condições socioeconômicas desfavoráveis SÃO fatores de risco para depressão pós-parto.\nII correta: o blues puerperal (até 80% das puérperas) é leve, transitório, começa nos primeiros dias e melhora em até 2 semanas, exigindo só acolhimento e orientação.\nIII correta: escalas como a EPDS aumentam a detecção na atenção primária.\nIV correta: sertralina e paroxetina têm baixa passagem para o leite e são consideradas seguras na amamentação.",
    "commentary": "Apenas I, II e III (A), Apenas I, II e IV (B), Apenas I, III e IV (C): todas incluem a I, que está errada.",
    "reference": "FEBRASGO — Depressão pós-parto / ACOG Clinical Practice Guideline nº 5 (2023)",
    "tags": [
      "depressão pós-parto",
      "blues puerperal",
      "escala de Edimburgo",
      "amamentação"
    ],
    "tip": "Blues: leve e some em até 2 semanas; passou disso ou é grave, pense em depressão pós-parto."
  },
  {
    "id": "amrigs2025-58",
    "module": "Ginecologia e Obstetrícia",
    "text": "A figura abaixo representa as decíduas, os córions e o embrião. Assinale a alternativa que corresponde corretamente à estrutura indicada na imagem.",
    "options": [
      "Cavidade coriônica.",
      "Cavidade uterina.",
      "Córion frondoso.",
      "Cavidade amniótica."
    ],
    "correctAnswer": 2,
    "explanation": "Na figura, a letra C indica as vilosidades coriônicas voltadas para a decídua basal, que se ramificam e formam o córion frondoso (viloso) — a parte fetal da futura placenta. As vilosidades do lado da decídua capsular degeneram e formam o córion liso.",
    "commentary": "Cavidade coriônica (A): é o celoma extraembrionário, entre âmnio e córion; não é a estrutura com vilosidades indicada.\n\nCavidade uterina (B): é o espaço entre a decídua capsular e a parietal, fora do saco gestacional.\n\nCavidade amniótica (D): é a cavidade que envolve diretamente o embrião, delimitada pelo âmnio.\n\nObservação: o enunciado não diz qual letra está em questão; a resposta oficial corresponde à estrutura C da figura.",
    "reference": "Moore — Embriologia Clínica (placenta e membranas fetais)",
    "tags": [
      "embriologia",
      "córion frondoso",
      "decíduas",
      "placenta"
    ],
    "tip": "Córion frondoso (junto à decídua basal) vira placenta; córion liso (junto à capsular) vira membrana.",
    "image": "/images/amrigs2025-58.webp"
  },
  {
    "id": "amrigs2025-59",
    "module": "Ginecologia e Obstetrícia",
    "text": "Gestante de 24 anos, com 8 semanas de gravidez, vem à consulta para saber como se prevenir contra a dengue. Considerando o questionamento da gestante, assinale a alternativa correta de acordo com o Manual de Prevenção da Dengue na Gestação (Ministério da Saúde, 2024).",
    "options": [
      "O uso de repelentes à base de Icaridina pode ser feito durante toda a gestação.",
      "Os repelentes à base de DEET (N,N-dietil-meta-toluamida) não devem ser utilizados na gestação, pelo risco teratogênico.",
      "A vacina da dengue tem uso amplo durante a gravidez, sendo a medida de escolha para a prevenção.",
      "A medida que mais impacta positivamente a redução de casos de dengue na gestação é o uso de telas no domicílio, visto que o Aedes aegypti tem hábitos preferencialmente noturnos."
    ],
    "correctAnswer": 0,
    "explanation": "O manual do Ministério da Saúde de 2024 sobre dengue na gestação libera o uso de repelentes registrados na Anvisa à base de icaridina, DEET ou IR3535 durante toda a gestação, seguindo as instruções do rótulo.",
    "commentary": "DEET proibido por teratogenicidade (B): o DEET também é considerado seguro na gestação nas concentrações aprovadas.\n\nVacina com uso amplo na gestação (C): as vacinas disponíveis (Qdenga, de vírus vivo atenuado) são contraindicadas na gestação.\n\nTelas pelo hábito noturno do Aedes (D): o Aedes aegypti tem hábito diurno (picos no início da manhã e fim da tarde); telas ajudam, mas a medida de maior impacto é eliminar criadouros.",
    "reference": "Ministério da Saúde — Manual de Prevenção da Dengue na Gestação (2024)",
    "tags": [
      "dengue",
      "gestação",
      "repelentes",
      "controle vetorial"
    ],
    "tip": "Gestante pode usar icaridina, DEET e IR3535; vacina da dengue não."
  },
  {
    "id": "amrigs2025-60",
    "module": "Ginecologia e Obstetrícia",
    "text": "A idade gestacional do embrião e do feto pode ser verificada através da ultrassonografia. Sendo assim, assinale a alternativa que indica o gráfico que melhor representa o erro na avaliação da idade gestacional.",
    "options": [
      "Gráfico A.",
      "Gráfico B.",
      "Gráfico C.",
      "Gráfico D."
    ],
    "correctAnswer": 0,
    "explanation": "A datação pelo ultrassom é mais precisa quanto mais cedo é feita. No primeiro trimestre (comprimento cabeça-nádega), o erro é de cerca de 5–7 dias; no segundo, de 7–14 dias; no terceiro, de 3 semanas ou mais, porque a variação biológica do crescimento fetal aumenta. O gráfico que representa isso é uma reta crescente: o erro aumenta com a idade gestacional (A).",
    "commentary": "Gráfico B (erro decrescente): o contrário do que ocorre — a datação tardia é a menos confiável.\n\nGráfico C (erro constante): o erro não é fixo; cresce com a idade gestacional.\n\nGráfico D (erro em curva com pico no meio): o maior erro está no fim da gestação, não no meio.",
    "reference": "ACOG Committee Opinion nº 700 — Methods for estimating the due date / Zugaib — Obstetrícia",
    "tags": [
      "idade gestacional",
      "ultrassonografia obstétrica",
      "datação da gestação"
    ],
    "tip": "Datação por ultrassom: quanto mais cedo, mais exata (CCN no 1º trimestre).",
    "image": "/images/amrigs2025-60.webp"
  },
  {
    "id": "amrigs2025-61",
    "module": "Pediatria",
    "text": "Considere o acompanhamento do nascimento, via parto vaginal, de um neonato cuja idade gestacional obstétrica é de 38 semanas. Apresenta teste rápido positivo para sífilis na admissão ao centro obstétrico. O recém-nascido (RN) é posicionado sobre o ventre materno e apresenta-se cianótico, com choro forte e tônus adequado. Diante do quadro apresentado, qual é a melhor conduta?",
    "options": [
      "Realizar estímulo tátil no dorso, seguido de clampeamento imediato do cordão umbilical.",
      "Solicitar o clampeamento imediato do cordão umbilical e levá-lo para berço aquecido para monitorização e manobras iniciais de reanimação.",
      "Solicitar o clampeamento imediato do cordão umbilical após 30 segundos de vida, manter no contato pele a pele e estimular a amamentação.",
      "Solicitar o clampeamento imediato do cordão umbilical após 60 segundos de vida, manter no contato pele a pele, com avaliação contínua da vitalidade."
    ],
    "correctAnswer": 3,
    "explanation": "RN a termo que nasce chorando e com bom tônus tem boa vitalidade; a cianose dos primeiros minutos é esperada (a saturação sobe aos poucos). A conduta é clampeamento oportuno do cordão após pelo menos 60 segundos, mantendo o RN em contato pele a pele com a mãe e avaliando continuamente FC, respiração e tônus. A sífilis materna não contraindica o clampeamento tardio nem o contato pele a pele (diferente do que se discute para HIV e HTLV, e a amamentação também é liberada).",
    "commentary": "Estímulo tátil e clampeamento imediato (A): o RN já respira bem; não há indicação de estímulo nem de clampeamento imediato.\n\nClampeamento imediato e berço aquecido para reanimação (B): só se o RN não respirasse ou estivesse hipotônico.\n\nClampeamento com 30 segundos (C): para o RN a termo com boa vitalidade, recomenda-se esperar pelo menos 60 segundos.\n\nObservação: a alternativa D usa \"clampeamento imediato após 60 segundos\", redação contraditória; o sentido é clampeamento após 1 minuto.",
    "reference": "SBP — Reanimação do recém-nascido ≥34 semanas em sala de parto (2022) / Ministério da Saúde — PCDT de transmissão vertical de HIV, sífilis e hepatites (2022)",
    "tags": [
      "reanimação neonatal",
      "clampeamento do cordão",
      "sífilis congênita",
      "contato pele a pele"
    ],
    "tip": "RN ≥34 sem que chora e tem tônus: clampear após ≥60 s e pele a pele."
  },
  {
    "id": "amrigs2025-62",
    "module": "Pediatria",
    "text": "Ao nascimento, RN apresenta falo de 2,3 cm com fusão de saliências labioescrotais e gônadas impalpáveis. Qual é o diagnóstico de Anormalidade de Diferenciação Sexual (ADS) mais comum em RNs com genitália atípica?",
    "options": [
      "ADS XX ovotesticular.",
      "ADS XX hiperplasia adrenal congênita.",
      "ADS XY hiperplasia adrenal congênita.",
      "ADS XY/X disgenesia gonadal mista."
    ],
    "correctAnswer": 1,
    "explanation": "A causa mais comum de genitália atípica no recém-nascido é a hiperplasia adrenal congênita por deficiência de 21-hidroxilase em paciente 46,XX: virilização da genitália externa (falo aumentado, fusão labioescrotal) com gônadas impalpáveis (são ovários). Há risco de crise perdedora de sal nas primeiras semanas — por isso a genitália atípica com gônadas impalpáveis é urgência.",
    "commentary": "ADS XX ovotesticular (A): rara.\n\nADS XY com hiperplasia adrenal congênita (C): formas de HAC que subvirilizam o 46,XY (deficiência de 3β-HSD, 17α-hidroxilase, StAR) são raras.\n\nDisgenesia gonadal mista 45,X/46,XY (D): segunda causa mais comum em algumas séries, mas bem menos frequente que a HAC; costuma haver gônada palpável.",
    "reference": "SBP / SBEM — Consenso sobre anomalias da diferenciação sexual / Nelson Textbook of Pediatrics",
    "tags": [
      "anomalias da diferenciação sexual",
      "hiperplasia adrenal congênita",
      "genitália atípica",
      "deficiência de 21-hidroxilase"
    ],
    "tip": "Genitália atípica + gônadas impalpáveis: HAC 46,XX até prova em contrário (risco de perda de sal)."
  },
  {
    "id": "amrigs2025-63",
    "module": "Pediatria",
    "text": "O seguimento ambulatorial do RN prematuro é uma extensão dos cuidados iniciados ainda na UTI neonatal. Em relação a esse acompanhamento, assinale a alternativa INCORRETA.",
    "options": [
      "O programa de seguimento do RN de risco se inicia ainda durante a internação hospitalar, antes da alta.",
      "Um crescimento exagerado do perímetro cefálico nos primeiros meses de vida pode estar relacionado com pior prognóstico neurológico.",
      "RNs que apresentam maior catch-up nos primeiros anos terão maior risco de desenvolverem doença cardiovascular na adolescência.",
      "O calendário vacinal do prematuro é realizado de acordo com a sua idade corrigida."
    ],
    "correctAnswer": 3,
    "explanation": "A pergunta pede a INCORRETA. O calendário vacinal do prematuro segue a idade cronológica, não a corrigida — vacinar no tempo certo é ainda mais importante nele. Algumas adaptações existem (BCG quando ≥2 kg, hepatite B com 4 doses se <2 kg ao nascer, vacinas inativadas e palivizumabe/nirsevimabe).",
    "commentary": "Seguimento iniciado na internação (A): correta — o plano de seguimento começa antes da alta.\n\nCrescimento exagerado do perímetro cefálico (B): correta — pode indicar hidrocefalia (por exemplo, após hemorragia peri-intraventricular), com pior prognóstico neurológico.\n\nCatch-up acelerado e risco cardiovascular (C): correta — crescimento de recuperação excessivo se associa a obesidade, resistência à insulina e doença cardiovascular.",
    "reference": "SBP — Seguimento ambulatorial do prematuro de risco (2017) / Calendário de vacinação SBIm do prematuro",
    "tags": [
      "prematuridade",
      "seguimento do prematuro",
      "vacinação",
      "idade corrigida"
    ],
    "tip": "Prematuro: crescimento e desenvolvimento pela idade corrigida; vacina pela cronológica."
  },
  {
    "id": "amrigs2025-64",
    "module": "Pediatria",
    "text": "A enfermagem comunica ao médico que o teste do coraçãozinho de um RN com 37 semanas de idade gestacional fora feito com 26 horas de vida. O resultado foi 89% no membro superior direito e 92% no membro inferior esquerdo. Qual é a melhor conduta nesse caso?",
    "options": [
      "Solicitar ecocardiograma imediatamente para descartar cardiopatia congênita cianótica.",
      "Solicitar eletrocardiograma imediatamente para descartar alterações do ritmo cardíaco.",
      "Repetir o teste do coraçãozinho em 1 hora e reavaliar resultado.",
      "Não é necessária conduta adicional, já que a diferença de saturação entre os dois membros é de 3%."
    ],
    "correctAnswer": 0,
    "explanation": "No teste do coraçãozinho (oximetria de pulso entre 24 e 48 h, membro superior direito e um membro inferior), saturação ≤89% em qualquer membro já é resultado anormal: não se repete, solicita-se ecocardiograma em até 24 h para afastar cardiopatia crítica. Aqui o MSD tem 89%.",
    "commentary": "ECG imediato (B): não define cardiopatia estrutural; o exame indicado é o ecocardiograma.\n\nRepetir em 1 hora (C): a repetição é para saturação entre 90% e 94% ou diferença >3% entre os membros; com ≤89%, não se repete.\n\nNenhuma conduta (D): ignora a saturação de 89%, que por si só define o teste como alterado.",
    "reference": "SBP — Teste do coraçãozinho: diagnóstico precoce de cardiopatia congênita crítica (2022)",
    "tags": [
      "teste do coraçãozinho",
      "oximetria de pulso",
      "cardiopatia congênita crítica",
      "triagem neonatal"
    ],
    "tip": "Coraçãozinho: ≤89% = eco; 90–94% ou diferença >3% = repetir em 1 h."
  },
  {
    "id": "amrigs2025-65",
    "module": "Pediatria",
    "text": "O médico é chamado no alojamento conjunto para avaliar um RN a termo que nasceu há 20 horas e está sem diurese. Sobre a conduta nesse caso, assinale a alternativa correta.",
    "options": [
      "Aguardar, pois o RN normal pode retardar a sua primeira diurese por cerca de 24 a 36 horas.",
      "Solicitar à enfermagem a sondagem vesical para monitorização da diurese.",
      "Aguardar por mais 6 horas e, caso se mantenha sem diurese, solicitar exame comum de urina e urocultura em amostra obtida por cateterismo vesical.",
      "Realizar ecografia renal com 24 horas de vida para averiguar a presença de agenesia renal."
    ],
    "correctAnswer": 0,
    "explanation": "A maioria dos RNs urina nas primeiras 24 horas, e praticamente todos até 48 horas. Um RN a termo, bem, sem diurese com 20 horas de vida, deve ser observado — ainda está dentro do esperado.",
    "commentary": "Sondagem vesical (B): procedimento invasivo e desnecessário em RN bem com 20 horas.\n\nUrina por cateterismo em 6 horas (C): não há suspeita de infecção; a investigação só se justifica se a ausência de diurese persistir além de 24–48 h ou houver outros sinais.\n\nUltrassom renal para agenesia com 24 h (D): agenesia renal bilateral se manifesta com oligoâmnio e fácies de Potter; a ausência de diurese com 24 h, isoladamente, não indica o exame.",
    "reference": "SBP — Atenção ao recém-nascido no alojamento conjunto / Ministério da Saúde — Atenção à saúde do recém-nascido, vol. 1",
    "tags": [
      "recém-nascido",
      "diurese",
      "alojamento conjunto"
    ],
    "tip": "RN: primeira diurese em até 24 h (quase todos até 48 h); mecônio em até 48 h."
  },
  {
    "id": "amrigs2025-66",
    "module": "Pediatria",
    "text": "João tem 8 anos, e Maria tem 11 anos. Ao exame físico, foi constatado que João apresenta crescimento testicular e aumento do comprimento peniano. Em Maria, nota-se a presença de broto mamário. Como são classificados os achados descritos em relação à escala de Turner (G e M) e às suas idades?",
    "options": [
      "João – Turner 3, com achados de puberdade precoce para a sua idade; Maria – Turner 2, com achados normais de puberdade para a sua idade.",
      "João – Turner 4, com achados de puberdade precoce para a sua idade; Maria – Turner 2, com achados de atraso puberal para a sua idade.",
      "João – Turner 3, com achados normais de puberdade para a sua idade; Maria – Turner 1, com achados normais de puberdade para a sua idade.",
      "João – Turner 4, com achados normais de puberdade para a sua idade; Maria – Turner 1, com achados de atraso puberal para a sua idade."
    ],
    "correctAnswer": 0,
    "explanation": "Na escala de Tanner (chamada \"Turner\" no enunciado), crescimento testicular E aumento do comprimento do pênis correspondem a G3 (no G2 só há aumento de testículos e mudança da pele escrotal). Puberdade antes dos 9 anos no menino é precoce — João, com 8 anos, tem puberdade precoce. Broto mamário é M2, o primeiro sinal de puberdade na menina, normal entre 8 e 13 anos — Maria, com 11, está dentro do esperado.",
    "commentary": "João T4 precoce; Maria T2 atrasada (B): T4 exige glande desenvolvida e escroto mais pigmentado; e M2 aos 11 anos é normal.\n\nJoão T3 normal; Maria T1 normal (C): puberdade aos 8 anos no menino é precoce, e broto mamário já é M2.\n\nJoão T4 normal; Maria T1 atrasada (D): erra os estágios e as interpretações.",
    "reference": "SBP — Puberdade precoce e atraso puberal / Caderneta de Saúde do Adolescente (Ministério da Saúde)",
    "tags": [
      "estágios de Tanner",
      "puberdade precoce",
      "puberdade",
      "telarca"
    ],
    "tip": "Puberdade precoce: menina <8 anos, menino <9 anos."
  },
  {
    "id": "amrigs2025-67",
    "module": "Pediatria",
    "text": "Paulo tem 4 meses e 15 dias, e Carlos tem 10 meses e 15 dias. Paulo localiza som, rola na mesa de exame, faz busca ativa de objetos e os leva à boca, porém não os transfere de uma mão para outra. Carlos senta-se sem apoio, busca e transfere objetos de uma mão para outra, não brinca de “esconde, achou” e nem consegue duplicar sílabas. Considerando os achados descritos para as idades de Paulo e Carlos, conforme proposto na Caderneta da Criança do Ministério da Saúde, como são avaliados os seus desenvolvimentos?",
    "options": [
      "Paulo e Carlos apresentam desenvolvimentos normais.",
      "Paulo apresenta desenvolvimento normal, e Carlos apresenta provável atraso no desenvolvimento.",
      "Paulo e Carlos apresentam provável atraso no desenvolvimento.",
      "Paulo apresenta atraso no desenvolvimento, e Carlos apresenta desenvolvimento normal."
    ],
    "correctAnswer": 1,
    "explanation": "Pela Caderneta da Criança: aos 4 meses espera-se localizar o som, segurar objetos e levá-los à boca e rolar (rolar até 6 meses); transferir objetos de mão é marco de 6 a 9 meses — Paulo está normal. Aos 9 meses espera-se brincar de \"esconde-achou\" e duplicar sílabas; Carlos, com 10 meses e meio, ainda não faz esses dois marcos da faixa de 9 meses: provável atraso.",
    "commentary": "Ambos normais (A): Carlos não atingiu marcos da faixa de 9 meses.\n\nAmbos com atraso (C): Paulo cumpre os marcos esperados para 4 meses.\n\nPaulo atrasado e Carlos normal (D): é o inverso.",
    "reference": "Ministério da Saúde — Caderneta da Criança (2024) / SBP — Desenvolvimento neuropsicomotor",
    "tags": [
      "desenvolvimento neuropsicomotor",
      "marcos do desenvolvimento",
      "caderneta da criança"
    ],
    "tip": "9 meses: esconde-achou, duplica sílabas, senta sem apoio."
  },
  {
    "id": "amrigs2025-68",
    "module": "Pediatria",
    "text": "Em relação ao Transtorno do Espectro Autista (TEA), assinale a alternativa correta.",
    "options": [
      "Por ser impossível o diagnóstico de TEA em lactentes entre os 18 e 24 meses, na prática, ele é realizado tardiamente.",
      "O diagnóstico de TEA é clínico, reservando-se a utilização de teste complementar de biomarcador específico nos casos de dúvida diagnóstica.",
      "Quando o lactente tem irmãos ou pais com TEA ou atraso nos marcos do desenvolvimento neuropsicomotor, especialmente nas áreas de comunicação, comportamento e socialização, torna-se mandatória a investigação diagnóstica de TEA.",
      "Considerando a elevação progressiva da prevalência de TEA, a Sociedade Brasileira de Pediatria recomenda complementar a avaliação da Caderneta da Criança com a triagem específica para autismo em todas as crianças nas idades de 36 e 48 meses, por meio do M-CHAT-R/F."
    ],
    "correctAnswer": 2,
    "explanation": "A presença de irmão ou pai com TEA (risco de recorrência ~10–20%) ou de atraso em comunicação, socialização e comportamento torna obrigatória a investigação do TEA. O diagnóstico é clínico, e quanto mais precoce, melhor o resultado da intervenção.",
    "commentary": "Impossível diagnosticar entre 18 e 24 meses (A): o diagnóstico é possível e confiável a partir dos 18–24 meses; o atraso no diagnóstico é um problema a ser corrigido, não uma regra.\n\nBiomarcador em caso de dúvida (B): não existe biomarcador validado para TEA.\n\nM-CHAT-R/F aos 36 e 48 meses (D): a SBP recomenda o M-CHAT-R/F entre 16 e 30 meses (rastreamento aos 18 e 24 meses), também incluído na Caderneta.",
    "reference": "SBP — Manual de Orientação: Transtorno do Espectro do Autismo (2019) / Ministério da Saúde — Caderneta da Criança",
    "tags": [
      "transtorno do espectro autista",
      "M-CHAT",
      "rastreamento",
      "desenvolvimento"
    ],
    "tip": "M-CHAT-R/F: 18 e 24 meses."
  },
  {
    "id": "amrigs2025-69",
    "module": "Pediatria",
    "text": "No lactente com tetralogia de Fallot, as crises hipoxêmicas normalmente decorrem de:",
    "options": [
      "Hiperfluxo pulmonar pelo ducto arterioso patente.",
      "Hipofluxo pulmonar por estenose infundibular da artéria pulmonar.",
      "Shunt E-D pelo defeito de septo interventricular.",
      "Redução do débito cardíaco pela baixa muscularização do VD."
    ],
    "correctAnswer": 1,
    "explanation": "Na tetralogia de Fallot, as crises hipoxêmicas (\"crises de cianose\") ocorrem por espasmo do infundíbulo do ventrículo direito, que aumenta a obstrução da via de saída para a artéria pulmonar: cai o fluxo pulmonar e cresce o shunt direita-esquerda pela CIV. O tratamento é posição genupeitoral, oxigênio, morfina, volume, betabloqueador e, se preciso, fenilefrina.",
    "commentary": "Hiperfluxo pelo canal arterial (A): na tetralogia o problema é hipofluxo; o canal, quando presente, ajuda a levar sangue ao pulmão.\n\nShunt esquerda-direita pela CIV (C): a crise ocorre com shunt direita-esquerda.\n\nBaixa muscularização do VD (D): o VD é hipertrofiado; a crise depende do infundíbulo e da resistência sistêmica.",
    "reference": "SBP — Cardiopatias congênitas cianóticas / Nelson Textbook of Pediatrics",
    "tags": [
      "tetralogia de Fallot",
      "crise hipoxêmica",
      "cardiopatia congênita cianótica"
    ],
    "tip": "Crise de Fallot: espasmo infundibular — joelhos no peito, O₂, morfina, volume, betabloqueador."
  },
  {
    "id": "amrigs2025-70",
    "module": "Pediatria",
    "text": "Criança de 4 anos, no transoperatório de adenoidectomia, faz hipertermia de 41°C e apresenta baixo débito cardíaco. Imediatamente, é administrado dantrolene, pois inferiu-se corretamente que o gatilho foi:",
    "options": [
      "Translocação bacteriana.",
      "Infarto agudo do miocárdio.",
      "Hipertermia maligna pelo uso de succinilcolina.",
      "Sangramento nasal, em decorrência de Coagulação Intravascular Disseminada (CIVD)."
    ],
    "correctAnswer": 2,
    "explanation": "Hipertermia grave durante a anestesia, com instabilidade hemodinâmica e resposta ao dantrolene, caracteriza hipertermia maligna: doença farmacogenética (mutação do receptor de rianodina, RYR1) disparada por anestésicos inalatórios halogenados e succinilcolina, com liberação descontrolada de cálcio no músculo esquelético. Sinais precoces: aumento do CO₂ expirado, taquicardia, rigidez e, depois, hipertermia.",
    "commentary": "Translocação bacteriana (A): não causa hipertermia de 41 °C em minutos no transoperatório nem responde ao dantrolene.\n\nInfarto agudo do miocárdio (B): não explica hipertermia e é raríssimo em criança.\n\nCIVD por sangramento nasal (D): a CIVD pode ser complicação tardia da hipertermia maligna, não seu gatilho.",
    "reference": "Sociedade Brasileira de Anestesiologia — Hipertermia maligna / MHAUS guidelines",
    "tags": [
      "hipertermia maligna",
      "succinilcolina",
      "dantrolene",
      "anestesia"
    ],
    "tip": "Hipertermia + rigidez + CO₂ subindo na anestesia = hipertermia maligna: dantrolene."
  },
  {
    "id": "amrigs2025-71",
    "module": "Pediatria",
    "text": "Criança de 2 anos, 12 kg, há 4 dias com picos febris associados à mialgia intensa e cefaleia retro-orbital, vem à consulta de urgência, pois iniciou com manchas de pele, descritas ao exame físico como púrpuras petequiais em tronco e membros, associadas à epistaxe. Não tem sinais de hipoperfusão, está sonolenta e com recusa alimentar. Considerando o caso apresentado, analise as assertivas a seguir:\nI. Os sinais e sintomas são sugestivos de arbovirose tipo dengue já na fase crítica, por existir sangramento.\nII. O exame laboratorial de eleição nesse momento para confirmar sua hipótese diagnóstica é a verificação sérica do antígeno-NS1.\nIII. O aporte hídrico intravenoso de manutenção deve ter a vazão de 35 mL/h.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: criança no 4º dia de febre com quadro típico de dengue, sangramento (petéquias, epistaxe) e sonolência e recusa alimentar (sinais de alarme) está na fase crítica (3º–7º dia), classificada como grupo C.\nII correta: até o 5º dia, o exame de escolha é o antígeno NS1 (ou RT-PCR).\nIII incorreta: pela regra de Holliday-Segar, 12 kg precisam de 1.000 + 100 = 1.100 mL/dia, cerca de 45 mL/h — não 35 mL/h. Além disso, no grupo C a hidratação inicial é de expansão (10 mL/kg na primeira hora), não só de manutenção.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada.\n\nI, II e III (D): a III está errada.",
    "reference": "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "tags": [
      "dengue",
      "sinais de alarme",
      "hidratação venosa",
      "Holliday-Segar",
      "NS1"
    ],
    "tip": "Holliday-Segar: 100 mL/kg até 10 kg, +50 mL/kg de 10 a 20 kg, +20 mL/kg acima de 20 kg."
  },
  {
    "id": "amrigs2025-72",
    "module": "Pediatria",
    "text": "Em decorrência das enchentes que assolaram o Rio Grande do Sul neste ano, o risco para acidentes ofídicos aumentou na população pediátrica. O tipo de acidente mais prevalente, nesse caso, é o:",
    "options": [
      "Laquético.",
      "Elapídico.",
      "Crotálico.",
      "Botrópico."
    ],
    "correctAnswer": 3,
    "explanation": "No Brasil, e também no Rio Grande do Sul, o acidente ofídico mais frequente é o botrópico (jararacas, cerca de 70–90% dos casos). Enchentes desalojam as serpentes e as aproximam das pessoas, mas não mudam essa proporção.",
    "commentary": "Laquético (A): surucucu, restrita a florestas (Amazônia e Mata Atlântica do Nordeste/Sudeste); não ocorre no RS.\n\nElapídico (B): corais verdadeiras, menos de 1% dos acidentes.\n\nCrotálico (C): cascavel, segunda causa no país, bem menos frequente que o botrópico.",
    "reference": "Ministério da Saúde — Guia de Animais Peçonhentos do Brasil (2024) / Guia de Vigilância em Saúde",
    "tags": [
      "acidente ofídico",
      "acidente botrópico",
      "jararaca",
      "animais peçonhentos"
    ],
    "tip": "Acidente ofídico mais comum no Brasil: botrópico (jararaca)."
  },
  {
    "id": "amrigs2025-73",
    "module": "Pediatria",
    "text": "Raquel e Teresa têm 3 anos e 6 meses. Raquel pesa 16 kg, e Tereza, 17,5 kg, sendo que ambas estão com 100 cm de altura (1 metro). Considerando o gráfico abaixo, recomendado pela Organização Mundial de Saúde (OMS), os estados nutricionais de Raquel e Teresa são classificados como apresentando ______________ e ________________, respectivamente.",
    "options": [
      "risco de sobrepeso – sobrepeso",
      "eutrofia – sobrepeso",
      "risco de sobrepeso – risco de sobrepeso",
      "eutrofia – risco de sobrepeso"
    ],
    "correctAnswer": 3,
    "explanation": "IMC = peso ÷ altura². Com 1 m de altura: Raquel tem IMC 16 kg/m² e Teresa, 17,5 kg/m². No gráfico de IMC da OMS para meninas de 2 a 5 anos, aos 3 anos e 6 meses o escore z 0 fica perto de 15,3, o +1 perto de 16,8 e o +2 perto de 18,4.\n\nRaquel (16): entre z 0 e +1 → eutrofia.\nTeresa (17,5): entre z +1 e +2 → risco de sobrepeso (abaixo de 5 anos, z entre +1 e +2 é \"risco de sobrepeso\"; entre +2 e +3, sobrepeso).",
    "commentary": "Risco de sobrepeso – sobrepeso (A): Raquel está abaixo de z +1, e Teresa abaixo de +2.\n\nEutrofia – sobrepeso (B): Teresa não chega a z +2.\n\nRisco de sobrepeso – risco de sobrepeso (C): Raquel está abaixo de z +1.",
    "reference": "Ministério da Saúde — Caderneta da Criança / OMS — Curvas de crescimento (2006) / SBP",
    "tags": [
      "IMC",
      "curvas da OMS",
      "estado nutricional",
      "sobrepeso infantil"
    ],
    "tip": "Menores de 5 anos: z +1 a +2 = risco de sobrepeso; +2 a +3 = sobrepeso; >+3 = obesidade.",
    "image": "/images/amrigs2025-73.webp"
  },
  {
    "id": "amrigs2025-74",
    "module": "Pediatria",
    "text": "Escolar, 6 anos, há 2 dias com dor abdominal difusa, há 1 dia com náuseas e vômitos e há 12h com febre e piora da dor, associadas à diarreia aguda, sem restos patológicos. Após ultrassonografia (US) abdominal, é encaminhado para apendicectomia de urgência. No transoperatório, evidencia-se secreção purulenta em cavidade abdominal. Considerando a situação clínica apresentada, é correto afirmar que:",
    "options": [
      "A clínica é mais sugestiva de diarreia viral com adenite mesentérica.",
      "A US abdominal é o exame de escolha para diagnosticar apendicite.",
      "Trata-se de um caso de apendicite aguda complicada.",
      "O início dos sintomas com dor abdominal é uma manifestação infrequente na apendicite."
    ],
    "correctAnswer": 2,
    "explanation": "Dor abdominal seguida de náuseas e vômitos e, depois, febre, com evolução de 2 dias e secreção purulenta na cavidade, caracteriza apendicite aguda complicada (perfurada, com peritonite). Em crianças, o diagnóstico costuma ser mais tardio, e a perfuração, mais frequente.",
    "commentary": "Diarreia viral com adenite mesentérica (A): o achado de pus na cirurgia confirma processo bacteriano complicado.\n\nUltrassom como exame de escolha (B): o diagnóstico é essencialmente clínico; o ultrassom é o exame de imagem preferido em crianças quando há dúvida, mas não é o \"exame de escolha para diagnosticar\" em todos os casos — e ele não confirma a complicação.\n\nDor como manifestação infrequente (D): a dor abdominal é o primeiro sintoma da apendicite na grande maioria dos casos.",
    "reference": "SBP — Abdome agudo na criança / WSES Jerusalem guidelines (2020)",
    "tags": [
      "apendicite aguda",
      "apendicite complicada",
      "abdome agudo",
      "pediatria"
    ],
    "tip": "Na apendicite, a dor vem antes dos vômitos e da febre."
  },
  {
    "id": "amrigs2025-75",
    "module": "Pediatria",
    "text": "Criança, 7 anos, há 2 semanas em uso de fenitoína oral para tratamento de epilepsia de diagnóstico recente. Inicia com febre, linfadenopatia e rash pruriginoso de acometimento de cerca de 5% do tegumento cutâneo, associado a áreas de formação de bolhas, inclusive em mucosas. A principal hipótese diagnóstica é:",
    "options": [
      "Stevens-Johnson.",
      "Meningite viral aguda.",
      "Pênfigo foliáceo.",
      "Meningite bacteriana aguda."
    ],
    "correctAnswer": 0,
    "explanation": "Febre, rash com bolhas e acometimento de mucosas 1 a 3 semanas após iniciar fenitoína (anticonvulsivante aromático) sugerem reação cutânea grave a fármaco. Com descolamento de menos de 10% da superfície corporal, o diagnóstico é síndrome de Stevens-Johnson (10–30% = sobreposição; >30% = necrólise epidérmica tóxica). A conduta é suspender o fármaco e dar suporte.",
    "commentary": "Meningite viral (B) e bacteriana (D): não explicam bolhas cutâneas e mucosas; não há sinais meníngeos.\n\nPênfigo foliáceo (C): bolhas superficiais, sem acometimento de mucosas e sem relação temporal com fármaco.",
    "reference": "SBD — Consenso sobre reações cutâneas graves a medicamentos / Nelson Textbook of Pediatrics",
    "tags": [
      "síndrome de Stevens-Johnson",
      "farmacodermia",
      "fenitoína",
      "necrólise epidérmica tóxica"
    ],
    "tip": "SSJ <10% da pele; NET >30%. Anticonvulsivante aromático é causa clássica."
  },
  {
    "id": "amrigs2025-76",
    "module": "Pediatria",
    "text": "Menina de três anos, previamente hígida, apresenta quadro clínico compatível com meningite bacteriana aguda e glicemia de 90 mg%. Ao ser submetida à punção lombar, qual das opções de análise de seu líquor é tipicamente mais compatível com a situação apresentada?",
    "options": [
      "3 células/mm³, glicose de 70 mg% e proteínas de 20 mg/dL.",
      "1.000 células/mm³, com predomínio de 80% de polimorfonucleares neutrófilos, glicose de 10 mg% e proteinorraquia de 180 mg%.",
      "80 células/mm³ com predomínio de linfócitos, proteinorraquia de 40 mg/dL e glicose de 74 mg%.",
      "100 células/mm³, proteinorraquia de 80 mg/dL e glicose de 80 mg%."
    ],
    "correctAnswer": 1,
    "explanation": "Meningite bacteriana: líquor turvo, com centenas a milhares de células, predomínio de neutrófilos, glicose baixa (relação líquor/glicemia <0,4; aqui 10/90) e proteína elevada. A alternativa B mostra exatamente esse padrão.",
    "commentary": "3 células, glicose 70, proteína 20 (A): líquor normal.\n\n80 células linfocitárias, glicose normal (C): padrão de meningite viral.\n\n100 células, proteína 80, glicose 80 (D): glicose normal e celularidade moderada, sem predomínio informado — não é o padrão bacteriano típico.",
    "reference": "SBP — Meningites bacterianas / Ministério da Saúde — Guia de Vigilância em Saúde",
    "tags": [
      "meningite bacteriana",
      "líquor",
      "análise do líquor",
      "pediatria"
    ],
    "tip": "Bacteriana: neutrófilos, glicose baixa, proteína alta."
  },
  {
    "id": "amrigs2025-77",
    "module": "Pediatria",
    "text": "Sobre a escala de coma de Glasgow, na avaliação clínica e acompanhamento do nível de consciência do paciente, analise as assertivas a seguir:\nI. É utilizada tanto no coma traumático quanto no não traumático.\nII. Avalia quatro parâmetros: abertura ocular (com notas de 1 a 5), resposta verbal (com notas de 1 a 5), resposta motora (com notas de 0 a 4) e padrão respiratório (com notas de 0 a 1).\nIII. O melhor escore é 15 e o pior é 3 (que indica que o paciente está morto).\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "Apenas I e II."
    ],
    "correctAnswer": 0,
    "explanation": "I correta: a escala de coma de Glasgow é usada no coma traumático e no não traumático.\nII incorreta: são três parâmetros, não quatro — abertura ocular (1–4), resposta verbal (1–5) e resposta motora (1–6); a versão de 2018 acrescenta a reatividade pupilar (Glasgow-P), que subtrai pontos, mas padrão respiratório não faz parte.\nIII incorreta: o pior escore é 3, mas não significa morte — indica coma profundo.",
    "commentary": "Apenas II (B): a II está errada.\n\nApenas III (C): 3 pontos não indica morte.\n\nApenas I e II (D): a II está errada.",
    "reference": "Teasdale G, Jennett B. Lancet 1974 / Glasgow Coma Scale — atualização com reatividade pupilar (2018) / ATLS 10ª ed.",
    "tags": [
      "escala de coma de Glasgow",
      "nível de consciência",
      "coma"
    ],
    "tip": "Glasgow: olhos 4 + verbal 5 + motor 6 = 15; mínimo 3."
  },
  {
    "id": "amrigs2025-78",
    "module": "Pediatria",
    "text": "Menina de 2 anos de idade, previamente hígida, com febre, apresenta uma crise convulsiva. O caso pode ser classificado como convulsão febril simples se tiver as seguintes características:\nI. Crise generalizada e sem história de convulsão afebril prévia.\nII. Tiver duração inferior a 15 minutos e sem déficit neurológico prévio.\nIII. Não tiver recorrência dentro de 24h e não tiver infecção no sistema nervoso central.\n\nQuais estão corretas?",
    "options": [
      "Apenas I.",
      "Apenas II.",
      "Apenas III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "Convulsão febril simples: criança de 6 meses a 5 anos, crise generalizada, duração inferior a 15 minutos, episódio único em 24 horas, sem infecção do sistema nervoso central, sem déficit neurológico ou crise afebril prévia. Todas as características listadas estão de acordo.",
    "commentary": "Apenas I (A), Apenas II (B), Apenas III (C): cada uma deixa de fora critérios que fazem parte da definição.",
    "reference": "SBP — Crise febril / American Academy of Pediatrics — Febrile Seizures (2011)",
    "tags": [
      "convulsão febril",
      "crise febril simples",
      "epilepsia",
      "pediatria"
    ],
    "tip": "Febril simples: generalizada, <15 min, única em 24 h, 6 meses a 5 anos."
  },
  {
    "id": "amrigs2025-79",
    "module": "Pediatria",
    "text": "Analise as assertivas a seguir a respeito de episódio depressivo na adolescência:\nI. Jovens tendem a apresentar inicialmente queixas físicas ou comportamentais que podem obscurecer os sintomas depressivos típicos observados em adultos.\nII. A apresentação clínica pode ser semelhante tanto na depressão unipolar como bipolar. A dificuldade diagnóstica ocorre em alguns casos, porque o transtorno bipolar geralmente se inicia com quadros depressivos, sem história prévia de sintomas maníacos, hipomaníacos ou mistos.\nIII. Algumas queixas como humor irritável ou rancoroso, tédio crônico ou perda de interesse em atividades previamente prazerosas, não querer mais sair com os amigos e queda na performance acadêmica devem alertar os clínicos para possível quadro depressivo.\nIV. Na depressão leve ou moderada, geralmente apresentam afeto reativo, ou seja, uma habilidade de se animar momentaneamente em resposta a eventos positivos, podendo, com certo esforço, esconder seus sintomas.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas II e IV.",
      "Apenas I, III e IV.",
      "I, II, III e IV."
    ],
    "correctAnswer": 3,
    "explanation": "Todas as assertivas descrevem a depressão na adolescência:\n\nI: os jovens costumam trazer queixas somáticas e comportamentais que mascaram o quadro.\nII: o primeiro episódio do transtorno bipolar costuma ser depressivo, o que dificulta a distinção com a depressão unipolar.\nIII: irritabilidade, tédio, anedonia, isolamento e queda do rendimento escolar são sinais de alerta.\nIV: nos quadros leves e moderados, o afeto costuma ser reativo, e o adolescente consegue disfarçar os sintomas.",
    "commentary": "Apenas I e II (A), Apenas II e IV (B), Apenas I, III e IV (C): todas deixam de fora assertivas corretas.",
    "reference": "ABP / Kaplan & Sadock — Psiquiatria da infância e adolescência / NICE NG134 — Depression in children and young people",
    "tags": [
      "depressão na adolescência",
      "transtorno bipolar",
      "saúde mental do adolescente"
    ],
    "tip": "No adolescente, depressão costuma se manifestar como irritabilidade e queda escolar."
  },
  {
    "id": "amrigs2025-80",
    "module": "Pediatria",
    "text": "Menino de 8 anos foi atendido em pronto atendimento por fratura do rádio após cair de uma árvore na rua de casa. A mãe relata que ele é bastante inquieto, não conseguindo ficar muito tempo em um lugar, que é “barulhento”, conversador e perturba a aula. Já recebeu diversos bilhetes da escola a respeito de seu comportamento, mas a professora relata que ele parece não querer desobedecer de propósito. Apresenta também deficiência de aprendizado, por ter dificuldades em realizar as tarefas de aula, e comete erros em seus trabalhos por descuido. A professora relatou que sua atenção se perde constantemente, e que precisa chamá-lo ou acenar, pois aparenta às vezes não ouvir, não conseguindo seguir as instruções propostas. O instrutor do futebol também percebeu problemas de concentração durantes os treinos. Além disso, esquece os materiais que deveria levar para escola. Seu quarto é bagunçado e ele perde suas coisas o tempo todo. Em função da preocupação com a criança, os pais iniciaram uma avaliação em que um dos testes demonstrou que seu QI está na faixa normal.\n\nConsiderando o caso de Transtorno de Déficit de Atenção e Hiperatividade (TDAH), qual é o diagnóstico mais provável?",
    "options": [
      "TDAH, tipo predominante hiperativo.",
      "TDAH, tipo predominante desatento.",
      "TDAH, tipo combinado.",
      "TDAH com comorbidade de Transtorno de Oposição Desafiante (TOD)."
    ],
    "correctAnswer": 2,
    "explanation": "O menino tem sintomas de hiperatividade/impulsividade (inquieto, não para no lugar, barulhento, fala demais, se acidenta) e de desatenção (erros por descuido, não parece ouvir, não segue instruções, perde e esquece objetos, desorganizado), em mais de um ambiente (casa, escola, futebol), com QI normal. Ter os dois domínios caracteriza TDAH tipo combinado.",
    "commentary": "Tipo predominante hiperativo (A): ignora os muitos sintomas de desatenção.\n\nTipo predominante desatento (B): ignora a inquietação e a fala excessiva.\n\nComorbidade com TOD (D): a professora relata que ele não desobedece de propósito — não há padrão de desafio e hostilidade.",
    "reference": "DSM-5-TR / ABDA — Associação Brasileira do Déficit de Atenção",
    "tags": [
      "TDAH",
      "transtorno do déficit de atenção e hiperatividade",
      "psiquiatria infantil"
    ],
    "tip": "TDAH combinado = ≥6 sintomas de desatenção E ≥6 de hiperatividade, em 2 ou mais ambientes."
  },
  {
    "id": "amrigs2025-81",
    "module": "Saúde Coletiva",
    "text": "De acordo com a Política Nacional de Atenção Básica definida na Portaria nº 2.436/2017, é uma atribuição específica do médico de família e comunidade na Estratégia Saúde da Família:",
    "options": [
      "Implementar e manter atualizados rotinas, protocolos e fluxos relacionados à sua área de competência na UBS.",
      "Responsabilizar-se pelo acompanhamento da população adscrita ao longo do tempo no que se refere às múltiplas situações de doenças e agravos, e às necessidades de cuidados preventivos, permitindo a longitudinalidade do cuidado.",
      "Indicar a necessidade de internação hospitalar ou domiciliar, mantendo a responsabilização pelo acompanhamento da pessoa.",
      "Realizar ações de educação em saúde à população adscrita, conforme planejamento da equipe e utilizando abordagens adequadas às necessidades desse público."
    ],
    "correctAnswer": 2,
    "explanation": "Na PNAB 2017, \"indicar a necessidade de internação hospitalar ou domiciliar, mantendo a responsabilização pelo acompanhamento da pessoa\" está entre as atribuições específicas do médico. As outras alternativas são atribuições comuns a todos os membros da equipe.",
    "commentary": "Implementar rotinas e protocolos (A): atribuição comum a todos os profissionais.\n\nResponsabilizar-se pela população adscrita ao longo do tempo (B): atribuição comum — a longitudinalidade é de toda a equipe.\n\nEducação em saúde (D): atribuição comum a todos os profissionais.",
    "reference": "Ministério da Saúde — Portaria nº 2.436/2017 (Política Nacional de Atenção Básica)",
    "tags": [
      "PNAB",
      "atenção primária",
      "estratégia saúde da família",
      "atribuições do médico"
    ],
    "tip": "Atribuições específicas do médico na PNAB: consulta, procedimentos, encaminhamento e indicação de internação."
  },
  {
    "id": "amrigs2025-82",
    "module": "Saúde Coletiva",
    "text": "A Atenção Primária à Saúde (APS) é fundamental para o funcionamento eficaz dos sistemas de saúde e a promoção da saúde da população. Em relação aos princípios, estratégias, características, práticas e desafios da APS, assinale a alternativa correta.",
    "options": [
      "Um dos principais desafios da APS é garantir a coordenação do cuidado, o que implica a integração efetiva entre diferentes níveis de atenção e setores de saúde.",
      "A implementação de Equipes de Saúde da Família (ESF) na APS visa à redução dos custos operacionais e à restrição de acesso a serviços especializados.",
      "A abordagem centrada na pessoa, característica da APS, envolve a gestão integrada de todos os problemas de saúde do paciente, independentemente do seu contexto familiar e comunitário.",
      "A APS deve ser organizada de forma hierárquica e centralizada para garantir maior controle e padronização dos serviços prestados."
    ],
    "correctAnswer": 0,
    "explanation": "A coordenação do cuidado é um dos atributos essenciais da APS (Starfield) e um dos maiores desafios: exige integrar a atenção primária aos outros níveis (especialidades, hospitais, urgência) e a outros setores, com fluxos de referência e contrarreferência e informação compartilhada.",
    "commentary": "ESF para reduzir custos e restringir acesso a especialistas (B): o objetivo é ampliar o acesso e a resolutividade; a APS ordena o acesso, não o restringe.\n\nCuidado centrado na pessoa independente da família e da comunidade (C): a orientação familiar e comunitária é atributo da APS; o contexto é parte do cuidado.\n\nOrganização hierárquica e centralizada (D): a APS é descentralizada, territorializada e organizada em rede.",
    "reference": "Starfield B. Atenção primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (2002) / PNAB 2017",
    "tags": [
      "atenção primária",
      "coordenação do cuidado",
      "atributos da APS"
    ],
    "tip": "Atributos essenciais da APS: acesso, longitudinalidade, integralidade e coordenação."
  },
  {
    "id": "amrigs2025-83",
    "module": "Saúde Coletiva",
    "text": "Analise as seguintes assertivas em relação aos princípios e diretrizes do Sistema Único de Saúde (SUS):\nI. A integralidade envolve a prestação contínua e articulada de ações e serviços preventivos, curativos, de promoção da saúde e de reabilitação em todos os níveis de complexidade.\nII. A regionalização implica a centralização dos serviços de saúde em grandes centros urbanos, para melhor controle e gestão dos recursos.\nIII. A participação social é garantida através de mecanismos como os conselhos e conferências de saúde, que permitem à população influenciar diretamente as políticas de saúde.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 1,
    "explanation": "I correta: integralidade é o conjunto articulado e contínuo de ações preventivas e curativas, individuais e coletivas, em todos os níveis de complexidade (Lei 8.080/90).\nII incorreta: regionalização significa organizar os serviços em regiões de saúde com base territorial, articulando municípios para garantir acesso — o oposto de centralizar em grandes centros.\nIII correta: a participação da comunidade se dá por conselhos e conferências de saúde (Lei 8.142/90).",
    "commentary": "Apenas I e II (A): a II está errada.\n\nApenas II e III (C): a II está errada.\n\nI, II e III (D): a II está errada.",
    "reference": "Lei nº 8.080/1990 / Lei nº 8.142/1990 / Decreto nº 7.508/2011",
    "tags": [
      "SUS",
      "princípios do SUS",
      "integralidade",
      "regionalização",
      "participação social"
    ],
    "tip": "Regionalização é descentralizar com articulação regional, não centralizar."
  },
  {
    "id": "amrigs2025-84",
    "module": "Saúde Coletiva",
    "text": "Analise as seguintes assertivas em relação ao território na organização local dos serviços da APS:\nI. Corresponde à área geográfica de abrangência de uma equipe de saúde, sendo um espaço de corresponsabilidade pela saúde entre população e serviço.\nII. Considera-se uma determinada realidade de saúde da população que nele vive, a qual está em permanente movimento, por isso denominada de processos saúde-doença.\nIII. É definido com base em critérios administrativos, assistenciais e organizacionais da população local, tendo dimensões econômicas, política, cultural e epidemiológica.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três estão corretas. O território na APS é a área de responsabilidade da equipe (corresponsabilidade entre serviço e população); é um espaço vivo, com uma realidade de saúde em constante mudança (processo saúde-doença); e sua delimitação considera critérios administrativos, assistenciais e organizacionais, com dimensões econômica, política, cultural e epidemiológica.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora uma assertiva correta.",
    "reference": "PNAB 2017 / Gondim GMM, Monken M. Territorialização em saúde (Fiocruz)",
    "tags": [
      "territorialização",
      "atenção primária",
      "território"
    ],
    "tip": "Território na APS é um espaço vivo, não só um mapa."
  },
  {
    "id": "amrigs2025-85",
    "module": "Clínica Médica",
    "text": "Vilmar, 62 anos, com hipertensão arterial sistêmica, diabético e com história de depressão, vem à consulta na Unidade de Saúde queixando-se de edema em ambos os tornozelos. Qual das medicações de uso contínuo utilizada pelo paciente é a causa mais provável do edema perimaleolar?",
    "options": [
      "Losartana.",
      "Fluoxetina.",
      "Anlodipino.",
      "Metformina."
    ],
    "correctAnswer": 2,
    "explanation": "Edema maleolar bilateral é o efeito adverso mais característico dos bloqueadores dos canais de cálcio di-hidropiridínicos, como o anlodipino. Ocorre por vasodilatação arteriolar pré-capilar, que aumenta a pressão hidrostática capilar — por isso não melhora com diurético. Reduzir a dose, trocar o fármaco ou associar IECA/BRA (que dilata o lado venoso) ajuda.",
    "commentary": "Losartana (A): BRA não causa edema; pelo contrário, reduz o edema do anlodipino.\n\nFluoxetina (B): não tem edema periférico como efeito típico.\n\nMetformina (D): não causa edema (diferente da pioglitazona).",
    "reference": "Diretrizes Brasileiras de Hipertensão Arterial — SBC 2020",
    "tags": [
      "anlodipino",
      "bloqueadores dos canais de cálcio",
      "edema maleolar",
      "efeitos adversos"
    ],
    "tip": "Edema de tornozelo em hipertenso: pense em anlodipino."
  },
  {
    "id": "amrigs2025-86",
    "module": "Clínica Médica",
    "text": "Qual dos seguintes achados laboratoriais é mais indicativo de anemia hemolítica?",
    "options": [
      "Aumento da bilirrubina indireta.",
      "Diminuição da contagem de reticulócitos.",
      "Presença de células em alvo no esfregaço de sangue periférico.",
      "Aumento do nível de ferritina."
    ],
    "correctAnswer": 0,
    "explanation": "Na hemólise, a destruição de hemácias libera hemoglobina, cujo heme é convertido em bilirrubina não conjugada: sobe a bilirrubina indireta. Outros marcadores: reticulocitose, LDH elevada e haptoglobina baixa.",
    "commentary": "Reticulócitos diminuídos (B): na hemólise, a medula responde com reticulocitose (salvo crise aplásica).\n\nCélulas em alvo (C): aparecem em hemoglobinopatias, doença hepática e pós-esplenectomia; não são marcador geral de hemólise (esferócitos e esquizócitos são mais típicos).\n\nFerritina aumentada (D): marcador de estoque de ferro e de inflamação, não de hemólise.",
    "reference": "Zago — Tratado de Hematologia / Goldman-Cecil Medicine",
    "tags": [
      "anemia hemolítica",
      "bilirrubina indireta",
      "reticulócitos",
      "LDH",
      "haptoglobina"
    ],
    "tip": "Hemólise: BI ↑, LDH ↑, reticulócitos ↑, haptoglobina ↓."
  },
  {
    "id": "amrigs2025-87",
    "module": "Saúde Coletiva",
    "text": "São vacinas indicadas para gestantes e disponíveis no SUS:\nI. DTpa (tríplice bacteriana).\nII. Hepatite B.\nIII. Influenza.\nIV. Covid-19.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I, III e IV.",
      "Apenas II, III e IV.",
      "I, II, III e IV."
    ],
    "correctAnswer": 3,
    "explanation": "No calendário do Programa Nacional de Imunizações para gestantes estão: dTpa (a partir de 20 semanas, em toda gestação), hepatite B (conforme situação vacinal), influenza (em qualquer fase, na campanha) e covid-19. Todas as opções estão corretas. Desde 2024 a vacina do vírus sincicial respiratório também passou a ser recomendada para gestantes.",
    "commentary": "Apenas I e II (A), Apenas I, III e IV (B), Apenas II, III e IV (C): todas deixam de fora vacinas indicadas para gestantes no SUS.",
    "reference": "Ministério da Saúde — Calendário Nacional de Vacinação da Gestante (PNI)",
    "tags": [
      "vacinação na gestação",
      "dTpa",
      "influenza",
      "hepatite B",
      "covid-19"
    ],
    "tip": "Gestante: dTpa a partir de 20 semanas em toda gestação; vacinas vivas, não."
  },
  {
    "id": "amrigs2025-88",
    "module": "Saúde Coletiva",
    "text": "Assinale a alternativa que apresenta doenças ou agravos que se enquadram como situação de notificação compulsória imediata (até 24 horas) no Brasil.",
    "options": [
      "Tuberculose e intoxicação exógena.",
      "Esquistossomose e HIV/AIDS.",
      "Raiva humana e síndrome da rubéola congênita.",
      "Sífilis e casos de dengue."
    ],
    "correctAnswer": 2,
    "explanation": "Pela Lista Nacional de Notificação Compulsória (Portaria de Consolidação nº 4/2017, atualizada), raiva humana e síndrome da rubéola congênita são de notificação imediata (em até 24 horas) às três esferas de gestão.",
    "commentary": "Tuberculose e intoxicação exógena (A): notificação semanal.\n\nEsquistossomose e HIV/aids (B): notificação semanal (esquistossomose é imediata só em área não endêmica).\n\nSífilis e dengue (D): notificação semanal; a dengue só é imediata nos óbitos.",
    "reference": "Ministério da Saúde — Lista Nacional de Notificação Compulsória (Portaria GM/MS nº 217/2023 e atualizações)",
    "tags": [
      "notificação compulsória",
      "vigilância epidemiológica",
      "raiva humana",
      "rubéola congênita"
    ],
    "tip": "Imediatas clássicas: raiva, rubéola, sarampo, botulismo, cólera, febre amarela, pólio, PFA."
  },
  {
    "id": "amrigs2025-89",
    "module": "Saúde Coletiva",
    "text": "Analise as seguintes assertivas em relação ao Conselho Nacional de Saúde (CNS) e assinale V, se verdadeiras, ou F, se falsas.\n( ) É uma instância colegiada, deliberativa e permanente do SUS, integrante da estrutura organizacional do Ministério da Saúde.\n( ) Sua missão é fiscalizar, acompanhar e monitorar as políticas públicas de saúde nas suas mais diferentes áreas, levando as demandas da população ao poder público.\n( ) Tem por finalidade atuar na formulação e no controle da execução da Política Nacional de Saúde, inclusive nos aspectos econômicos e financeiros, nas estratégias e na promoção do processo de controle social.\n( ) É composto por conselheiras e conselheiros titulares e seus respectivos primeiros e segundos suplentes, que são representantes dos segmentos de usuários, trabalhadores, gestores do SUS e prestadores de serviços em saúde.\n( ) É responsável por realizar conferências e fóruns de participação social, além de aprovar o orçamento da saúde e acompanhar a sua execução, avaliando a cada quatro anos o Plano Nacional de Saúde.\n\nA ordem correta de preenchimento dos parênteses, de cima para baixo, é:",
    "options": [
      "V – V – F – V – F.",
      "F – F – V – F – F.",
      "F – F – F – F – V.",
      "V – V – V – V – V."
    ],
    "correctAnswer": 3,
    "explanation": "Todas as afirmativas são verdadeiras e reproduzem a descrição institucional do Conselho Nacional de Saúde: instância colegiada, deliberativa e permanente do SUS, vinculada ao Ministério da Saúde; fiscaliza e monitora as políticas de saúde; atua na formulação e no controle da execução da política, inclusive nos aspectos econômicos e financeiros; é composto por representantes de usuários, trabalhadores, gestores e prestadores (paritário: 50% usuários); e realiza conferências, aprova o orçamento e acompanha sua execução, avaliando o Plano Nacional de Saúde.",
    "commentary": "V–V–F–V–F (A): a terceira e a quinta também são verdadeiras.\n\nF–F–V–F–F (B) e F–F–F–F–V (C): consideram falsas atribuições que de fato são do CNS.\n\nObservação: na quinta afirmativa, a Conferência Nacional de Saúde é convocada a cada quatro anos, e o Plano Nacional de Saúde também é quadrienal — a redação foi aceita como verdadeira pela banca.",
    "reference": "Lei nº 8.142/1990 / Resolução CNS nº 407/2008 (Regimento Interno do CNS)",
    "tags": [
      "conselho nacional de saúde",
      "controle social",
      "participação social",
      "SUS"
    ],
    "tip": "Conselhos de saúde: permanentes, deliberativos e paritários (50% usuários)."
  },
  {
    "id": "amrigs2025-90",
    "module": "Saúde Coletiva",
    "text": "Em um estudo, o Número Necessário para Tratar (NNT) foi calculado como 12 para prevenção de AVC. Qual é a interpretação mais correta nesse caso?",
    "options": [
      "12 pacientes precisam ser tratados para garantir que nenhum deles tenha um AVC.",
      "12 pacientes precisam ser tratados para prevenir um AVC em um paciente.",
      "O tratamento é eficaz para prevenir AVC em 12% dos pacientes.",
      "O tratamento reduzirá em 12% o risco de AVC para cada paciente tratado."
    ],
    "correctAnswer": 1,
    "explanation": "O número necessário para tratar (NNT = 1 ÷ redução absoluta do risco) é quantos pacientes precisam ser tratados, pelo tempo do estudo, para evitar um desfecho a mais. NNT de 12: tratar 12 pacientes para prevenir um AVC (redução absoluta de cerca de 8,3%).",
    "commentary": "Nenhum dos 12 terá AVC (A): o NNT não garante proteção individual.\n\nEficaz em 12% (C) e redução de 12% do risco (D): confundem NNT com porcentagem; a redução absoluta do risco seria 1/12 ≈ 8,3%.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "número necessário para tratar",
      "NNT",
      "redução absoluta do risco",
      "medicina baseada em evidências"
    ],
    "tip": "NNT = 1 ÷ RAR."
  },
  {
    "id": "amrigs2025-91",
    "module": "Saúde Coletiva",
    "text": "Analise as situações abaixo:\nI. Assumir que um valor-p pequeno implica em relevância clínica significativa.\nII. Acreditar que o valor-p pode medir a magnitude do efeito observado.\nIII. Pensar que o valor-p de um estudo determina a probabilidade da hipótese nula ser verdadeira.\n\nQuais são erros comuns na interpretação do valor-p?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "explanation": "As três são interpretações erradas do valor-p (declaração da American Statistical Association, 2016):\n\nI: p pequeno indica improbabilidade dos dados sob a hipótese nula, não relevância clínica.\nII: o valor-p não mede o tamanho do efeito (para isso: diferença de médias, RR, IC).\nIII: o valor-p é a probabilidade de obter um resultado tão extremo quanto o observado SE a hipótese nula for verdadeira — não a probabilidade de a hipótese nula ser verdadeira.",
    "commentary": "Apenas I e II (A), Apenas I e III (B), Apenas II e III (C): todas deixam de fora um erro comum de interpretação.",
    "reference": "Wasserstein RL, Lazar NA. The ASA Statement on p-Values (2016)",
    "tags": [
      "valor-p",
      "bioestatística",
      "significância estatística"
    ],
    "tip": "Significância estatística ≠ relevância clínica."
  },
  {
    "id": "amrigs2025-92",
    "module": "Saúde Coletiva",
    "text": "Em um forest plot, um estudo individual apresenta um quadrado pequeno com um intervalo de confiança amplo. Isso sugere que o estudo:",
    "options": [
      "Tem um grande peso na estimativa combinada.",
      "Tem uma amostra pequena e baixa precisão.",
      "É o mais significativo estatisticamente.",
      "Apresenta um efeito de grande magnitude."
    ],
    "correctAnswer": 1,
    "explanation": "No forest plot, o tamanho do quadrado é proporcional ao peso do estudo na metanálise (em geral, ao inverso da variância), e a linha horizontal é o intervalo de confiança. Quadrado pequeno e IC amplo indicam estudo pequeno e impreciso, com pouco peso na estimativa combinada.",
    "commentary": "Grande peso (A): quadrado pequeno significa pouco peso.\n\nO mais significativo (C): IC amplo tende a cruzar a linha de nulidade, sendo menos significativo.\n\nEfeito de grande magnitude (D): a magnitude é a posição do quadrado no eixo, não seu tamanho.",
    "reference": "Cochrane Handbook for Systematic Reviews of Interventions",
    "tags": [
      "forest plot",
      "metanálise",
      "intervalo de confiança",
      "revisão sistemática"
    ],
    "tip": "Forest plot: quadrado = peso; linha = IC; losango = efeito combinado."
  },
  {
    "id": "amrigs2025-93",
    "module": "Saúde Coletiva",
    "text": "Em um estudo de caso-controle, qual é o maior desafio para evitar o viés de seleção?",
    "options": [
      "Garantir que o grupo controle seja representativo da população que deu origem aos casos.",
      "Selecionar controles de uma população com alta prevalência da doença.",
      "Utilizar apenas um único critério de exposição.",
      "Excluir participantes com exposição anterior ao desfecho."
    ],
    "correctAnswer": 0,
    "explanation": "No estudo caso-controle, os controles devem vir da mesma população-base que deu origem aos casos — pessoas que, se tivessem a doença, seriam incluídas como casos. Se isso falhar, a frequência de exposição dos controles não representa a da população-base e surge viés de seleção.",
    "commentary": "Controles de população com alta prevalência da doença (B): controles devem ser livres da doença; isso aumentaria o erro de classificação.\n\nUm único critério de exposição (C): não tem relação com o viés de seleção.\n\nExcluir quem teve exposição anterior (D): eliminaria justamente a variável estudada.",
    "reference": "Rothman — Epidemiologia Moderna / Medronho — Epidemiologia",
    "tags": [
      "estudo caso-controle",
      "viés de seleção",
      "epidemiologia"
    ],
    "tip": "Controle bom: mesma população-base dos casos."
  },
  {
    "id": "amrigs2025-94",
    "module": "Saúde Coletiva",
    "text": "Uma Razão de Verossimilhança Positiva (RVP) de 1 significa que:\nI. O teste não altera a probabilidade pré-teste da doença.\nII. O teste é inútil para confirmar a presença da doença.\nIII. A sensibilidade e a especificidade do teste são iguais.\n\nQuais estão corretas?",
    "options": [
      "Apenas I e II.",
      "Apenas I e III.",
      "Apenas II e III.",
      "I, II e III."
    ],
    "correctAnswer": 0,
    "explanation": "RV+ = sensibilidade ÷ (1 − especificidade). Se RV+ = 1, a chance de teste positivo é igual em doentes e não doentes: o resultado não muda a probabilidade pré-teste (I correta) e o teste não ajuda a confirmar a doença (II correta).\n\nIII incorreta: RV+ = 1 significa sensibilidade = 1 − especificidade (soma igual a 100%), não sensibilidade igual à especificidade.",
    "commentary": "Apenas I e III (B): a III está errada.\n\nApenas II e III (C): a III está errada.\n\nI, II e III (D): a III está errada.",
    "reference": "Fletcher — Epidemiologia Clínica / McGee — Evidence-Based Physical Diagnosis",
    "tags": [
      "razão de verossimilhança",
      "testes diagnósticos",
      "probabilidade pré-teste"
    ],
    "tip": "RV+ >10 confirma bem; RV− <0,1 exclui bem; RV = 1 não muda nada."
  },
  {
    "id": "amrigs2025-95",
    "module": "Saúde Coletiva",
    "text": "Qual das seguintes características distingue uma coorte histórica de um estudo de caso-controle quando ambos estão investigando a mesma doença?",
    "options": [
      "A coorte histórica estuda doenças raras de forma mais eficiente do que o caso-controle.",
      "A coorte histórica permite calcular a razão de odds, enquanto o caso-controle calcula o risco relativo.",
      "A coorte histórica utiliza dados de exposição previamente coletados, enquanto o caso-controle baseia-se em dados de desfecho.",
      "Ambos os estudos usam os mesmos métodos para selecionar casos e controles."
    ],
    "correctAnswer": 2,
    "explanation": "Na coorte histórica (retrospectiva), parte-se da exposição registrada no passado (prontuários, bancos de dados) e acompanha-se o surgimento do desfecho. No caso-controle, parte-se do desfecho (casos com a doença e controles sem) e investiga-se a exposição retrospectivamente.",
    "commentary": "Coorte histórica mais eficiente para doenças raras (A): o caso-controle é o desenho mais eficiente para doenças raras.\n\nCoorte com odds ratio e caso-controle com RR (B): é o inverso — a coorte permite calcular risco relativo; o caso-controle, odds ratio.\n\nMesmos métodos para selecionar casos e controles (D): a coorte seleciona pela exposição, não por casos e controles.",
    "reference": "Medronho — Epidemiologia / Fletcher — Epidemiologia Clínica",
    "tags": [
      "coorte histórica",
      "estudo caso-controle",
      "desenhos de estudo",
      "epidemiologia"
    ],
    "tip": "Coorte parte da exposição (RR); caso-controle parte do desfecho (OR)."
  },
  {
    "id": "amrigs2025-96",
    "module": "Saúde Coletiva",
    "text": "Um paciente é suspeito de ter uma infecção bacteriana grave. Dois testes rápidos, aplicados em paralelo, mostraram-se contraditórios: o primeiro deu positivo, e o segundo deu negativo. Como interpretar esse resultado?",
    "options": [
      "O paciente deve ser considerado negativo, pois um dos testes foi negativo.",
      "O paciente deve ser considerado positivo, já que apenas um resultado positivo é necessário em testes em paralelo.",
      "O paciente deve ser retestado com um terceiro teste para maior certeza.",
      "O paciente está livre de infecção, já que não há concordância entre os testes."
    ],
    "correctAnswer": 1,
    "explanation": "Em testes em paralelo, basta um resultado positivo para considerar o paciente positivo. A estratégia aumenta a sensibilidade (perde menos doentes) à custa de especificidade — adequada quando não se pode deixar passar uma doença grave, como infecção bacteriana grave.",
    "commentary": "Considerar negativo (A): descreve a lógica dos testes em série, em que todos precisam ser positivos.\n\nTerceiro teste (C): não é a regra de interpretação dos testes em paralelo.\n\nLivre de infecção por discordância (D): discordância não exclui doença; em paralelo, um positivo basta.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "testes em paralelo",
      "testes diagnósticos",
      "sensibilidade",
      "especificidade"
    ],
    "tip": "Paralelo: ↑ sensibilidade (um positivo basta). Série: ↑ especificidade (todos positivos)."
  },
  {
    "id": "amrigs2025-97",
    "module": "Saúde Coletiva",
    "text": "O que é um teste “padrão-ouro”?",
    "options": [
      "Um teste com 100% de sensibilidade.",
      "Um teste com 100% de especificidade.",
      "Um teste usado como referência para avaliar outros testes.",
      "Um teste com 100% de acurácia."
    ],
    "correctAnswer": 2,
    "explanation": "Padrão-ouro (padrão de referência) é o melhor método disponível para definir quem tem e quem não tem a doença, usado como referência para avaliar a sensibilidade, a especificidade e os valores preditivos de novos testes. Não precisa ser perfeito.",
    "commentary": "100% de sensibilidade (A), 100% de especificidade (B), 100% de acurácia (D): nenhum teste real é perfeito; o padrão-ouro é apenas a melhor referência disponível.",
    "reference": "Fletcher — Epidemiologia Clínica: elementos essenciais",
    "tags": [
      "padrão-ouro",
      "testes diagnósticos",
      "acurácia"
    ],
    "tip": "Padrão-ouro = melhor referência disponível, não teste perfeito."
  },
  {
    "id": "amrigs2025-98",
    "module": "Saúde Coletiva",
    "text": "Em um estudo sobre a eficácia de um novo teste de triagem para câncer de bexiga, apesar de a mortalidade por câncer de bexiga permanecer constante, os pacientes que foram diagnosticados precocemente por exames regulares apresentaram uma sobrevida média de 5 anos, enquanto os diagnosticados após o surgimento de sintomas tiveram uma sobrevida de 2 anos. Qual é a explicação mais provável?",
    "options": [
      "O novo método de rastreamento precoce parece ser a única explicação para o aumento da sobrevida observada.",
      "Um viés pode estar distorcendo os resultados, já que o diagnóstico precoce apenas aumenta o tempo entre o diagnóstico e a morte.",
      "O estudo prova que o rastreamento de câncer de bexiga é eficaz para prolongar a vida dos pacientes.",
      "Pacientes diagnosticados precocemente sempre apresentam resultados melhores do que os que são diagnosticados após sintomas."
    ],
    "correctAnswer": 1,
    "explanation": "Se a mortalidade por câncer de bexiga não mudou, mas a sobrevida a partir do diagnóstico aumentou nos rastreados, o mais provável é viés de antecipação (lead-time bias): o diagnóstico foi feito mais cedo, aumentando o tempo entre diagnóstico e morte sem adiar a morte. O desfecho que valida um rastreamento é a redução da mortalidade.",
    "commentary": "Rastreamento como única explicação (A) e prova de eficácia (C): ignoram o viés; sem queda da mortalidade, não há prova de benefício.\n\nDiagnóstico precoce sempre melhor (D): generalização falsa — rastreamento também causa sobrediagnóstico e não melhora todos os desfechos.",
    "reference": "Fletcher — Epidemiologia Clínica / INCA — Detecção precoce do câncer",
    "tags": [
      "viés de antecipação",
      "lead-time bias",
      "rastreamento",
      "epidemiologia"
    ],
    "tip": "Sobrevida aumentou e mortalidade não caiu = lead-time bias."
  },
  {
    "id": "amrigs2025-99",
    "module": "Clínica Médica",
    "text": "No atendimento a vítimas de catástrofes, violências ou acidentes, algumas abordagens podem ser adotadas para auxiliar na prevenção do desenvolvimento de transtornos mentais após eventos traumáticos, principalmente o Transtorno de Estresse Pós-Traumático (TEPT). São abordagens recomendadas as mencionadas a seguir, EXCETO:",
    "options": [
      "Evitar a retraumatização, não induzindo o paciente a descrever o evento traumático, nem o forçando a retornar à cena violenta. Deve-se priorizar a anamnese objetiva quanto aos dados da situação traumática, por meio de entrevistas com familiares ou terceiros envolvidos (testemunhas, policiais, bombeiros, socorristas, etc.), e não diretamente com o paciente.",
      "Fazer o reasseguramento, reforçando a condição atual de estabilidade clínica e segurança do paciente, afastando-o do ambiente da cena traumática, valorizando o “aqui e agora estou seguro” (ambiente hospitalar/unidade de saúde, presença da equipe de saúde, equipe de segurança, familiares, etc.).",
      "Administrar benzodiazepínicos na maioria dos casos, com objetivo de reduzir o sofrimento agudo (ansiedade, medo, insônia) relacionado ao trauma.",
      "Evitar a vitimização, procurando não valorizar o impacto destruidor do trauma, não patologizar e não se referir a sintomas reacionais como doença mental."
    ],
    "correctAnswer": 2,
    "explanation": "A pergunta pede a EXCEÇÃO. Benzodiazepínicos NÃO são recomendados na maioria dos casos após trauma: não previnem o TEPT, podem prejudicar o processamento da memória traumática e se associam a pior evolução e a dependência. Devem ser evitados de rotina; o sofrimento agudo é manejado com primeiros cuidados psicológicos, e a insônia grave, com medidas pontuais.",
    "commentary": "Evitar a retraumatização (A): recomendada — não forçar o relato detalhado (o debriefing compulsório pode piorar) e colher dados com terceiros.\n\nReasseguramento e segurança (B): recomendado — reforçar que agora a pessoa está segura, afastá-la da cena.\n\nEvitar a vitimização e não patologizar (D): recomendado — reações agudas são esperadas e não devem ser rotuladas como doença.",
    "reference": "OMS — Primeiros Cuidados Psicológicos: guia para trabalhadores de campo (2015) / NICE NG116 — Post-traumatic stress disorder",
    "tags": [
      "transtorno de estresse pós-traumático",
      "primeiros cuidados psicológicos",
      "benzodiazepínicos",
      "trauma"
    ],
    "tip": "Após trauma: segurança e acolhimento; benzodiazepínico de rotina não previne TEPT."
  },
  {
    "id": "amrigs2025-100",
    "module": "Clínica Médica",
    "text": "O uso de lítio é a terapia mais eficaz nos transtornos do humor. Tem eficácia reconhecida contra depressão e mania, além de ter ação antissuicida em longo prazo em pacientes com transtorno bipolar. No entanto, a medicação apresenta janela terapêutica estreita, exigindo maior atenção e monitoramento das interações medicamentosas para prevenir quadros de intoxicação. Qual das medicações abaixo NÃO causa elevação dos níveis séricos de lítio?",
    "options": [
      "Propranolol.",
      "Enalapril.",
      "Nimesulida.",
      "Hidroclorotiazida."
    ],
    "correctAnswer": 0,
    "explanation": "O lítio é excretado pelo rim e reabsorvido junto com o sódio no túbulo proximal. Fármacos que reduzem a depuração renal de lítio elevam seu nível: diuréticos tiazídicos, IECA e BRA e anti-inflamatórios não esteroidais (inclusive a nimesulida). O propranolol não altera significativamente a litemia — e, inclusive, é usado para tratar o tremor induzido por lítio.",
    "commentary": "Enalapril (B): IECA reduz a depuração de lítio e pode causar intoxicação.\n\nNimesulida (C): AINE reduz a filtração e a excreção de lítio.\n\nHidroclorotiazida (D): o tiazídico aumenta a reabsorção proximal de sódio e de lítio, elevando a litemia em 25–40%.",
    "reference": "Kaplan & Sadock — Compêndio de Psiquiatria / Maudsley Prescribing Guidelines in Psychiatry",
    "tags": [
      "lítio",
      "interações medicamentosas",
      "intoxicação por lítio",
      "transtorno bipolar"
    ],
    "tip": "Elevam o lítio: tiazídico, IECA/BRA, AINE e desidratação."
  }
];
