<template>
  <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="(url, index) in mediaUrls" :key="index">
      <div class="w-full h-full bg-black flex items-center justify-center">
        <img v-if="isImage(url)" :src="url" alt="Media" />
        <video v-else controls :src="url" />
      </div>
    </Slide>
  </Carousel>

  <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
    <Slide v-for="(url, index) in mediaUrls" :key="index">
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
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, watch } from 'vue'

const props = defineProps<{
  mediaUrls: string[]
}>()

const galleryConfig = {
  autoplay: 5000,
  pauseAutoplayOnHover: true,
  loop: true,
  itemsToShow: 1,
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true,
  transition: 500,
  height: 640
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 5,
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true,
  gap: 10
}

const currentSlide = ref<number>(0)

// Reset carousel whenever dest changes
watch(
  () => props.mediaUrls,
  () => {
    currentSlide.value = 0
  }
)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const isImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)
}
</script>

<style scoped>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: black;
}

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
