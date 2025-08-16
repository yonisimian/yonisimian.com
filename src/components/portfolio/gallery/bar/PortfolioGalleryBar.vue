<template>
  <section
    class="flex flex-col justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 text-xs"
  >
    <YSearchInput :filterSearch placeholder="Search Projects..." />
    <div class="flex flex-wrap gap-2 justify-between">
      <PortfolioGalleryBarBadge
        :text="HighlightSymbol"
        :toggleCategory="toggleHighlights"
        :isSelected="isHighlightsSelected"
        class="text-orange-300"
        title="Toggle highlighted projects"
      />
      <PortfolioGalleryBarBadge
        v-for="category in ProjectCategory"
        :key="category"
        :text="category"
        :toggleCategory="() => toggleCategory(category)"
        :isSelected="selectedCategories.includes(category)"
        :title="`Toggle ${category} projects`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ProjectCategory, HighlightSymbol } from '/@/types/portfolio'

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
