<template>
  <div class="flex items-center justify-between text-nowrap">
    <span class="text-gray-600 dark:text-gray-400 font-medium">{{ title }}</span>
    <span class="text-gray-900 dark:text-gray-100 capitalize">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string
}>()
</script>

<style scoped></style>
