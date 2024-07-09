import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 23027,
  },
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      wailsjs: path.resolve(__dirname, 'wailsjs'),
    },
  },
})
