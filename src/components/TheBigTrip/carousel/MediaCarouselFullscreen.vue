<template>
  <div
    class="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"
    @click.self="fullscreen = false"
  >
    <div class="max-w-5xl h-max bg-black flex items-center justify-center overflow-hidden">
      <Carousel id="gallery" v-bind="galleryConfig" v-model="slide">
        <Slide v-for="(url, index) in currStep.media" :key="index">
          <div class="w-full h-full max-h-[640px] bg-black flex items-center justify-center">
            <img
              v-if="isImage(url)"
              class="max-h-full max-w-full object-contain"
              :src="url as PhotoURL"
              alt="Media"
            />
            <video
              v-else
              controls
              class="max-h-full max-w-full object-contain"
              :src="(url as VideoURL).video"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage } from '/@/data/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { currStep, slide, fullscreen } = useTripState()

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
