# DEsimulados

Plataforma de simulados para estudantes de Medicina (Teste de Progresso e ENAMED), sem cadastro.
Site: https://www.desimulados.com.br — hospedado na Vercel (projeto `d-esimulado`), com deploy
automático a cada push na branch `main` deste repositório.

## Stack

React 19 + Vite 6 + TypeScript + Tailwind 4. Não há backend: todas as questões ficam em
`src/data/*.ts`.

**Carregamento:** o banco de questões (~2,4 MB) fica num arquivo à parte (`src/data/bancoCompleto.ts`,
carregado por `src/data/banco.ts`), baixado em segundo plano depois que a página inicial abre. As telas
iniciais usam só `src/data/resumo.ts` (contagens, simulados sugeridos e amostras), **gerado** por
`npm run gen`, que não deve ser editado à mão. Componentes de tela não devem importar `questions.ts`,
`sugeridos.ts` ou `topografiaPool.ts` direto, senão o banco volta para o arquivo principal.

## Conta opcional (Firebase)

O site funciona sem conta (histórico e simulado em andamento no `localStorage`). Quem entra com
Google sincroniza tudo no Firestore, em `alunos/{uid}` — projeto Firebase `desimulados-ferramentas`
(nome de exibição "DEsimulados"), app web "DEsimulados Web".

- `src/lib/cloud.ts`: SDK do Firebase. **Só é importado dinamicamente** (por `src/lib/account.ts`),
  para não pesar para quem não entra — nunca importe `firebase/*` em outro arquivo.
- `src/lib/account.ts`: hook `useAccount` (login, junção do histórico local com o da conta,
  envio do simulado em andamento ao esconder a aba, exclusão de conta).
- `firestore.rules`: cada aluno só lê/grava o próprio documento; o resto é fechado. Publicar com
  `npx firebase-tools deploy --only firestore,auth` (precisa de `firebase login`).
- Gravações são poucas de propósito (plano gratuito: 20 mil/dia): na entrega do simulado e ao sair
  da aba, nunca a cada clique.
- Política de privacidade: `src/components/PrivacyPolicy.tsx` — atualizar se mudar o que é salvo.

## Comandos

- `npm run dev` — servidor local (porta 3000)
- `npm run gen` — regenera `src/data/resumo.ts` (roda sozinho antes de `dev` e `build`)
- `npm run validate` — valida o banco de questões (IDs, alternativas, gabarito, imagens) e
  confere se o `resumo.ts` está em dia
- `npm run check` — tipos + validação + build. **Rodar antes de todo push.**
- `npm run imagens` — converte figuras PNG/JPG novas de `public/images` para WebP

O GitHub Actions (`.github/workflows/ci.yml`) roda o mesmo `check` em cada push e pull request.
O `vercel.json` define o cache: `/assets/*` (nomes com hash) por 1 ano; `/images/*` por 1 dia — ao
corrigir uma figura, salve com outro nome para o aluno não ver a versão antiga.

## Banco de questões

Formato em `src/types.ts` (`Question`). Convenções:

- **IDs:** `tp2026-12` (Teste de Progresso, ano, número), `enamed-2026-12` ou, para provas de
  residência, sigla + ano (`unifesp2025-12`). O rótulo da prova na tela ("ENAMED 2026", "TP 2024",
  "UNIFESP 2025") é derivado do ID — não mudar o padrão.
- **Arquivos:** questões do TP ficam no arquivo da área (`clinica.ts`, `pediatria.ts`…);
  cada edição do ENAMED tem seu arquivo (`enamed.ts` = 2025, `enamed2026.ts` = 2026),
  registrado em `src/data/questions.ts`. Provas de residência também têm arquivo próprio
  (`unifesp2025.ts`), com `module` da área de cada questão para entrarem nos simulados por área.
- **Alternativas:** o prefixo `(A) ` no texto é opcional — a interface remove e mostra a letra
  no marcador (`stripOptionLetter` em `src/lib/utils.ts`). `correctAnswer` é o índice (0 = A).
- **Quebras de linha:** use `\n\n` entre parágrafos e `• ` para listas de exames. A interface
  respeita as quebras (`whitespace-pre-line`). Tabelas do PDF viram listas
  "Exame: resultado (VR: …)".
- **Imagens:** em WebP, `public/images/<prova><ano>-<n>.webp` (ex.: `enamed2026-29.webp`),
  referenciadas como `/images/...`. Salve o recorte em PNG e rode `npm run imagens`: converte para
  WebP (qualidade 85) e atualiza as referências no banco. O validador recusa imagem que não seja
  WebP e avisa acima de 400 KB.
- **Gabarito preliminar:** quando a fonte for gabarito preliminar do INEP, dizer isso no
  `commentary`. Questões com gabarito discutível são sinalizadas no comentário, sem alterar a
  resposta oficial.
- **Simulados sugeridos:** listas fixas, feitas na ordem, em `src/data/sugeridos.ts` (cada uma
  com arquivo próprio, ex.: `sugerido_enamed1.ts`). Ficam **fora** de `QUESTIONS` para não misturar
  gabarito técnico com oficial. IDs `sug-enamed1-12`; `alert` = aviso de gabarito provisório;
  `alsoAccepted` = outras alternativas aceitas como certas; `tip` = Bizu (dica curta).
- **Simulado por topografia:** roteiro (regiões → especialidades → assuntos) em
  `src/data/topografia.ts`. Questões novas vão em `src/data/topografia_questoes.ts` com ID
  `topo-1-1-12` (especialidade 1.1, nº 12), `topography` = id da especialidade ("1.1"; regiões sem
  subdivisão usam "8") e `topic` = nome exato do assunto no roteiro. Questões do banco geral
  também entram se receberem `topography`. A especialidade sai de "Em breve" sozinha quando tem
  questões, e cada assunto vira um filtro marcável; o validador recusa topografia ou assunto
  inexistente.
- **Direitos autorais:** os gabaritos comentados oficiais (TP, consórcios) proíbem reprodução. Use-os só como
  fonte (conferir gabarito, entender o raciocínio, copiar as referências bibliográficas) e escreva explicação e
  comentário com texto próprio — nunca cole trechos. Anuladas: `annulled: true`; gabarito oficial discutível:
  marcar o oficial, aceitar a outra em `alsoAccepted` e avisar em `alert`.
- **Explicações:** `explanation` = raciocínio que leva à resposta; `commentary` = por que cada
  alternativa errada está errada (um parágrafo por alternativa, "Nome (A): …"); `tip` = Bizu; `reference` = diretriz/manual; `tags` em minúsculas, mantendo siglas (`HIV`, `SUS`) e
  nomes próprios (`doença de Crohn`) — o validador recusa tag que comece com maiúscula.

## Fluxo de alteração

1. Fazer a mudança e rodar `npm run check`. Se mexeu em questões, rodar `npm run gen` e commitar
   o `resumo.ts` junto.
2. Para mudanças de interface, conferir no navegador (`npm run build && npx vite preview`).
3. Commit em português, descrevendo o que muda para o aluno.
4. Push na `main` → a Vercel publica em ~1 minuto. Conferir o deploy.

## Identidade visual

Verde da marca `#00bf75` (`--color-primary` em `src/index.css`). Ícone: raio branco sobre o
quadrado verde (`public/favicon.svg`). O nome **DEsimulados** usa `translate="no"` para não ser
alterado pelo tradutor automático — manter isso em qualquer novo lugar onde o nome aparecer.
