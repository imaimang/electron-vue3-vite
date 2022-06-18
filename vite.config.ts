import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'publish/vue/',
    emptyOutDir: true
  },
})
