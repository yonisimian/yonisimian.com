<template>
  <AnimateOnScroll>
    <CookbookFrontCard>
      <CookbookFrontTitle :title="recipe.title" />
    </CookbookFrontCard>
  </AnimateOnScroll>
</template>

<script setup lang="ts">
import { Recipe } from '/@/types/cookbook'

defineProps<{
  recipe: Recipe
}>()
</script>

<style scoped></style>
