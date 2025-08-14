<template>
  <div class="language-chooser relative inline-block w-32">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-between w-full space-x-2 px-2 rounded-lg hover:bg-cyan-100 dark:hover:bg-cyan-700 transition-all"
      :class="isOpen ? '' : 'shadow-lg'"
    >
      <span class="text-xl">{{ currentLanguage.flag }}</span>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-200">
        {{ currentLanguage.name }}
      </span>
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
      class="absolute top-full w-full rounded-lg z-50 overflow-hidden shadow-lg transition-all duration-300 ease-in-out"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"
    >
      <div class="w-full h-full">
        <button
          v-for="(metadata, lang) in languages"
          :key="lang"
          @click="selectLanguage(lang)"
          class="w-full flex items-center justify-between space-x-2 px-2 py-0 text-left hover:bg-cyan-100 dark:hover:bg-cyan-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
        >
          <span class="text-xl">{{ metadata.flag }}</span>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-200">{{
            metadata.name
          }}</span>
        </button>
      </div>
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
