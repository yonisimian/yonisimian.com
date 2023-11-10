<template>
  <div class="row-span-1 text-center px-4 py-6">
    <p class="font-general-semibold text-xl dark:text-ternary-light font-semibold mb-2">
      {{ title }}
    </p>
    <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{
      category
    }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  category: string
}>()
</script>

<style scoped></style>
