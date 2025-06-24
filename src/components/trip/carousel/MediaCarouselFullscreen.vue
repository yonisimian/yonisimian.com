<template>
  <div
    class="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"
    @click.self="closeFullscreen"
  >
    <div
      class="max-w-5xl h-max bg-black flex flex-col items-center justify-center overflow-hidden select-none"
      @click.self="closeFullscreen"
    >
      <CarouselTitle />
      <CarouselInfo class="py-2" />
      <Carousel id="gallery" v-bind="galleryConfig" v-model="slide">
        <Slide v-for="(url, index) in currSlides" :key="index">
          <div
            class="w-full h-full max-h-[640px] bg-black flex items-center justify-center relative overflow-hidden"
          >
            <template v-if="isImage(url)">
              <img
                :src="url as PhotoURL"
                class="absolute inset-0 w-full h-full object-cover blur-xl brightness-40 scale-110 z-0"
                aria-hidden="true"
              />
              <img
                class="relative max-h-full max-w-full object-contain z-10"
                :src="url as PhotoURL"
                alt="Media"
              />
            </template>
            <template v-else>
              <img
                :src="(url as VideoURL).thumbnail"
                class="absolute inset-0 w-full h-full object-cover blur-xl brightness-40 scale-110 z-0"
                aria-hidden="true"
              />
              <video
                controls
                class="relative max-h-full max-w-full object-contain z-10"
                :src="(url as VideoURL).video"
              />
            </template>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <StepNavigationButtons class="mt-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage, getCustomSlides } from '/@/data/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { computed } from 'vue'

const { currStep, slide, closeFullscreen, customSlides } = useTripState()

const currSlides = computed<MediaType[]>(() => {
  const s = getCustomSlides(customSlides.value)
  if (s) return s
  return currStep.value.media
})

const galleryConfig = {
  itemsToShow: 1,
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true,
  transition: 500,
  height: 640
}
</script>

<style scoped></style>
