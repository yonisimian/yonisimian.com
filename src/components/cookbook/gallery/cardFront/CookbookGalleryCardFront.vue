<template>
  <GalleryCardFront class="aspect-square cursor-pointer">
    <GradientOnHover />
    <CookbookFrontTitle :title="recipe.title" />
  </GalleryCardFront>
</template>

<script setup lang="ts">
import { Recipe } from '/@/types/cookbook'

defineProps<{
  recipe: Recipe
}>()
</script>

<style scoped></style>
