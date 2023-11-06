<template>
  <div
    @click="toggleCategory"
    class="select-none px-2 py-2 text-sky-50 text-center rounded-full cursor-pointer glow transition-all duration-200 ease"
    :class="{
      'bg-sky-600': isSelected
    }"
  >
    {{ category }}
  </div>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/types'

defineProps<{
  isSelected: boolean
  category: ProjectCategory
  toggleCategory: () => void
}>()
</script>

<style scoped>
.glow {
  box-shadow: 0 0 1px #00d9ff, 0 0 2px #00d9ff, 0 0 3px #00d9ff, 0 0 4px #00d9ff;
}

.glow:hover {
  box-shadow: 0 0 5px #00d9ff, 0 0 6px #00d9ff, 0 0 7px #00d9ff, 0 0 8px #00d9ff;
}
</style>
