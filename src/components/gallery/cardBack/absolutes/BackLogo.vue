<template>
  <div class="absolute w-[67%] top-4 left-4 z-[-5] opacity-15 blur-sm">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<style scoped></style>
