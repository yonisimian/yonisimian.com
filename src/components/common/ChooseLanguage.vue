<template>
  <div class="language-chooser relative inline-block w-24">
    <button
      @click="toggleLanguage"
      class="flex items-center justify-between w-full space-x-2 px-2 rounded-lg ring-1 ring-inset ring-gray-200/50 dark:ring-gray-700/50 sm:hover:ring-cyan-300 sm:dark:hover:ring-cyan-600 sm:hover:bg-cyan-50 sm:dark:hover:bg-cyan-900/30 transition-all duration-200"
    >
      <span class="text-xl">{{ otherLanguage.flag }}</span>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ otherLanguage.name }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLang } from '/@/composables/useLang'
import { Language } from '/@/i18n'

const { currLang, setLang } = useLang()

interface LanguageMetadata {
  name: string
  flag: string
}

const languages: Record<Language, LanguageMetadata> = {
  en: { name: 'English', flag: '🇺🇸' },
  he: { name: 'עברית', flag: '🇮🇱' }
}
const otherLanguage = computed(() => languages[currLang.value === 'en' ? 'he' : 'en'])

const toggleLanguage = () => {
  setLang(currLang.value === 'en' ? 'he' : 'en')
}
</script>
