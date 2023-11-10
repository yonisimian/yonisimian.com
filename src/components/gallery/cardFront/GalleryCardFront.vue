<template>
  <FrontCard>
    <FrontLogo :src="project.img" :alt="project.title" />
    <FrontTitle :title="project.title" :category="project.category" />
  </FrontCard>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'

defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
