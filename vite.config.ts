import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unfonts from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'
import { visualizer } from 'rollup-plugin-visualizer'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    svgLoader(),
    Unocss(),
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    Unfonts({
      google: {
        families: [
          {
            name: 'Open Sans',
            styles: 'wght@400;700'
          },
          {
            name: 'Montserrat',
            styles: 'wght@400;700'
          },
          {
            name: 'Fira Sans',
            styles: 'wght@400;700'
          }
        ]
      }
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: true, // auto-open in browser after build
      gzipSize: true,
      brotliSize: true
    }),
    Sitemap({
      hostname: 'https://yonisimian.com',
      dynamicRoutes: ['/', '/portfolio', '/trip', '/cookbook'],
      robots: [{ userAgent: '*', disallow: '/media/' }]
    })
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core'],
    exclude: ['vue-demi']
  }
})
