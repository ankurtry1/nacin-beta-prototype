import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  base: '/nacin-beta-prototype/',
  server: {
    port: 5173,
    strictPort: true,
    host: true
  }
})
