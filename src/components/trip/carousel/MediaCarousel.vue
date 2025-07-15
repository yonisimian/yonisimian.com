<template>
  <CarouselFullscreenWrapper>
    <CarouselGalleryWrapper />
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
