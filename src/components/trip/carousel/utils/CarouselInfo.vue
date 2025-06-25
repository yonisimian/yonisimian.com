<template>
  <div class="grid grid-cols-3 items-center w-full">
    <p class="text-left">{{ activeCollection.stepslides[slide].step.date }}</p>
    <p class="text-center">
      slide {{ activeCollection.stepslides.length ? slide + 1 : 0 }} /
      {{ activeCollection.stepslides.length }}
    </p>
    <p class="text-right">
      {{ activeCollection.stepslides[slide].step.shortName }},
      {{ getCountryByStep(activeCollection.stepslides[slide].step).name }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { getCountryByStep } from '/@/data/trip'
import { useTripState } from '/@/composables/useTripState'

const { activeCollection, slide } = useTripState()
</script>
