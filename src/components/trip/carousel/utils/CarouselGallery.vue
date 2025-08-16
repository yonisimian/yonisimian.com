<template>
  <YCarousel
    v-model="slide"
    :items="mediaItems"
    :height="fullscreen ? '100%' : 'calc(100% - 80px)'"
    :touchDrag="!zoom"
    :mouseDrag="!zoom"
    :mouseWheel="true"
    :transition="500"
  >
    <template #slide="{ item }">
      <CarouselSlide :url="item" />
    </template>

    <template #navigation="{ prev, next }">
      <YCarouselNavigation @prev="prev" @next="next" />
    </template>
  </YCarousel>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import { collectionToMediaArray } from '/@/functions/trip'
import { usePanzoom } from '/@/composables/usePanzoom'

const { slide, activeCollection, fullscreen } = useTripState()
const { zoom } = usePanzoom()

const mediaItems = computed(() => collectionToMediaArray(activeCollection.value))
</script>
