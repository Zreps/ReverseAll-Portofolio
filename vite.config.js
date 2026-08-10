import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' 

export default defineConfig({
  plugins: [
    react(),    
    tailwind(),
    {
      name: 'html-seo-plugin',
      transformIndexHtml(html) {
        return html
          .replace(
            /<title>(.*?)<\/title>/,
            `<title>Portofolio Rep| Web Developer Modern</title>`
          )
          .replace(
            '</head>',
            `<meta name="description" content="Selamat datang di portofolio resmi Rep. Pengembang aplikasi web dengan keahlian React, Vite, Laravel, dan teknologi modern." />
            </head>`
          )
      }
    }
  ],
})
