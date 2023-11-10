<template>
  <div>
    <GalleryCardBack v-if="isChosen" :discard="() => (isChosen = false)" :project="project" />
    <GalleryCardFront @click="isChosen = true" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'
import { ref } from 'vue'

defineProps<{
  project: Project
}>()

const isChosen = ref(false)
</script>

<style scoped></style>
