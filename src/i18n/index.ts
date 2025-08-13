import { createI18n } from 'vue-i18n'
import enMessages from '/@/i18n/locales/en.json'
import heMessages from '/@/i18n/locales/he.json'

export const supportedLanguages = ['en', 'he'] as const

export const isSupportedLanguage = (lang: any): lang is Language => {
  return supportedLanguages.includes(lang as Language)
}

export type Language = (typeof supportedLanguages)[number]

export const DEFAULT_LANGUAGE: Language = 'en'

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
