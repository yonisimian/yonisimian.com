<template>
  <div
    class="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"
    @click.self="fullscreen = false"
  >
    <div class="max-w-5xl h-max bg-black flex items-center justify-center overflow-hidden">
      <Carousel id="gallery" v-bind="galleryConfig" v-model="slide">
        <Slide v-for="(url, index) in step.media" :key="index">
          <div class="w-full h-full bg-black flex items-center justify-center">
            <img
              v-if="isImage(url)"
              class="max-h-[640px] max-w-full object-contain"
              :src="url"
              alt="Media"
            />
            <video v-else controls :src="url" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { Step } from '/@/types/trip'
import { useTripQueryParams } from '/@/composables/useTripQueryParams'

defineProps<{
  step: Step
  isImage: (url: string) => boolean
}>()

const { slide, fullscreen } = useTripQueryParams()

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
