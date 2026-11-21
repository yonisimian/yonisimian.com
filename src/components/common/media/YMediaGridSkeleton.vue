<template>
  <YMediaGrid :items="placeholders" class="animate-pulse opacity-50" aria-hidden="true">
    <div class="w-full h-full bg-gray-300 dark:bg-gray-700" />
  </YMediaGrid>
</template>

<script setup lang="ts">
const ratios = [
  1.5, 0.75, 1.33, 1, 1.78, 0.66, 1.5, 1.33, 0.75, 1.5, 1, 1.78, 0.75, 1.33, 1.5, 0.66
]
const placeholders = ratios.map((ratio) => ({ ratio }))
</script>
