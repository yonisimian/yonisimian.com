<template>
  <iframe class="py-4 w-full min-h-xs xl:min-h-sm h-full" :src="link" allowfullscreen></iframe>
</template>

<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<style scoped></style>
