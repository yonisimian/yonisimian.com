<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useMediaCdn } from '/@/composables/useCDN'

interface Props {
  /** Path relative to /public/media */
  src: string
  /** One of 'thumbnail', 'standard', 'high', or 'custom' */
  mode?: 'thumbnail' | 'standard' | 'high' | 'custom'
  /** Override width if mode is 'custom' */
  width?: number
  /** Override fetch priority */
  fetchpriority?: 'low' | 'medium' | 'high'
  /** Poster image path relative to /public/media */
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
  mode: 'standard',
  fetchpriority: 'low',
  alt: '',
  autoplay: false,
  loop: false,
  muted: false,
  controls: true,
  preload: 'metadata' // 'metadata' is often a good balance
})

const resolvedSrc = computed(() => {
  // TODO: a different CDN strategy for videos
  if (props.mode === 'custom' || props.width) {
    return useMediaCdn(props.src, { w: props.width ?? 720, fm: 'webm' })
  } else if (props.mode === 'thumbnail') {
    // For thumbnail, perhaps a very low-res video or a static image for preview
    // Here, let's assume it still fetches a video, but you might want an actual image here
    return useMediaCdn(props.src, { w: 320, fm: 'webm' })
  } else if (props.mode === 'high') {
    return useMediaCdn(props.src, { w: 1920, fm: 'webm' })
  } else {
    return useMediaCdn(props.src, { w: 1280, fm: 'webm' })
  }
})

const resolvedPoster = computed(() => {
  if (props.poster) {
    return useMediaCdn(props.poster, { w: 800, fm: 'webp' })
  }
  return undefined
})

const emit = defineEmits(['play', 'pause'])

const videoElementRef = ref<HTMLVideoElement | null>(null)
const currentSrc = ref(resolvedSrc.value)
// Only true while buffering: mobile browsers often skip preloading, so waiting for data up front can hang forever
const loading = ref(false)
const isPaused = ref(true)
const isEnded = ref(false)

watch(resolvedSrc, (src) => {
  currentSrc.value = src
  loading.value = false
})

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
  // Fall back to the original once; retrying the same URL would loop forever
  if (currentSrc.value !== props.src) {
    currentSrc.value = props.src
  } else {
    console.error('Video failed to load:', props.src)
    loading.value = false
  }
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
      :src="currentSrc"
      :poster="resolvedPoster"
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
