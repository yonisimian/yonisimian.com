<template>
  <div class="flex flex-col items-center justify-center">
    <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
      <TitleSeeThrough class="text-4xl" />
    </header>

    <article class="w-full px-4 mb-4">
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="(media, index) in allMedia"
          :key="index"
          class="relative flex-auto h-96 overflow-hidden rounded-lg transition-transform duration-200 hover:scale-102"
        >
          <AnimateOnScroll class="w-full h-full">
            <CarouselSlideImage
              v-if="isImage(media)"
              :src="media as PhotoURL"
              class="pointer-events-none"
              disabled
            />
            <CarouselSlideVideo v-else :src="media as VideoURL" />
          </AnimateOnScroll>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useTripData } from '/@/composables/useTripData'
import { isImage } from '/@/functions/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { allMedia } = useTripData()
</script>

<style scoped></style>
