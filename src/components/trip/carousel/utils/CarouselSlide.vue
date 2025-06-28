<template>
  <Slide
    class="media-wrapper w-full h-full bg-black flex items-center justify-center relative overflow-hidden"
    :class="{ 'cursor-pointer': !fullscreen }"
  >
    <template v-if="isImage(url)">
      <SlideBlurBackground :src="url as PhotoURL" />
      <img
        class="relative h-full w-full object-contain z-10"
        :src="url as PhotoURL"
        @click="openFullscreen"
      />
    </template>
    <template v-else>
      <SlideBlurBackground :src="(url as VideoURL).thumbnail" />
      <video
        ref="videoEl"
        controls
        class="carousel-video relative h-full w-full object-contain z-10"
        :src="(url as VideoURL).video"
      />
    </template>
    <FullscreenButton class="absolute top-4 left-4 z-20" />
    <ShareButton
      class="absolute top-4 right-4 z-20"
      :shareText="`Check out my visit to ${activeCollection.name}`!"
    />
  </Slide>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Slide } from 'vue3-carousel'
import { useTripState } from '/@/composables/useTripState'
import { isImage } from '/@/functions/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { watch, ref } from 'vue'

const { slide, fullscreen, openFullscreen, activeCollection } = useTripState()

defineProps<{
  url: MediaType
}>()

const videoEl = ref<HTMLVideoElement | null>(null)

// Pause video when slide changes
watch(slide, () => {
  videoEl.value?.pause()
})
</script>

<style scoped></style>
