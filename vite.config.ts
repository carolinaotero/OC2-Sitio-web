import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    {
      name: 'admin-static',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin/' || req.url === '/admin') {
            const adminHtml = path.resolve(__dirname, 'public/admin/index.html')
            res.setHeader('Content-Type', 'text/html')
            res.end(fs.readFileSync(adminHtml))
          } else {
            next()
          }
        })
      },
    },
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
