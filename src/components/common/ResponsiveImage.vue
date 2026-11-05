<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  src: string
  /** Override fetch priority */
  fetchpriority?: 'low' | 'high'
  /** Alt text */
  alt?: string
  /** CSS classes for the image element */
  imgClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  fetchpriority: 'low',
  alt: ''
})

const loading = ref(true)

watch(
  () => props.src,
  () => (loading.value = true)
)

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
      :src
      :alt
      :class="imgClass"
      :fetchpriority
      @load="loading = false"
      @error="loading = false"
    />
    <YSpinner v-if="loading" />
  </div>
</template>
