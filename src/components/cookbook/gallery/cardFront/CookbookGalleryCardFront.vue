<template>
  <YGalleryCardFront class="aspect-square cursor-pointer">
    <YGradientOnHover />
    <CookbookFrontTitle :title="recipe.title" />
  </YGalleryCardFront>
</template>

<script setup lang="ts">
import { Recipe } from '/@/types/cookbook'

defineProps<{
  recipe: Recipe
}>()
</script>

<style scoped></style>
