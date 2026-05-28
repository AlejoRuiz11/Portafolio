import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    extensions: ['.jsx', '.js', '.mjs', '.ts', '.tsx', '.json'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: false,
  }
})
