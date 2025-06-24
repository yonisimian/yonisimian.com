import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { resolve } from 'pathe'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import FontInstaller from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '/@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    svgLoader(),
    // https://github.com/antfu/vite-plugin-components
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
