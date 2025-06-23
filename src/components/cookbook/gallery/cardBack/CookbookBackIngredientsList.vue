<template>
  <div class="row-span-1 text-right px-4">
    <p class="font-general-semibold text-xl dark:text-ternary-light font-semibold">
      {{ list.title }}
    </p>
    <ul class="list-disc list-inside text-right">
      <li
        v-for="(ingredient, index) in list.ingredients"
        :key="index"
        class="text-sm dark:text-ternary-light"
      >
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IngredientsList } from '/@/types/cookbook'

defineProps<{
  list: IngredientsList
}>()
</script>

<style scoped></style>
