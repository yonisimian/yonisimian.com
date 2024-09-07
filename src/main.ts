import { initializeApp } from '/@/init'

import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'aos/dist/aos.css'

import App from './App.vue'
import './styles/base.css'

initializeApp().then(() => {
  const app = createApp(App)

  app.mount('#app')
})
