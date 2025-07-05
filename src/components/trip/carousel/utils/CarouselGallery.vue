<template>
  <Carousel ref="carouselEl" id="gallery" v-bind="galleryConfig" v-model="slide">
    <CarouselSlide
      v-for="(url, index) in collectionToMediaArray(activeCollection)"
      :key="index"
      :url
    />

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Navigation } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { carouselHeight } from '/@/data/trip'
import { collectionToMediaArray } from '/@/functions/trip'
import { ref, watch } from 'vue'
import { usePanzoom } from '/@/composables/usePanzoom'

const { slide, activeCollection, fullscreen } = useTripState()
const { zoom } = usePanzoom()

const galleryConfig = {
  // autoplay: 5000,
  // pauseAutoplayOnHover: true,
  // loop: true,
  itemsToShow: 1,
  touchDrag: !zoom.value,
  mouseDrag: !zoom.value, // NOTE: doesn't fully work. might worths opening an issue.
  mouseWheel: true,
  transition: 500,
  height: carouselHeight
}

const carouselEl = ref<HTMLElement | null>(null)

// view the current slide in the center of the viewport when exiting fullscreen
watch(fullscreen, (isFullscreen) => {
  if (!isFullscreen) {
    const el = (carouselEl.value as any)?.$el ?? carouselEl.value
    el?.scrollIntoView({ behavior: 'instant', block: 'center' })
  }
})
</script>

<style scoped>
.carousel {
  --vc-nav-color: rgba(255, 255, 255, 0.2);
  --vc-nav-color-hover: rgba(255, 255, 255, 0.4);
  /* --vc-nav-background: rgba(0, 0, 0, 0.25);
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px; */
}
</style>
