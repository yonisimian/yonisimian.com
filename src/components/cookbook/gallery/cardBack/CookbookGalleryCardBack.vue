<template>
  <DarkBackground />
  <CardBackBackground @click="discard">
    <CookbookBackCard @click.stop class="relative">
      <CardBackCloseButton @click="discard" />
      <CookbookBackTitle :title="recipe.title" class="self-center" />
      <CookbookBackDesc v-if="recipe.description" :description="recipe.description" />
      <CookbookBackIngredientsList
        v-for="list in recipe.ingredients"
        :key="list.title"
        :list="list"
      />
      <CookbookBackSteps v-if="recipe.steps" :steps="recipe.steps" />
      <CookbookBackNotes v-if="recipe.notes" :notes="recipe.notes" />
    </CookbookBackCard>
  </CardBackBackground>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { Recipe } from '/@/types/cookbook'

defineProps<{
  recipe: Recipe
  discard: () => void
}>()

let scrollPosition = 0

onMounted(() => {
  // Store the scroll position
  scrollPosition = document.documentElement.scrollTop

  // Make the body unscrollable
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = `-${scrollPosition}px` // Offset the body position by the scroll position
})

onBeforeUnmount(() => {
  // Make the body scrollable again
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''

  // Restore the scroll position
  window.scrollTo(0, scrollPosition)
})
</script>

<style scoped></style>
