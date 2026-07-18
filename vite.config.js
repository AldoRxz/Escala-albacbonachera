import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        libros: resolve(import.meta.dirname, 'libros/index.html'),
        boveda: resolve(import.meta.dirname, 'libros/la-boveda-en-el-cielo/index.html'),
        conjura: resolve(import.meta.dirname, 'libros/la-conjura-errante/index.html'),
        faq: resolve(import.meta.dirname, 'faq/index.html'),
      },
    },
  },
})
