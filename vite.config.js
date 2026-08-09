import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' 
import prerender from '@mr-hope/vite-plugin-prerender' 

export default defineConfig({
  plugins: [
    react(),    
    tailwind(),
    prerender({
      routes: ['/'], s
    }),
  ],
})
