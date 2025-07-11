<template>
  <div class="w-full h-full flex items-center justify-center overflow-hidden">
    <div v-if="activeCollection.stepslides.length" class="h-full">
      <CarouselGallery />
      <CarouselThumbnail v-if="!fullscreen" />
    </div>
    <CarouselEmpty v-else />
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
const { activeCollection, fullscreen } = useTripState()
</script>
