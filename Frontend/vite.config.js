import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {     // adding proxy 
    proxy: {
      '/api' : 'http://localhost:3000',
    }
  },
  plugins: [react()],
})
