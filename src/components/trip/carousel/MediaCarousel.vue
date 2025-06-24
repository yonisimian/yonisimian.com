<template>
  <CarouselFullscreenWrapper>
    <CarouselTitle v-if="fullscreen" />
    <CarouselInfo v-if="fullscreen" class="py-2" />
    <div v-if="currSlides.length">
      <CarouselGallery />
      <CarouselThumbnail v-if="!fullscreen" />
    </div>
    <CarouselEmpty v-else />
    <StepNavigationButtons v-if="fullscreen" class="mt-2" />
  </CarouselFullscreenWrapper>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currSlides, slide, fullscreen, customSlides } = useTripState()

// reset slide when step changes or entering custom slides mode
watch([() => currStep.value, () => customSlides.value], () => (slide.value = 0))
</script>

<style scoped></style>
