<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useMediaCdn } from '/@/composables/useCDN'

interface Props {
  /** Path relative to /public/media */
  src: string
  /** One of 'tiny', 'thumbnail', 'full', 'custom', or 'original' */
  mode?: 'tiny' | 'thumbnail' | 'full' | 'custom' | 'original'
  /** Override width if mode is 'custom' */
  width?: number
  /** Override fetch priority */
  fetchpriority?: 'low' | 'medium' | 'high'
  /** Override loading methodology */
  loading?: 'lazy' | 'eager'
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

const imageRef = ref<HTMLImageElement | null>(null)
const isLoading = ref<boolean>(true)
const handleLoad = () => {
  isLoading.value = false
}
const handleError = (e: Event) => {
  ;(e.target as HTMLImageElement).src = props.src
  isLoading.value = false
}

onMounted(() => {
  nextTick(() => {
    if (!imageRef.value) {
      console.warn(
        'ResponsiveImage: imageRef is not set. Call Yoni and tell him that he owes you a hamburger.'
      )
      return
    }
    if (imageRef.value.complete) {
      isLoading.value = false
    } else {
      imageRef.value.addEventListener('load', handleLoad)
      imageRef.value.addEventListener('error', handleError)
    }
  })
})

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
      v-show="!isLoading"
      ref="imageRef"
      :src="resolvedSrc"
      :alt
      :class="imgClass"
      :fetchpriority
      :loading
    />
    <YSpinner v-if="isLoading" />
  </div>
</template>
