<template>
  <div class="flex flex-col items-center justify-center select-none">
    <Carousel
      id="gallery"
      v-bind="galleryConfig"
      v-model="currentSlideLocal"
      @mousedown="openFullscreen"
    >
      <Slide v-for="(url, index) in step.media" :key="index">
        <div class="w-full h-full bg-black flex items-center justify-center cursor-pointer">
          <img v-if="isImage(url)" :src="url" alt="Media" />
          <video v-else controls :src="url" />
        </div>
      </Slide>
    </Carousel>

    <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlideLocal">
      <Slide v-for="(url, index) in step.media" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div :class="['thumbnail', { 'is-active': isActive }]" @click="slideTo(currentIndex)">
            <img :src="url" alt="Thumbnail Image" class="thumbnail-image" />
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
import { ref, watch } from 'vue'

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

const currentSlideLocal = ref(props.currentSlide)

watch(
  () => props.currentSlide,
  (val) => {
    currentSlideLocal.value = val
  }
)

watch(currentSlideLocal, (val) => {
  if (val !== props.currentSlide) {
    emit('update:currentSlide', val)
  }
})
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
