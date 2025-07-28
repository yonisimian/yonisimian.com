<template>
  <div
    ref="containerRef"
    class="w-full h-full bg-black flex items-center justify-center overflow-hidden relative inline-block"
    @mousemove="isVideoButtonVisible = true"
    @mouseleave="isVideoButtonVisible = false"
    @click="togglePlay"
  >
    <SlideBlurBackground :src="src.thumbnail" />
    <ResponsiveVideo
      ref="responsiveVideoRef"
      videoClass="w-full h-full origin-center-center z-10 object-contain"
      :src="src.video"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      :controls="false"
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
        v-show="!isLoading && (isVideoButtonVisible || !isPlaying)"
        class="absolute inset-0 flex items-center justify-center z-20"
        :togglePlay
        :isPlaying
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { VideoURL } from '/@/types/trip'
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import ResponsiveVideo from '/@/components/common/ResponsiveVideo.vue'

defineProps<{
  src: VideoURL
}>()

const { slide } = useTripState()

const isPlaying = ref(false)
const isVideoButtonVisible = ref(true)
let timeout: number | undefined = undefined

const responsiveVideoRef = ref<InstanceType<typeof ResponsiveVideo> | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const isLoading = computed(() => responsiveVideoRef.value?.isLoading ?? true)

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
watch(slide, () => responsiveVideoRef.value?.pause())

const togglePlay = () => {
  showAndAutoHideButton()
  if (!responsiveVideoRef.value) return

  if (responsiveVideoRef.value.isPaused || responsiveVideoRef.value.isEnded) {
    responsiveVideoRef.value.play()
  } else {
    responsiveVideoRef.value.pause()
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
