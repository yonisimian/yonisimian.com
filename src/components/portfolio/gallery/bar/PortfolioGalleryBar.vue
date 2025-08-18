<template>
  <section
    class="w-full h-full flex flex-col justify-between items-center border-b pb-3 gap-2 text-xs"
  >
    <YSearchInput
      :filterSearch
      placeholder="Search Projects..."
      class="w-full h-full min-w-[204px]"
    />
    <div class="w-full h-full flex flex-row justify-between items-center gap-2">
      <YToggleBadge
        :active="isHighlightsSelected"
        :toggle="toggleHighlights"
        title="Toggle highlighted projects"
        class="h-full min-w-[38px] glow"
      >
        <span class="text-orange-300">{{ HighlightSymbol }}</span>
      </YToggleBadge>
      <YToggleBadge
        v-for="category in ProjectCategory"
        :key="category"
        :active="selectedCategories.includes(category)"
        :toggle="() => toggleCategory(category)"
        :title="`Toggle ${category.toLocaleLowerCase()} projects`"
        class="w-full h-full glow"
      >
        {{ category }}
      </YToggleBadge>
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
@media (min-width: 721px) {
  section {
    @apply flex-row;
  }
}
</style>
