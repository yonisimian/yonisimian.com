<template>
  <p class="pt-1 pb-3 mt-auto text-left w-full max-w-4xl">
    links:
    <span v-for="(link, index) in links" :key="index">
      <a :href="link.url" target="_blank" rel="noopener" class="text-blue-500 hover:text-blue-700">
        {{ link.title }}
      </a>
      <span v-if="index < links.length - 1">, </span>
    </span>
  </p>
</template>

<script setup lang="ts">
import { ProjectLink } from '/@/types/types'

defineProps<{
  links: ProjectLink[]
}>()
</script>

<style scoped></style>
