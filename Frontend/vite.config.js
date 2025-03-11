import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {     // adding proxy 
    proxy: {
      '/api' : 'http://locahost:3000',
    }
  },
  plugins: [react()],
})
