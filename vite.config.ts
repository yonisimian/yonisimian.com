import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import svgLoader from 'vite-svg-loader'
import Sitemap from 'vite-plugin-sitemap'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL('./src', import.meta.url))
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
    visualizer({
      filename: 'dist/stats.html',
      open: true, // auto-open in browser after build
      gzipSize: true,
      brotliSize: true
    }),
    Sitemap({
      hostname: 'https://yonisimian.com',
      robots: [{ userAgent: '*', disallow: '/media/' }]
    })
  ]
})
