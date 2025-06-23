<template>
  <div class="absolute top-5 left-5 z-[-5] opacity-15 blur-sm">
    <img :src="src" :alt="alt" class="h-[40vh] max-w-[40vw] object-contain" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<style scoped></style>
