<template>
  <div class="text-center p-4 h-full flex items-center justify-center">
    <p class="text-xl font-semibold">
      {{ title }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped></style>
