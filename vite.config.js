import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Adjust "base" for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/'
})
