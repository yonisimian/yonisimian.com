<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useMediaCdn } from '/@/composables/useCDN'

interface Props {
  /** Path relative to /public/media */
  src: string
  /** One of 'tiny', 'thumbnail', 'full', 'custom', or 'original' */
  mode?: 'tiny' | 'thumbnail' | 'full' | 'custom' | 'original'
  /** Override width if mode is 'custom' */
  width?: number
  /** Override fetch priority */
  fetchpriority?: 'low' | 'high'
  /** Alt text */
  alt?: string
  /** CSS classes for the image element */
  imgClass?: string
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
  } else if (props.mode === 'tiny') {
    return useMediaCdn(props.src, { w: 10, fm: 'webp' })
  } else if (props.mode === 'full') {
    return useMediaCdn(props.src, { w: 1600, fm: 'webp' })
  } else {
    return props.src
  }
})

const currentSrc = ref(resolvedSrc.value)
const loading = ref(true)

watch(resolvedSrc, (src) => {
  currentSrc.value = src
  loading.value = true
})

const handleError = () => {
  // Fall back to the original once; retrying the same URL would loop forever
  if (currentSrc.value !== props.src) currentSrc.value = props.src
  else loading.value = false
}

/**
 * TODO: once upon a time, I had the following attributes in my img tag:
 * loading="lazy"
 * decoding="async"
 * draggable="false"
 * For some reason, those attributes caused issues with the image loading in some cases.
 * I removed them, but they might be useful if I understand one day how to use them.
 */
</script>

<template>
  <div class="inline-block w-full h-full">
    <img
      v-show="!loading"
      :src="currentSrc"
      :alt
      :class="imgClass"
      :fetchpriority
      @load="loading = false"
      @error="handleError"
    />
    <YSpinner v-if="loading" />
  </div>
</template>
