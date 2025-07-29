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

// steps from useTripData is typically a Ref<BaseStep[]>
const { steps } = useTripData()

// currStep, activeCollection, and slide are also reactive references
// Note: We also assume useTripState now provides `currStepDetails`
// although this specific template doesn't use it yet.
const { currStep, activeCollection, slide } = useTripState()

// This computed property determines the current 'BaseStep' object
// based on the active collection/slide, or falls back to currStep.
// We now access `steps.value` because `steps` from useTripData is a Ref.
const step = computed(
  () => steps.value[activeCollection.value.stepslides[slide.value]?.step] ?? currStep.value
)

// IMPORTANT:
// This component's template does NOT currently display the lazy-loaded `description`,
// `media`, or `bgImage`. Those would come from `currStepDetails` (which should be
// provided by `useTripState`).
//
// If you were to add elements to display them, you would access them like this:
//
// // In <script setup>:
// const { currStepDetails } = useTripState() // Make sure useTripState exports this
//
// // In <template>:
// <div v-if="currStepDetails" v-html="currStepDetails.description"></div>
// <div v-if="currStepDetails?.media?.length">
//   <img v-for="(mediaItem, index) in currStepDetails.media" :key="index" :src="typeof mediaItem === 'string' ? mediaItem : mediaItem.thumbnail" />
// </div>
</script>
