<template>
  <div class="flex flex-row items-center justify-between w-full">
    <p>{{ currStep.date }}</p>
    <p>slide {{ slide + 1 }} / {{ currStep.media.length }}</p>
    <p>{{ currCountry.name }}, {{ currStep.degrees }}°c</p>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, slide } = useTripState()
</script>
