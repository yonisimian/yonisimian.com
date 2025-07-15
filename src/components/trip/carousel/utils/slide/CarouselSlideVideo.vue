<template>
  <div
    ref="containerRef"
    class="w-full h-full bg-black flex items-center justify-center overflow-hidden relative inline-block"
    @mousemove="isVideoButtonVisible = true"
    @mouseleave="isVideoButtonVisible = false"
    @click="togglePlay"
  >
    <SlideBlurBackground :src="src.thumbnail" />
    <video
      ref="videoRef"
      class="relative w-full h-full origin-center-center z-10 object-contain"
      :src="src.video"
      @play="isPlaying = true"
      @pause="isPlaying = false"
    />
    <Transition
      enterActiveClass="transition-opacity duration-200"
      enterFromClass="opacity-0"
      enterToClass="opacity-100"
      leaveActiveClass="transition-opacity duration-500"
      leaveFromClass="opacity-100"
      leaveToClass="opacity-0"
    >
      <VideoPlayButton
        v-show="isVideoButtonVisible || !isPlaying"
        class="absolute inset-0 flex items-center justify-center z-20"
        :togglePlay
        :isPlaying
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { VideoURL } from '/@/types/trip'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useTripState } from '/@/composables/useTripState'

defineProps<{
  src: VideoURL
}>()

const { slide } = useTripState()

const isPlaying = ref(false)
const isVideoButtonVisible = ref(true)
let timeout: number | undefined = undefined

const videoRef = ref<HTMLVideoElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const showAndAutoHideButton = () => {
  isVideoButtonVisible.value = true
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    if (isPlaying.value) {
      isVideoButtonVisible.value = false
    }
  }, 1500)
}

// Pause video when slide changes
watch(slide, () => videoRef.value?.pause())

const togglePlay = () => {
  showAndAutoHideButton()
  const video = videoRef.value
  if (!video) return

  if (video.paused || video.ended) {
    video.play()
  } else {
    video.pause()
  }
}

const onMouseMove = () => {
  showAndAutoHideButton()
}

watch(isPlaying, (playing) => {
  if (!playing) {
    isVideoButtonVisible.value = true
    clearTimeout(timeout)
    timeout = undefined
  }
})

// Set up mousemove listener on mount
onMounted(() => {
  containerRef.value?.addEventListener('mousemove', onMouseMove)
})
onUnmounted(() => {
  containerRef.value?.removeEventListener('mousemove', onMouseMove)
  clearTimeout(timeout)
})

// TODO: clean up some code
</script>

<style scoped></style>
