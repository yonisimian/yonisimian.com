<template>
  <div>
    <div v-if="step.media && step.media.length">
      <MediaCarouselFullscreen v-if="fullscreen" :step :isImage />
      <MediaCarouselNormal :class="{ inactive: fullscreen }" :step :isImage />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { watch } from 'vue'
import { Step } from '/@/types/trip'
import { useTripQueryParams } from '/@/composables/useTripQueryParams'

const props = defineProps<{
  step: Step
}>()

const { slide, fullscreen } = useTripQueryParams()

// reset slide when step changes
watch(
  () => props.step,
  () => (slide.value = 0)
)

const isImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)
}
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

.inactive {
  pointer-events: none;
  user-select: none;
}
</style>
