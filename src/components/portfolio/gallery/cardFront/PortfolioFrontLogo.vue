<template>
  <div class="row-span-2 flex justify-center items-center">
    <img class="px-4 pt-4 max-h-44 z-5" :src="`/media/portfolio/projects/${src}.webp`" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<style scoped></style>
