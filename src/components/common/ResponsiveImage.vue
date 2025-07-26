<script setup lang="ts">
import { computed } from 'vue'
import { useMediaCdn } from '/@/composables/useCDN'

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
</script>

<template>
  <img
    :src="resolvedSrc"
    :alt
    :class
    :fetchpriority
    loading="lazy"
    decoding="async"
    draggable="false"
    @error="(e: Event) => ((e.target as HTMLImageElement).src = src)"
  />
</template>
