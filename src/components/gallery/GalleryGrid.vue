<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 sm:gap-10">
    <TransitionGroup name="backCard">
      <GalleryCard v-for="(project, index) in projects" :key="index" :project="project" />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped></style>
