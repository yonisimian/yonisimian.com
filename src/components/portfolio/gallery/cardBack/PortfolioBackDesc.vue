<template>
  <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-justify pb-2 max-w-4xl">
    {{ paragraph }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string
}>()

const paragraphs = props.description.split(/\s*\n\s*\n\s*/)
</script>

<style scoped></style>
