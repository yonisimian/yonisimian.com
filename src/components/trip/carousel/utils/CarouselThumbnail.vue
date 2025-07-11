<template>
  <Carousel v-bind="thumbnailsConfig" v-model="slide">
    <Slide v-for="(url, index) in collectionToMediaArray(activeCollection)" :key="index">
      <template #default="{ currentIndex, isActive }">
        <div class="thumbnail" :class="{ 'is-active': isActive }" @click="slide = currentIndex">
          <img
            :src="isImage(url) ? (url as PhotoURL) : (url as VideoURL).thumbnail"
            alt="Thumbnail Image"
            class="h-full w-full object-cover block"
          />
        </div>
      </template>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage, collectionToMediaArray } from '/@/functions/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { activeCollection, slide } = useTripState()

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
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.25s ease-in-out;
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
