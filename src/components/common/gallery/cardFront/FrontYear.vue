<template>
  <div v-if="year" class="absolute mt-2 left-1/2 transform -translate-x-1/2">
    <p class="font-general-medium opacity-75 text-ternary-dark dark:text-ternary-light">
      {{ year }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  year?: number
}>()
</script>

<style scoped></style>
