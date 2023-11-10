<template>
  <h2 class="text-4xl font-bold mb-4 mt-10 lg:mt-4">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped></style>
