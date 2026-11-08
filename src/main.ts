import { createApp } from 'vue'
import { router } from '/@/router'
import { createHead } from '@unhead/vue/client'
import '@unocss/reset/tailwind.css'
import 'uno.css'

import App from './App.vue'
import './assets/styles/base.css'
import { VegetavailableRoute } from '/@/data/globals'
import { DEFAULT_LANGUAGE, isSupportedLanguage } from '/@/i18n/index'

const headOptions = {
  init: [
    {
      title: undefined,
      titleTemplate: (title: any) => (title ? `Yehonatan Simian - ${title}` : 'Yehonatan Simian'),
      htmlAttrs: { lang: 'en' }
    }
  ]
}

const app = createApp(App).use(router).use(createHead(headOptions))

// vue-i18n is only used by one page, so keep it out of the main bundle
let isI18nInstalled = false
router.beforeEach(async (to) => {
  if (to.path !== `/${VegetavailableRoute}`) return
  const { i18n } = await import('/@/i18n/plugin')
  if (!isI18nInstalled) {
    app.use(i18n)
    isI18nInstalled = true
  }
  const { lang } = to.query
  i18n.global.locale.value = isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE
})

app.mount('#app')
