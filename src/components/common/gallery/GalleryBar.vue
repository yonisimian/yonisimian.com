<template>
  <section
    class="flex flex-col justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 text-xs"
  >
    <GalleryBarSearch :filterSearch="filterSearch" />
    <GalleryBarBadges
      :selectedCategories="selectedCategories"
      :toggleCategory="toggleCategory"
      :toggleHighlights="toggleHighlights"
      :isHighlightsSelected="isHighlightsSelected"
    />
  </section>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/portfolio'

defineProps<{
  selectedCategories: ProjectCategory[]
  toggleCategory: (category: ProjectCategory) => void
  filterSearch: (filter: string) => void
  toggleHighlights: () => void
  isHighlightsSelected: boolean
}>()
</script>

<style scoped>
@media (min-width: 432px) {
  section {
    @apply text-base;
  }
}
@media (min-width: 684px) {
  section {
    @apply flex-row;
  }
}
</style>
