<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
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

const loading = ref(true)
const videoElementRef = ref<HTMLVideoElement | null>(null)

const internalIsPaused = ref(true)
const internalIsEnded = ref(false)

// Internal handler for video's native 'play' event
const handleNativePlay = () => {
  internalIsPaused.value = false
  internalIsEnded.value = false // Reset ended when playing starts
  emit('play') // Re-emit to parent
}

// Internal handler for video's native 'pause' event
const handleNativePause = () => {
  internalIsPaused.value = true
  // We don't change internalIsEnded here, it's handled by handleNativeEnded
  emit('pause') // Re-emit to parent
}

// Internal handler for video's native 'ended' event
const handleNativeEnded = () => {
  internalIsEnded.value = true
  internalIsPaused.value = true // Video is paused when it ends
  emit('pause') // Emit pause to parent as well
}

const handleLoadedData = () => {
  loading.value = false
  // Initial state check after loadeddata, useful for autoplay scenarios
  if (videoElementRef.value) {
    internalIsPaused.value = videoElementRef.value.paused
    internalIsEnded.value = videoElementRef.value.ended
  }
}

const emit = defineEmits(['play', 'pause', 'loaded'])

const handleError = (e: Event) => {
  if (videoElementRef.value) {
    if (videoElementRef.value.src === props.src) {
      console.error('Video source failed to load:', e)
    } else {
      console.warn('Video source failed. Serving original src as fallback.')
      videoElementRef.value.removeEventListener('loadeddata', handleLoadedData)
      loading.value = true
      videoElementRef.value.addEventListener('loadeddata', handleLoadedData, { once: true })
      videoElementRef.value.src = props.src // Fallback to original src
    }
  } else {
    console.error('Video element not found :(')
  }
}

// Expose methods for parent component to call
const play = () =>
  videoElementRef.value?.play().catch((e) => {
    console.warn('Video play failed:', e)
    internalIsPaused.value = true
    internalIsEnded.value = false
  })

const pause = () => videoElementRef.value?.pause()

const isVideoPaused = computed(() => internalIsPaused.value)
const isVideoEnded = computed(() => internalIsEnded.value)

defineExpose({
  play,
  pause,
  isLoading: computed(() => loading.value),
  isPaused: isVideoPaused,
  isEnded: isVideoEnded
})

onMounted(() => {
  nextTick(() => {
    if (!videoElementRef.value) {
      console.warn(
        'ResponsiveVideo: videoElementRef is not set. Call Yoni and tell him that he owes you sushi.'
      )
      return
    }

    if (videoElementRef.value.readyState >= 2) {
      loading.value = false // Data is available for the current playback position
    } else {
      videoElementRef.value.addEventListener('loadeddata', handleLoadedData)
      videoElementRef.value.addEventListener('error', handleError)
    }

    videoElementRef.value.addEventListener('play', handleNativePlay)
    videoElementRef.value.addEventListener('pause', handleNativePause)
    videoElementRef.value.addEventListener('ended', handleNativeEnded)

    internalIsPaused.value = videoElementRef.value.paused
    internalIsEnded.value = videoElementRef.value.ended
  })
})

onUnmounted(() => {
  if (videoElementRef.value) {
    videoElementRef.value.removeEventListener('play', handleNativePlay)
    videoElementRef.value.removeEventListener('pause', handleNativePause)
    videoElementRef.value.removeEventListener('ended', handleNativeEnded)
  }
})
</script>

<template>
  <div class="w-full h-full relative inline-block">
    <video
      v-show="!loading"
      ref="videoElementRef"
      :src="resolvedSrc"
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
    >
      <p v-if="props.alt">
        {{ props.alt }}
      </p>
      Your browser does not support the video tag.
    </video>
    <LoadingSpinner v-if="loading" />
  </div>
</template>

<style scoped></style>
