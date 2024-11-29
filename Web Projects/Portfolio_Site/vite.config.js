import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/files': 'http://localhost:3000', // Proxy API calls to the backend
    },
  },
})
