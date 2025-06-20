<template>
  <div>
    <div v-if="step.media && step.media.length">
      <MediaCarouselFullscreen
        v-if="isFullscreen"
        :step="step"
        :currentSlide
        :closeFullscreen
        :isImage
        @update:currentSlide="currentSlide = $event"
      />
      <MediaCarouselNormal
        :class="{ inactive: isFullscreen }"
        :step="step"
        :currentSlide
        :isFullscreen="isFullscreen"
        :openFullscreen
        :slideTo
        :isImage
        @update:currentSlide="currentSlide = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { ref, watch } from 'vue'
import { Step } from '/@/types/trip'

const props = defineProps<{
  step: Step
}>()

const currentSlide = ref<number>(0)
const isFullscreen = ref(false)

watch(
  () => props.step.media,
  () => {
    currentSlide.value = 0
  }
)

const slideTo = (nextSlide: number) => {
  return (currentSlide.value = nextSlide)
}

const isImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)
}

const openFullscreen = () => {
  isFullscreen.value = true
  document.body.style.overflowY = 'hidden'
}

const closeFullscreen = () => {
  isFullscreen.value = false
  document.body.style.overflow = 'scroll'
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
