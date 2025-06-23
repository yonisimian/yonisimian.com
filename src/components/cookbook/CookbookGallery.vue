<template>
  <main class="pt-6 sm:pt-14 pb-16 min-h-[100svh]">
    <GalleryHeader>מחברת המתכונים הישנה של מיכל</GalleryHeader>
    <GallerySearchInput
      :filterSearch="(text: string) => searchRecipe = text"
      placeholder="חפש..."
    />

    <GalleryGrid :items="filteredRecipes">
      <template #CardFront="{ item, onClick }">
        <CookbookGalleryCardFront :recipe="item" @click="onClick" />
      </template>
      <template #CardBack="{ item, discard }">
        <CookbookGalleryCardBack :recipe="item" :discard="discard" />
      </template>
    </GalleryGrid>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Recipe } from '/@/types/cookbook'
import recipesData from '/@/data/cookbook'

const searchRecipe = ref('')
const recipes = ref<Recipe[]>(recipesData)

const filteredRecipes = computed(() => {
  let filtered = recipes.value
  if (searchRecipe.value) {
    filtered = filterRecipesBySearch(filtered)
  }
  return filtered
})

const filterRecipesBySearch = (recipes: Recipe[]) => {
  const recipe = new RegExp(searchRecipe.value, 'i')

  const deepSearch = (obj: any): boolean => {
    return Object.values(obj).some((value) => {
      if (typeof value === 'string') {
        return recipe.test(value)
      } else if (typeof value === 'object' && value !== null) {
        return deepSearch(value)
      }
      return false
    })
  }

  return recipes.filter((el) => deepSearch(el))
}
</script>

<style scoped></style>
