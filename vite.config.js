import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // important for relative paths (or use '/' if using custom domain)
  server: {
    port: 3701, // 👈 Set your desired port here
  },
})
