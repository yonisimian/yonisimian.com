<template>
  <Slide class="w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <CarouselSlideImage v-if="isImage(url)" :src="url as PhotoURL" :rot="rotation" />
    <CarouselSlideVideo v-else :src="url as VideoURL" :rot="rotation" />
    <CarouselSlideToolbar
      class="absolute mx-auto z-20"
      :class="isImage(url) ? 'bottom-5' : 'top-5'"
      :rotateLeft
      :rotateRight
    />
  </Slide>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Slide } from 'vue3-carousel'
import { isImage } from '/@/functions/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { watch, ref } from 'vue'
import { useTripState } from '/@/composables/useTripState'

defineProps<{
  url: MediaType
}>()

const { slide, activeCollection } = useTripState()
const rotation = ref(0)
const rotateLeft = () => (rotation.value = (rotation.value - 90 + 360) % 360)
const rotateRight = () => (rotation.value = (rotation.value + 90) % 360)

// Reset rotation when slide changes
watch([slide, activeCollection], () => {
  rotation.value = 0
})
</script>

<style scoped></style>
