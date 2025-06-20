<template>
  <div class="flex flex-col items-center justify-center select-none">
    <Carousel
      id="gallery"
      v-bind="galleryConfig"
      :modelValue="props.currentSlide"
      @update:modelValue="(val) => emit('update:currentSlide', val)"
      @mousedown="openFullscreen"
    >
      <Slide v-for="(url, index) in step.media" :key="index">
        <div class="w-full h-full bg-black flex items-center justify-center cursor-pointer">
          <img v-if="isImage(url)" :src="url" alt="Media" />
          <video v-else controls :src="url" />
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      v-bind="thumbnailsConfig"
      :modelValue="props.currentSlide"
      @update:modelValue="(val) => emit('update:currentSlide', val)"
    >
      <Slide v-for="(url, index) in step.media" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
            <img :src="url" alt="Thumbnail Image" class="h-full w-full object-cover block" />
          </div>
        </template>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { Step } from '/@/types/trip'

const props = defineProps<{
  step: Step
  currentSlide: number
  openFullscreen: () => void
  slideTo: (index: number) => void
  isImage: (url: string) => boolean
}>()

const galleryConfig = {
  // autoplay: 5000,
  // pauseAutoplayOnHover: true,
  // loop: true,
  itemsToShow: 1,
  touchDrag: true,
  // mouseDrag: true,
  mouseWheel: true,
  transition: 500,
  height: 640
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 5,
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true
  // gap: 12
}

const emit = defineEmits(['update:currentSlide'])
</script>

<style scoped>
.thumbnail {
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
