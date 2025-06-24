<template>
  <div class="flex flex-col items-center justify-center select-none">
    <Carousel id="gallery" v-bind="galleryConfig" v-model="slide">
      <Slide v-for="(url, index) in currStep.media" :key="index">
        <div class="w-full h-full bg-black flex items-center justify-center cursor-pointer">
          <template v-if="isImage(url)">
            <img
              :src="url as PhotoURL"
              class="absolute inset-0 w-full h-full object-cover blur-xl brightness-40 scale-110 z-0"
              aria-hidden="true"
              @click="fullscreen = true"
            />
            <img
              class="relative max-h-full max-w-full object-contain z-10"
              :src="url as PhotoURL"
              alt="Media"
              @click="fullscreen = true"
            />
          </template>
          <template v-else>
            <img
              :src="(url as VideoURL).thumbnail"
              class="absolute inset-0 w-full h-full object-cover blur-xl brightness-40 scale-110 z-0"
              aria-hidden="true"
              @click="fullscreen = true"
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

    <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="slide">
      <Slide v-for="(url, index) in currStep.media" :key="index">
        <template #default="{ currentIndex, isActive }">
          <div :class="['thumbnail', { 'is-active': isActive }]" @click="slide = currentIndex">
            <img
              :src="isImage(url) ? (url as PhotoURL) : (url as VideoURL).thumbnail"
              alt="Thumbnail Image"
              class="h-full w-full object-cover block"
            />
          </div>
        </template>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage } from '/@/data/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { currStep, slide, fullscreen } = useTripState()

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

.carousel {
  --vc-nav-background: rgba(0, 0, 0, 0.3);
  --vc-nav-color: white;
  --vc-nav-color-hover: #e5e5e5;
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;
}
</style>
