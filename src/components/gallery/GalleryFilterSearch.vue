<template>
  <section
    data-aos="fade-up"
    data-aos-once="true"
    class="flex flex-col justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 text-xs"
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

<style scoped>
@media (min-width: 400px) {
  section {
    @apply text-base;
  }
}
@media (min-width: 596px) {
  section {
    @apply flex-row;
  }
}
</style>
