<template>
  <div class="flex flex-wrap gap-2">
    <GalleryFilterBadge
      v-for="category in ProjectCategory"
      :key="category"
      :category="category"
      :toggleCategory="() => toggleCategory(category)"
      :isSelected="selectedCategories.includes(category)"
    />
  </div>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/types'

defineProps<{
  selectedCategories: ProjectCategory[]
  toggleCategory: (category: ProjectCategory) => void
}>()
</script>

<style scoped></style>
