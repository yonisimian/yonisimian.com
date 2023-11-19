<template>
  <FrontCard data-aos="fade-zoom-in">
    <div v-if="project.highlight" class="absolute top-0.5 left-2 text-orange-300">
      {{ HighlightSymbol }}
    </div>
    <FrontLogo :src="project.img" :alt="project.title" />
    <FrontTitle :title="project.title" :category="project.category" />
  </FrontCard>
</template>

<script setup lang="ts">
import { HighlightSymbol, Project } from '/@/types/types'

defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
