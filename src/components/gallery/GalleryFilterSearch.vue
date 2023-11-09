<template>
  <section
    class="flex flex-col sm:flex-row justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3"
  >
    <GallerySearch :filterSearch="filterSearch" />
    <GalleryFilter :selectedCategories="selectedCategories" :toggleCategory="toggleCategory" />
  </section>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/types'

defineProps<{
  selectedCategories: ProjectCategory[]
  toggleCategory: (category: ProjectCategory) => void
  filterSearch: (filter: string) => void
}>()
</script>

<style scoped></style>
