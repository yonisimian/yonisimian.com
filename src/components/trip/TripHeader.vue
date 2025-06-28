<template>
  <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
    <!-- <h1 class="text-4xl font-bold">The Big Trip</h1> -->
    <TitleSeeThrough class="text-4xl" />
    <!-- <h2
      class="text-md text-center -mt-5 px-10 py-0 text-blue-gray-900"
      style="background: linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
    >
      Explore the World through My Eyes
    </h2> -->
    <div
      class="w-full flex items-center justify-center text-sm text-blue-gray-800 dark:text-blue-gray-300"
    >
      <h3 @click="collection = CollectionType.Highlights">highlights</h3>
      <p class="mx-2">•</p>
      <h3 @click="collection = CollectionType.Music">music</h3>
      <p class="mx-2">•</p>
      <h3 @click="collection = CollectionType.People">people</h3>
    </div>
  </header>
</template>

<script setup lang="ts">
import { CollectionType } from '/@/types/trip'
import { useTripState } from '/@/composables/useTripState'

const { collection } = useTripState()
</script>

<style scoped>
h3 {
  cursor: pointer;
}
h3:hover {
  color: #00b3ff; /* same as strong */
}
</style>
