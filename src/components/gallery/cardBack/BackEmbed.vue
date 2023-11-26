<template>
  <iframe class="py-4 w-full h-full" :src="link" allowfullscreen></iframe>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<style scoped></style>
