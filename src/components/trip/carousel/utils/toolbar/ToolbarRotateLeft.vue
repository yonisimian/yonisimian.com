<template>
  <ToolbarIcon @click="rotateLeft" fill="none" title="Rotate Left">
    <path
      d="M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C16.7901 4.6499 20.6701 8.5299 20.6701 13.3199C20.6701 18.1099 16.7901 21.9899 12.0001 21.9899C7.21008 21.9899 3.33008 18.1099 3.33008 13.3199C3.33008 11.5399 3.87008 9.8799 4.79008 8.4999"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.87012 5.32L10.7601 2"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.87012 5.32007L11.2401 7.78007"
      stroke="#FFF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </ToolbarIcon>
</template>

<script setup lang="ts">
defineProps<{
  rotateLeft: () => void
}>()
</script>

<style scoped></style>
