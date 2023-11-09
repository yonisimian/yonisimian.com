<template>
  <div
    class="grid grid-rows-3 rounded-xl bg-sky-400/5 shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 transform transition-all duration-500 hover:scale-110 dark:bg-ternary-dark"
  >
    <div class="row-span-2 flex justify-center items-center">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none px-4 pt-4 max-h-48"
      />
    </div>
    <div class="row-span-1 text-center px-4 py-6">
      <p class="font-general-semibold text-xl dark:text-ternary-light font-semibold mb-2">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{
        project.category
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'

defineProps<{
  project: Project
}>()
</script>

<style scoped></style>
