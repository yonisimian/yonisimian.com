<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Props {
  src: string
  /** Override fetch priority */
  fetchpriority?: 'low' | 'medium' | 'high'
  poster?: string
  /** Alt text for accessibility (often used with poster or for screen readers) */
  alt?: string
  /** CSS classes for the video element */
  videoClass?: string
  /** Whether the video should autoplay */
  autoplay?: boolean
  /** Whether the video should loop */
  loop?: boolean
  /** Whether the video should be muted */
  muted?: boolean
  /** Whether controls should be shown */
  controls?: boolean
  /** Preload attribute */
  preload?: 'auto' | 'metadata' | 'none'
}

const props = withDefaults(defineProps<Props>(), {
  fetchpriority: 'low',
  alt: '',
  autoplay: false,
  loop: false,
  muted: false,
  controls: true,
  preload: 'metadata' // 'metadata' is often a good balance
})

const emit = defineEmits(['play', 'pause'])

const videoElementRef = ref<HTMLVideoElement | null>(null)
// Only true while buffering: mobile browsers often skip preloading, so waiting for data up front can hang forever
const loading = ref(false)
const isPaused = ref(true)
const isEnded = ref(false)

watch(
  () => props.src,
  () => (loading.value = false)
)

const handlePlay = () => {
  isPaused.value = false
  isEnded.value = false
  emit('play')
}

const handlePause = () => {
  isPaused.value = true
  loading.value = false
  emit('pause')
}

const handleEnded = () => {
  isEnded.value = true
  handlePause()
}

const handleError = () => {
  console.error('Video failed to load:', props.src)
  loading.value = false
}

const play = () =>
  videoElementRef.value?.play().catch((e) => {
    console.warn('Video play failed:', e)
    isPaused.value = true
    isEnded.value = false
    loading.value = false
  })

const pause = () => videoElementRef.value?.pause()

defineExpose({
  play,
  pause,
  isLoading: computed(() => loading.value),
  isPaused: computed(() => isPaused.value),
  isEnded: computed(() => isEnded.value)
})
</script>

<template>
  <div class="w-full h-full relative inline-block">
    <video
      ref="videoElementRef"
      :src="props.src"
      :poster="props.poster"
      :class="props.videoClass"
      :fetchpriority="props.fetchpriority"
      :autoplay="props.autoplay"
      :loop="props.loop"
      :muted="props.muted"
      :controls="props.controls"
      :preload="props.preload"
      playsinline
      class="w-full h-auto block"
      @play="handlePlay"
      @pause="handlePause"
      @ended="handleEnded"
      @waiting="loading = true"
      @playing="loading = false"
      @error="handleError"
    >
      <p v-if="props.alt">
        {{ props.alt }}
      </p>
      Your browser does not support the video tag.
    </video>
    <YSpinner v-if="loading" />
  </div>
</template>

<style scoped></style>
