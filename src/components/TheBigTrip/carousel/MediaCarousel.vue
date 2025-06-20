<template>
  <div>
    <div v-if="step.media && step.media.length && isCarouselReady">
      <MediaCarouselFullscreen
        v-if="isFullscreen"
        :step="step"
        :currentSlide
        :closeFullscreen
        :isImage
        @update:currentSlide="currentSlide = $event"
      />
      <MediaCarouselNormal
        :class="{ inactive: isFullscreen }"
        :step="step"
        :currentSlide
        :isFullscreen="isFullscreen"
        :openFullscreen
        :slideTo
        :isImage
        @update:currentSlide="currentSlide = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { ref, watch, nextTick } from 'vue'
import { Step } from '/@/types/trip'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  step: Step
}>()

const route = useRoute()
const router = useRouter()

const currentSlide = ref<number>(0)
const isFullscreen = ref(false)
const isCarouselReady = ref(false)

const setCurrentSlide = (slide: any) => {
  const slideNum = parseInt(slide as string)
  if (!isNaN(slideNum)) {
    currentSlide.value = slideNum
  }
}

const setIsFullscreen = (fullscreen: any) => {
  isFullscreen.value = fullscreen === 'true'
}

setCurrentSlide(route.query.slide)
setIsFullscreen(route.query.fullscreen)
nextTick(() => {
  isCarouselReady.value = true
})

watch(
  () => route.query.slide,
  (newSlide) => setCurrentSlide(newSlide)
)

watch(
  () => route.query.fullscreen,
  (fullscreen) => setIsFullscreen(fullscreen)
)

const updateRoute = (params: Record<string, any>) => {
  // Remove keys with undefined values
  const newQuery = { ...route.query, ...params }
  Object.keys(newQuery).forEach((key) => newQuery[key] === undefined && delete newQuery[key])
  router.replace({ query: newQuery })
}

// Only reset currentSlide when step changes (not on mount)
let firstStep = true
watch(
  () => props.step,
  () => {
    if (firstStep) {
      firstStep = false
      return
    }
    currentSlide.value = 0
  }
)

watch(currentSlide, (newSlide) => {
  updateRoute({ slide: newSlide !== 0 ? newSlide : undefined })
})

const slideTo = (nextSlide: number) => {
  currentSlide.value = nextSlide
}

const isImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)
}

const openFullscreen = () => {
  isFullscreen.value = true
  document.body.style.overflowY = 'hidden'
  updateRoute({ fullscreen: 'true' })
}

const closeFullscreen = () => {
  isFullscreen.value = false
  document.body.style.overflow = 'scroll'
  updateRoute({ fullscreen: undefined })
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

.inactive {
  pointer-events: none;
  user-select: none;
}
</style>
