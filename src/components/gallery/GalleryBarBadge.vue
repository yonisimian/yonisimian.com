<template>
  <div
    @click="toggleCategory"
    class="min-w-[34px] select-none px-2 py-2 text-center rounded-full cursor-pointer border-1 border-sky-900 dark:border-[#00d9ff] glow backdrop-filter backdrop-blur-[2px] hover:backdrop-blur-[3px] transition-shadow duration-200 ease"
    :class="{
      'text-light-50 bg-sky-900 dark:bg-sky-600': isSelected
    }"
    :title="title"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { CategoryFilter } from '/@/types/types'

defineProps<{
  isSelected: boolean
  text: CategoryFilter
  title: string
  toggleCategory: () => void
}>()
</script>

<style scoped>
@media (min-width: 432px) {
  div {
    @apply min-w-[42px];
  }
}
.glow:hover {
  box-shadow: 0 0 2px #001e24;
}

.dark .glow {
  box-shadow: 0 0 1px #00d9ff, 0 0 2px #00d9ff, 0 0 3px #00d9ff, 0 0 4px #00d9ff;
}

.dark .glow:hover {
  box-shadow: 0 0 5px #00d9ff, 0 0 6px #00d9ff, 0 0 7px #00d9ff, 0 0 8px #00d9ff;
}
</style>
