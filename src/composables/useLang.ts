import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'
import { DEFAULT_LANGUAGE, isSupportedLanguage, type Language } from '/@/i18n/index'

export const useLang = () => {
  const QUERY_PARAM = 'lang'

  const currLang = useQueryParam<Language>(QUERY_PARAM, {
    default: DEFAULT_LANGUAGE,
    parse: (value) => (isSupportedLanguage(value) ? value : DEFAULT_LANGUAGE)
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
