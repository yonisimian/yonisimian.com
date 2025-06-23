<template>
  <CookbookFrontCard data-aos="fade-zoom-in">
    <CookbookFrontTitle :title="recipe.title" />
  </CookbookFrontCard>
</template>

<script setup lang="ts">
import { Recipe } from '/@/types/cookbook'

defineProps<{
  recipe: Recipe
}>()
</script>

<style scoped></style>
