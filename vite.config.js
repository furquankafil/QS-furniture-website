import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 8000,
    strictPort: true,
    host: true
  },
  preview: {
    port: 8000,
    strictPort: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
})
