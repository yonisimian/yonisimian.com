<template>
  <YCarousel
    v-model="slide"
    :items="mediaItems"
    :itemsToShow="5"
    height="80px"
    :touchDrag="true"
    :mouseDrag="true"
    :mouseWheel="true"
  >
    <template #slide="{ item, index, isActive }">
      <div class="thumbnail" :class="{ 'is-active': isActive }" @click="slide = index">
        <ResponsiveImage
          :src="isImage(item) ? (item as PhotoURL) : (item as VideoURL).thumbnail"
          mode="thumbnail"
          fetchpriority="high"
          :alt="`Slide ${index} thumbnail`"
          imgClass="w-full h-full object-cover block"
        />
      </div>
    </template>
  </YCarousel>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import { isImage, collectionToMediaArray } from '/@/functions/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { activeCollection, slide } = useTripState()

const mediaItems = computed(() => collectionToMediaArray(activeCollection.value))
</script>

<style scoped>
.thumbnail {
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.25s ease-in-out;
  /* height: 100%;
  border-radius: 4px;
  overflow: hidden; */
}

.thumbnail.is-active,
.thumbnail:hover {
  opacity: 1;
}
</style>
