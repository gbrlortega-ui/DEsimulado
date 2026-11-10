import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // O banco de questões é um arquivo grande de propósito, baixado em segundo plano (src/data/banco.ts).
    chunkSizeWarningLimit: 3000,
  },
});
