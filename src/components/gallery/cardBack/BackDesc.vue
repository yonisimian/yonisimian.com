<template>
  <p class="text-justify max-w-4xl">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<style scoped></style>
