# DEsimulados

Plataforma de simulados para estudantes de Medicina (Teste de Progresso e ENAMED), sem cadastro.
Site: https://www.desimulados.com.br — hospedado na Vercel (projeto `d-esimulado`), com deploy
automático a cada push na branch `main` deste repositório.

## Stack

React 19 + Vite 6 + TypeScript + Tailwind 4. Não há backend: todas as questões ficam em
`src/data/*.ts` e são empacotadas no bundle.

## Comandos

- `npm run dev` — servidor local (porta 3000)
- `npm run validate` — valida o banco de questões (IDs, alternativas, gabarito, imagens)
- `npm run check` — tipos + validação + build. **Rodar antes de todo push.**

O GitHub Actions (`.github/workflows/ci.yml`) roda o mesmo `check` em cada push e pull request.

## Banco de questões

Formato em `src/types.ts` (`Question`). Convenções:

- **IDs:** `tp2026-12` (Teste de Progresso, ano, número) ou `enamed-2026-12`. O rótulo da prova
  na tela ("ENAMED 2026", "TP 2024") é derivado do ID — não mudar o padrão.
- **Arquivos:** questões do TP ficam no arquivo da área (`clinica.ts`, `pediatria.ts`…);
  cada edição do ENAMED tem seu arquivo (`enamed.ts` = 2025, `enamed2026.ts` = 2026),
  registrado em `src/data/questions.ts`.
- **Alternativas:** o prefixo `(A) ` no texto é opcional — a interface remove e mostra a letra
  no marcador (`stripOptionLetter` em `src/lib/utils.ts`). `correctAnswer` é o índice (0 = A).
- **Quebras de linha:** use `\n\n` entre parágrafos e `• ` para listas de exames. A interface
  respeita as quebras (`whitespace-pre-line`). Tabelas do PDF viram listas
  "Exame: resultado (VR: …)".
- **Imagens:** `public/images/<prova><ano>-<n>.PNG` (ex.: `enamed2026-29.PNG`), referenciadas
  como `/images/...`. Comprimir antes de commitar (alvo < 400 KB).
- **Gabarito preliminar:** quando a fonte for gabarito preliminar do INEP, dizer isso no
  `commentary`. Questões com gabarito discutível são sinalizadas no comentário, sem alterar a
  resposta oficial.
- **Simulados sugeridos:** listas fixas, feitas na ordem, em `src/data/sugeridos.ts` (cada uma
  com arquivo próprio, ex.: `sugerido_enamed1.ts`). Ficam **fora** de `QUESTIONS` para não misturar
  gabarito técnico com oficial. IDs `sug-enamed1-12`; `alert` = aviso de gabarito provisório;
  `alsoAccepted` = outras alternativas aceitas como certas; `tip` = Bizu (dica curta).
- **Explicações:** `explanation` = raciocínio que leva à resposta; `commentary` = por que as
  outras alternativas estão erradas; `reference` = diretriz/manual; `tags` em minúsculas.

## Fluxo de alteração

1. Fazer a mudança e rodar `npm run check`.
2. Para mudanças de interface, conferir no navegador (`npm run build && npx vite preview`).
3. Commit em português, descrevendo o que muda para o aluno.
4. Push na `main` → a Vercel publica em ~1 minuto. Conferir o deploy.

## Identidade visual

Verde da marca `#00bf75` (`--color-primary` em `src/index.css`). Ícone: raio branco sobre o
quadrado verde (`public/favicon.svg`). O nome **DEsimulados** usa `translate="no"` para não ser
alterado pelo tradutor automático — manter isso em qualquer novo lugar onde o nome aparecer.
