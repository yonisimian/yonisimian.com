<template>
  <div class="flex flex-col items-center justify-center">
    <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
      <TitleSeeThrough class="text-4xl" />
    </header>

    <article class="w-full px-4 mb-4">
      <div class="flex flex-wrap gap-4 justify-center">
        <div
          v-for="(media, index) in visibleMedia"
          :key="index"
          class="relative flex-auto h-96 overflow-hidden rounded-lg transition-transform duration-200 hover:scale-102"
        >
          <CarouselSlideImage
            v-if="isImage(media)"
            :src="media as PhotoURL"
            class="pointer-events-none"
            disabled
          />
          <CarouselSlideVideo v-else :src="media as VideoURL" />
        </div>
      </div>
      <div ref="loadMoreTrigger" class="h-10 w-full"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTripData } from '/@/composables/useTripData'
import { isImage } from '/@/functions/trip'
import { PhotoURL, VideoURL } from '/@/types/trip'

const { allMedia } = useTripData()

const ITEMS_PER_BATCH = 50
const visibleCount = ref(ITEMS_PER_BATCH)
const visibleMedia = computed(() => allMedia.slice(0, visibleCount.value))

const loadMoreTrigger = ref<HTMLElement>()
let observer: IntersectionObserver | null = null

const loadMore = () => {
  if (visibleCount.value < allMedia.length) {
    visibleCount.value = Math.min(visibleCount.value + ITEMS_PER_BATCH, allMedia.length)
  }
}

onMounted(() => {
  if (loadMoreTrigger.value) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(loadMoreTrigger.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
