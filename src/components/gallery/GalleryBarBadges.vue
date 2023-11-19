<template>
  <div class="flex flex-wrap gap-2 justify-between">
    <GalleryBarBadge
      :text="HighlightSymbol"
      :toggleCategory="toggleHighlights"
      :isSelected="isHighlightsSelected"
      :class="'text-orange-300'"
    />
    <GalleryBarBadge
      v-for="category in ProjectCategory"
      :key="category"
      :text="category"
      :toggleCategory="() => toggleCategory(category)"
      :isSelected="selectedCategories.includes(category)"
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
