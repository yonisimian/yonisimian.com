<template>
  <h2 class="text-center text-2xl sm:text-3xl mb-1 sm:mb-2">
    {{ activeCollection.name }}
  </h2>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { activeCollection } = useTripState()
</script>

<style scoped>
h2 {
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #e60073, 0 0 4px #e60073, 0 0 5px #e60073,
    0 0 6px #e60073, 0 0 7px #e60073;
}
</style>
