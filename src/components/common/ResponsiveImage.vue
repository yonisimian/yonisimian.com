<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useMediaCdn } from '/@/composables/useCDN'
import LoadingSpinner from './basic/LoadingSpinner.vue'

interface Props {
  /** Path relative to /public/media */
  src: string
  /** One of 'thumbnail', 'full', or 'custom' */
  mode?: 'thumbnail' | 'full' | 'custom'
  /** Override width if mode is 'custom' */
  width?: number
  /** Override fetch priority */
  fetchpriority?: 'low' | 'medium' | 'high'
  /** Alt text */
  alt?: string
  /** CSS classes */
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'full',
  fetchpriority: 'low',
  alt: ''
})

const resolvedSrc = computed(() => {
  if (props.mode === 'custom' || props.width) {
    return useMediaCdn(props.src, { w: props.width ?? 400, fm: 'webp' })
  } else if (props.mode === 'thumbnail') {
    return useMediaCdn(props.src, { w: 100, fm: 'webp' })
  } else {
    return useMediaCdn(props.src, { w: 1600, fm: 'webp' })
  }
})

const imageRef = ref<HTMLImageElement | null>(null)
const loading = ref<boolean>(true)
const handleLoad = () => {
  loading.value = false
}
const handleError = (e: Event) => {
  ;(e.target as HTMLImageElement).src = props.src
  loading.value = false
}

onMounted(() => {
  nextTick(() => {
    if (imageRef.value?.complete) {
      console.log('Image already loaded')
      loading.value = false
    }
  })
})
</script>

<template>
  <div class="relative inline-block w-full h-full">
    <img
      v-show="!loading"
      ref="imageRef"
      :src="resolvedSrc"
      :alt
      :class
      :fetchpriority
      loading="lazy"
      decoding="async"
      draggable="false"
      @load="handleLoad"
      @error="handleError"
    />
    <LoadingSpinner v-if="loading" />
  </div>
</template>
