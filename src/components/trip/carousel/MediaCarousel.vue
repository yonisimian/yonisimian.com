<template>
  <CarouselFullscreenWrapper>
    <CarouselTitle v-if="fullscreen" />
    <CarouselInfo v-if="fullscreen" class="px-2 xl:px-0" />
    <div v-if="activeCollection.stepslides.length" class="w-full">
      <CarouselGallery class="w-full" />
      <CarouselThumbnail v-if="!fullscreen" />
    </div>
    <CarouselEmpty v-else />
    <StepNavigationButtons v-if="fullscreen && !collection" class="px-2 xl:px-0" />
  </CarouselFullscreenWrapper>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, activeCollection, slide, fullscreen, collection } = useTripState()

// reset slide when step changes or entering custom slides mode
watch([currStep, collection], () => (slide.value = 0))
</script>

<style scoped></style>
