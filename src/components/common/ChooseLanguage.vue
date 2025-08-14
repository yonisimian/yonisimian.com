<template>
  <div class="language-chooser relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
    >
      <span class="text-2xl">{{ currentLanguage.flag }}</span>
      <span class="text-sm font-medium text-gray-700">{{ currentLanguage.name }}</span>
      <svg
        class="w-4 h-4 text-gray-500 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <button
        v-for="(metadata, lang) in languages"
        :key="lang"
        @click="selectLanguage(lang)"
        class="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
        :class="{ 'bg-blue-50': currLang === lang }"
      >
        <span class="text-2xl">{{ metadata.flag }}</span>
        <span class="text-sm font-medium text-gray-700">{{ metadata.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useLang } from '/@/composables/useLang'
import { Language } from '/@/i18n'

const { currLang, setLang } = useLang()

interface LanguageMetadata {
  name: string
  flag: string
}

const isOpen = ref(false)
const languages: Record<Language, LanguageMetadata> = {
  en: { name: 'English', flag: '🇺🇸' },
  he: { name: 'עברית', flag: '🇮🇱' }
}
const currentLanguage = computed(() => languages[currLang.value])

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (language: Language) => {
  isOpen.value = false
  setLang(language)
}

onMounted(() => {
  document.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement
    if (!target.closest('.language-chooser')) {
      isOpen.value = false
    }
  })
})
</script>
