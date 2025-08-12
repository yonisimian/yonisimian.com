<template>
  <div class="w-full m-auto">
    <div class="relative">
      <span
        class="i-ph-magnifying-glass-duotone text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 text-xl"
      />
      <input
        type="text"
        :value="activeSearch"
        @input="updateSearch(($event.target as HTMLInputElement).value)"
        placeholder="e.g., Strawberry, Tomato, Basil..."
        class="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVegetaState } from '/@/composables/useVegetaState'

const { activeSearch, updateSearch } = useVegetaState()
</script>

<style scoped></style>
