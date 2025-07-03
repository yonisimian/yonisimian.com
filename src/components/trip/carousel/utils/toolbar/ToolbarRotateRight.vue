<template>
  <ToolbarIcon @click="rotateRight" fill="none">
    <path
      d="M14.8899 5.0799C14.0199 4.8199 13.0599 4.6499 12 4.6499C7.20992 4.6499 3.32992 8.5299 3.32992 13.3199C3.32992 18.1099 7.20992 21.9899 12 21.9899C16.79 21.9899 20.67 18.1099 20.67 13.3199C20.67 11.5399 20.13 9.8799 19.21 8.4999"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1299 5.32L13.2399 2"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1299 5.32007L12.7599 7.78007"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </ToolbarIcon>
</template>

<script setup lang="ts">
defineProps<{
  rotateRight: () => void
}>()
</script>

<style scoped></style>
