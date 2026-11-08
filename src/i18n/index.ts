const supportedLanguages = ['en', 'he'] as const

export const isSupportedLanguage = (lang: any): lang is Language => {
  return supportedLanguages.includes(lang as Language)
}

export type Language = (typeof supportedLanguages)[number]

export const DEFAULT_LANGUAGE: Language = 'en'
