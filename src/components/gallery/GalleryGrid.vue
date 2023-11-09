<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 sm:gap-10">
    <TransitionGroup name="slide">
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

<style scoped>
.slide-enter-from {
  opacity: 0;
  rotate: 240deg;
}
.slide-enter-to {
  opacity: 1;
  translate: 0 0;
  rotate: 0deg;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-leave-from {
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
  rotate: 240deg;
}
</style>
