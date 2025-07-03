<template>
  <Slide
    class="w-full h-full bg-black flex items-center justify-center overflow-hidden"
    :class="{ 'cursor-pointer': !fullscreen }"
  >
    <template v-if="isImage(url)">
      <SlideBlurBackground :src="url as PhotoURL" />
      <img :class="mediaClass" :src="url as PhotoURL" @click="openFullscreen" :style="mediaStyle" />
    </template>
    <template v-else>
      <SlideBlurBackground :src="(url as VideoURL).thumbnail" />
      <video
        ref="videoEl"
        controls
        :class="mediaClass"
        :src="(url as VideoURL).video"
        :style="mediaStyle"
      />
    </template>
    <CarouselSlideToolbar
      class="absolute mx-auto z-20"
      :class="isImage(url) ? 'bottom-5' : 'top-5'"
      :rotateLeft
      :rotateRight
    />
  </Slide>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Slide } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage } from '/@/functions/trip'
import { carouselHeight } from '/@/data/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { watch, ref, computed } from 'vue'

const { slide, fullscreen, openFullscreen, activeCollection } = useTripState()

defineProps<{
  url: MediaType
}>()

const videoEl = ref<HTMLVideoElement | null>(null)

// Pause video when slide changes
watch(slide, () => {
  videoEl.value?.pause()
})

const rotation = ref(0)
const rotateLeft = () => (rotation.value = (rotation.value - 90 + 360) % 360)
const rotateRight = () => (rotation.value = (rotation.value + 90) % 360)

const mediaClass = 'relative w-full h-full origin-center-center object-contain z-10'

const mediaStyle = computed(() => {
  const rot = rotation.value
  const rotate = `rotate(${rot}deg)`

  // swap width/height to fill container
  return {
    transform: rotate,
    ...((rot === 90 || rot === 270) && { width: carouselHeight, height: '56rem' })
  }
})

// Reset rotation when collection changes
watch(activeCollection, () => {
  rotation.value = 0
})
</script>

<style scoped></style>
