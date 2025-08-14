<template>
  <div class="w-full m-auto">
    <div class="relative">
      <span
        class="i-ph-magnifying-glass-duotone text-gray-400 absolute top-1/2 -translate-y-1/2 text-xl"
        :class="currDir === 'rtl' ? 'right-4' : 'left-4'"
      />
      <input
        type="text"
        :value="activeSearch"
        @input="updateSearch(($event.target as HTMLInputElement).value)"
        :placeholder="$t('veg.searchPlaceholder')"
        class="w-full py-2 border border-gray-300 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        :class="[
          currDir === 'rtl' ? 'pr-12' : 'pl-12',
          activeSearch
            ? currDir === 'rtl'
              ? 'pl-12'
              : 'pr-12'
            : currDir === 'rtl'
            ? 'pl-4'
            : 'pr-4'
        ]"
      />
      <button
        v-if="activeSearch"
        @click="clearSearch"
        class="absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        :class="currDir === 'rtl' ? 'left-4' : 'right-4'"
        type="button"
      >
        <span class="i-ph-x text-lg" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVegetaState } from '/@/composables/useVegetaState'
import { useLang } from '/@/composables/useLang'

const { activeSearch, updateSearch } = useVegetaState()
const { currDir } = useLang()

const clearSearch = () => {
  updateSearch('')
}
</script>

<style scoped></style>
