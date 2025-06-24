<template>
  <h2 class="text-3xl my-4">{{ currStep.name }}</h2>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { currStep } = useTripState()
</script>

<style scoped>
h2 {
  text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #e60073, 0 0 4px #e60073, 0 0 5px #e60073,
    0 0 6px #e60073, 0 0 7px #e60073;
}
</style>
