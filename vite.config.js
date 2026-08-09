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
    {
      name: 'html-seo-plugin',
      transformIndexHtml(html) {
        return html
          .replace(
            /<title>(.*?)<\/title>/,
            `<title>Portofolio ReverseAll | Web Developer Modern</title>`
          )
          .replace(
            '</head>',
            `<meta name="description" content="Selamat datang di portofolio resmi ReverseAll. Pengembang aplikasi web dengan keahlian React, Vite, Laravel, dan teknologi modern." />
            </head>`
          )
      }
    }
  ],
})
