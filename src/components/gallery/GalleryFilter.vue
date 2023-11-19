<template>
  <div class="flex flex-wrap gap-2 justify-between">
    <GalleryFilterBadge
      v-for="category in ProjectCategory"
      :key="category"
      :category="category"
      :toggleCategory="() => toggleCategory(category)"
      :isSelected="selectedCategories.includes(category)"
    />
    <GalleryFilterBadge
      :category="'★'"
      :toggleCategory="toggleHighlights"
      :isSelected="isHighlightsSelected"
      :class="'text-orange-300'"
    />
  </div>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/types'

defineProps<{
  selectedCategories: ProjectCategory[]
  toggleCategory: (category: ProjectCategory) => void
  isHighlightsSelected: boolean
  toggleHighlights: () => void
}>()
</script>

<style scoped></style>
