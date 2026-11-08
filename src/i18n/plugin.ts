import { createI18n } from 'vue-i18n'
import enMessages from '/@/i18n/locales/en.json'
import heMessages from '/@/i18n/locales/he.json'
import { DEFAULT_LANGUAGE, type Language } from '/@/i18n/index'

const messages: Record<Language, Record<string, any>> = {
  en: enMessages,
  he: heMessages
}

export const i18n = createI18n({
  legacy: false, // use Composition API
  locale: DEFAULT_LANGUAGE, // initial locale
  fallbackLocale: DEFAULT_LANGUAGE,
  messages
})
