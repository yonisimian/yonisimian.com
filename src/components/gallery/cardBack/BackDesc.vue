<template>
  <p class="py-1">
    {{ description }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<style scoped></style>
