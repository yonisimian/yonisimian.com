<template>
  <Carousel
    id="gallery"
    v-bind="galleryConfig"
    v-model="slide"
    :touch-drag="!zoom"
    :mouse-drag="!zoom"
    :height="fullscreen ? '82vh' : carouselHeight"
  >
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
import { usePanzoom } from '/@/composables/usePanzoom'

const { slide, activeCollection, fullscreen } = useTripState()
const { zoom } = usePanzoom()

const galleryConfig = {
  // autoplay: 5000,
  // pauseAutoplayOnHover: true,
  // loop: true,
  itemsToShow: 1,
  mouseWheel: true,
  transition: 500
}
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
