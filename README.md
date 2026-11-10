# DEsimulados

Simulados gratuitos para estudantes de Medicina, com questões comentadas do Teste de Progresso e do
ENAMED, sem cadastro: https://www.desimulados.com.br

React 19 + Vite + TypeScript + Tailwind. Não há backend: as questões ficam em `src/data/`.

## Rodar localmente

Requer Node.js 22.

```bash
npm install
npm run dev      # http://localhost:3000
npm run check    # tipos + validação do banco + build (rodar antes de todo push)
```

Convenções do banco de questões, imagens e fluxo de publicação estão no [CLAUDE.md](CLAUDE.md).
O deploy na Vercel é automático a cada push na `main`.
