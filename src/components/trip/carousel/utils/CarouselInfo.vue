<template>
  <div class="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 items-center w-full">
    <p class="text-center sm:text-left">{{ step.date }}</p>
    <CarouselTitle class="text-center text-lg" />
    <p class="text-center sm:text-right">
      slide {{ activeCollection.stepslides.length ? slide + 1 : 0 }} /
      {{ activeCollection.stepslides.length }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
import { useTripData } from '/@/composables/useTripData'
import { computed } from 'vue'
import CarouselTitle from './CarouselTitle.vue'

const { steps } = useTripData()
const { currStep, activeCollection, slide } = useTripState()

// fallback is for steps without slides (which cannot appear on collections)
const step = computed(
  () => steps[activeCollection.value.stepslides[slide.value].step] ?? currStep.value
)
</script>
