<template>
  <YGalleryCardFront class="grid grid-rows-3 cursor-pointer">
    <YGradientOnHover />
    <div v-if="project.highlight" class="absolute top-0.5 left-2 text-orange-300">
      {{ HighlightSymbol }}
    </div>
    <PortfolioFrontYear :year="project.year" />
    <PortfolioFrontLogo :src="project.img" :alt="project.title" />
    <PortfolioFrontTitle :title="project.title" :category="project.category" :year="project.year" />
  </YGalleryCardFront>
</template>

<script setup lang="ts">
import { HighlightSymbol, Project } from '/@/types/portfolio'

defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
