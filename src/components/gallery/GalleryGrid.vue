<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 sm:gap-10">
    <TransitionGroup name="backCard">
      <GalleryCard
        v-for="(project, index) in sortedProjects"
        :key="index"
        :id="`${project.title.toLowerCase().replace(/ /g, '-')}`"
        :project="project"
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Project } from '/@/types/types'

const props = defineProps<{
  projects: Project[]
}>()

const sortedProjects = computed(() =>
  props.projects.sort(
    (a: Project, b: Project) =>
      (b.year ?? Number.MIN_SAFE_INTEGER) - (a.year ?? Number.MIN_SAFE_INTEGER)
  )
)
</script>

<style scoped></style>
