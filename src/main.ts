import { initializeApp } from '/@/init'

import { createApp } from 'vue'
import { router } from '/@/router'
import { createHead } from '@unhead/vue/client'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'aos/dist/aos.css'

import App from './App.vue'
import './styles/base.css'

initializeApp().then(() => {
  const app = createApp(App)
  const head = createHead({
    init: [
      {
        title: undefined, // This will be set dynamically in each view
        titleTemplate: (title) => (title ? `Yehonatan Simian - ${title}` : 'Yehonatan Simian'),
        htmlAttrs: { lang: 'en' }
      }
    ]
  })
  app.use(router)
  app.use(head)
  app.mount('#app')
})
