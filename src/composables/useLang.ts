import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'
import { DEFAULT_LANGUAGE, i18n, isSupportedLanguage, type Language } from '/@/i18n/index'

export const useLang = () => {
  const QUERY_PARAM = 'lang'

  const currLang = useQueryParam<Language>(QUERY_PARAM, {
    default: DEFAULT_LANGUAGE,
    parse: (value) => {
      const lang: Language = (() => {
        if (!value || !isSupportedLanguage(value)) return DEFAULT_LANGUAGE
        return value as Language
      })()
      i18n.global.locale.value = lang
      return lang
    }
  })

  const setLang = (lang: Language) => {
    currLang.value = lang
  }

  const currDir = computed(() => {
    return currLang.value === 'he' ? 'rtl' : 'ltr'
  })

  return {
    currLang,
    currDir,
    setLang
  }
}
