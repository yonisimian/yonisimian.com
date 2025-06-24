<template>
  <div class="w-full">
    <div v-if="currStep.media && currStep.media.length">
      <MediaCarouselFullscreen v-if="fullscreen" />
      <MediaCarouselNormal :style="{ display: fullscreen ? 'none' : 'block' }" />
      <!-- Note: I used to go `v-else` here, but I got warnings from Vue :( -->
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, slide, fullscreen, customSlides } = useTripState()

// reset slide when step changes or entering custom slides mode
watch([() => currStep.value, () => customSlides.value], () => (slide.value = 0))
</script>

<style scoped>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: black;
}
</style>
