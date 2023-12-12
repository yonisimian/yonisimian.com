<template>
  <p class="text-justify mr-auto max-w-4xl">
    <span>
      <b>{{ title }}:</b>
      {{ desc }}
    </span>
  </p>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<style scoped></style>
