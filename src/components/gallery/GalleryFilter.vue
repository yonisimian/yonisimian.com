<template>
  <div class="flex flex-wrap gap-2 justify-between">
    <GalleryFilterBadge
      v-for="category in ProjectCategory"
      :key="category"
      :text="category"
      :toggleCategory="() => toggleCategory(category)"
      :isSelected="selectedCategories.includes(category)"
    />
    <GalleryFilterBadge
      :text="HighlightSymbol"
      :toggleCategory="toggleHighlights"
      :isSelected="isHighlightsSelected"
      :class="'text-orange-300'"
    />
  </div>
</template>

<script setup lang="ts">
import { ProjectCategory, HighlightSymbol } from '/@/types/types'

defineProps<{
  selectedCategories: ProjectCategory[]
  toggleCategory: (category: ProjectCategory) => void
  isHighlightsSelected: boolean
  toggleHighlights: () => void
}>()
</script>

<style scoped></style>
