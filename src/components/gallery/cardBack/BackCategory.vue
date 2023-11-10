<template>
  <p class="absolute top-4 right-4 opacity-80">
    {{ category }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  category: string
}>()
</script>

<style scoped></style>
