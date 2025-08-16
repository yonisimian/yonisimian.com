<template>
  <YGalleryCardBack @click="discard">
    <CookbookBackCard @click.stop class="relative">
      <YCloseButton @click="discard" />
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
  </YGalleryCardBack>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { Recipe } from '/@/types/cookbook'
import { useFreezeScroll } from '/@/composables/useFreezeScroll'

defineProps<{
  recipe: Recipe
  discard: () => void
}>()

const { freezeScroll, unfreezeScroll } = useFreezeScroll()

onMounted(freezeScroll)
onBeforeUnmount(unfreezeScroll)
</script>

<style scoped></style>
