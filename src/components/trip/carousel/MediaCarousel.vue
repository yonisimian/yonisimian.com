<template>
  <CarouselFullscreenWrapper>
    <div
      class="w-full h-full"
      :class="fullscreen ? 'grid grid-rows-[min-content_1fr_min-content]' : 'grid grid-rows-1'"
    >
      <CarouselInfo v-if="fullscreen" class="px-1" />
      <CarouselGalleryWrapper />
      <StepNavigationButtons v-if="fullscreen && !collection" class="px-1" />
    </div>
  </CarouselFullscreenWrapper>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, slide, fullscreen, collection } = useTripState()

// reset slide when step changes or entering custom slides mode
watch([currStep, collection], () => (slide.value = 0))
</script>

<style scoped></style>
