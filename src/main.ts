import { initializeApp } from '/@/init'

import { createApp } from 'vue'
import { router } from '/@/router'
import { createHead } from '@unhead/vue/client'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'aos/dist/aos.css'

import App from './App.vue'
import './assets/styles/base.css'

const headOptions = {
  init: [
    {
      title: undefined,
      titleTemplate: (title: any) => (title ? `Yehonatan Simian - ${title}` : 'Yehonatan Simian'),
      htmlAttrs: { lang: 'en' }
    }
  ]
}

initializeApp().then(() => {
  const app = createApp(App)
  const head = createHead(headOptions)
  app.use(router)
  app.use(head)
  app.mount('#app')
})
