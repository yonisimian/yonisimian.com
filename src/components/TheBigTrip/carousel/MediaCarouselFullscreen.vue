<template>
  <div
    class="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"
    @click.self="closeFullscreen"
  >
    <div class="max-w-5xl h-max bg-black flex items-center justify-center overflow-hidden">
      <Carousel
        id="gallery"
        v-bind="galleryConfig"
        :modelValue="props.currentSlide"
        @update:modelValue="(val) => emit('update:currentSlide', val)"
      >
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

const props = defineProps<{
  step: Step
  currentSlide: number
  closeFullscreen: () => void
  isImage: (url: string) => boolean
}>()

const galleryConfig = {
  itemsToShow: 1,
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true,
  transition: 500,
  height: 640
}

const emit = defineEmits(['update:currentSlide'])
</script>

<style scoped></style>
