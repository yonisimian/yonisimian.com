<template>
  <div class="grid grid-cols-3 items-center w-full">
    <p class="text-left">{{ step.date }}</p>
    <p class="text-center">
      slide {{ activeCollection.stepslides.length ? slide + 1 : 0 }} /
      {{ activeCollection.stepslides.length }}
    </p>
    <p class="text-right">{{ step.shortName }}, {{ getCountryByStep(step).name }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCountryByStep } from '/@/functions/trip'
import { useTripState } from '/@/composables/useTripState'
import { computed } from 'vue'

const { currStep, activeCollection, slide } = useTripState()

// fallback is for steps without slides (which cannot appear on collections)
const step = computed(() => activeCollection.value.stepslides[slide.value]?.step ?? currStep.value)
</script>
