import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import FontInstaller from 'unplugin-fonts/vite'
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
    Components({
      extensions: ['vue'],
      dts: 'src/components.d.ts'
    }),
    // Replace ViteFonts with FontInstaller
    FontInstaller({
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
    Unocss({
      /* options */
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
  },

  build: {
    // optional: force build to analyze all chunks
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
