<template>
  <router-link
    to="/projects/single-project"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
    aria-label="Single Project"
  >
    <div>
      <img :src="project.img" :alt="project.title" class="rounded-t-xl border-none" />
    </div>
    <div class="text-center px-4 py-6">
      <p class="font-general-semibold text-xl font-semibold mb-2">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg">{{ project.category }}</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'

defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
