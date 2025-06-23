<template>
  <div class="flex flex-col items-center justify-center gap-2 p-4 w-full max-w-3xl">
    <h1 class="text-4xl font-bold">The Big Trip</h1>
    <!-- <h2 class="text-lg">Scenes from a Memory</h2> -->
    <div class="w-full flex items-center justify-center text-sm text-gray-400">
      <h3 @click="customSlides = CustomSlidesType.Highlights">highlights</h3>
      <p class="mx-2">•</p>
      <h3 @click="customSlides = CustomSlidesType.Music">music</h3>
      <p class="mx-2">•</p>
      <h3 @click="customSlides = CustomSlidesType.People">people</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CustomSlidesType } from '/@/types/trip'
import { useTripState } from '/@/composables/useTripState'

const { customSlides } = useTripState()
</script>

<style scoped>
h3 {
  cursor: pointer;
}
h3:hover {
  color: rgb(209, 213, 219); /* Tailwind's gray-300 */
}
</style>
