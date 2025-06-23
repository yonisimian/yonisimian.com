<template>
  <p class="pt-1 pb-4 mt-auto text-left w-full max-w-4xl">
    <b>Links: </b>
    <span v-for="(link, index) in links" :key="index">
      <a :href="link.url" target="_blank" rel="noopener">
        {{ link.title }}
      </a>
      <span v-if="index < links.length - 1">, </span>
    </span>
  </p>
</template>

<script setup lang="ts">
import { ProjectLink } from '/@/types/portfolio'

defineProps<{
  links: ProjectLink[]
}>()
</script>

<style scoped></style>
