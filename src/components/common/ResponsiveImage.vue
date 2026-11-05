<script setup lang="ts">
import { ref } from 'vue'

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

// Spinner only until the first load; on src changes the browser keeps the old image until the new one is ready
const loading = ref(true)
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
