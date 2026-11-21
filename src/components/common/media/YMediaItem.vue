<template>
  <div
    v-if="variant === 'thumb'"
    class="relative w-full h-full overflow-hidden bg-gray-300 dark:bg-gray-700"
    :class="{ 'animate-pulse': !loaded }"
  >
    <img
      :src="item.thumb"
      :alt="item.alt"
      loading="lazy"
      decoding="async"
      class="w-full h-full object-cover transition-opacity duration-300"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="loaded = true"
    />
    <div
      v-if="item.type === 'video'"
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <svg class="w-10 h-10 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </div>
  <div v-else class="relative w-full h-full">
    <!-- The grid already loaded the thumb, so it shows instantly while the full image loads -->
    <img
      :src="item.thumb"
      alt=""
      class="absolute inset-0 w-full h-full object-contain"
      :class="{ invisible: loaded }"
    />
    <img
      v-if="item.type === 'photo'"
      :src="item.src"
      :alt="item.alt"
      decoding="async"
      class="relative w-full h-full object-contain"
      @load="loaded = true"
    />
    <video
      v-else
      ref="video"
      :src="item.src"
      :poster="item.poster"
      :aria-label="item.alt"
      :tabindex="active ? undefined : -1"
      controls
      playsinline
      preload="metadata"
      class="relative w-full h-full object-contain"
      @loadeddata="loaded = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, watch } from 'vue'
import type { MediaItem } from '/@/types/media'

const props = withDefaults(
  defineProps<{
    item: MediaItem
    variant: 'thumb' | 'full'
    active?: boolean // full variant: videos pause when it turns false
  }>(),
  { active: true }
)

const loaded = ref(false)
watch(
  () => props.item,
  () => (loaded.value = false)
)

const video = useTemplateRef<HTMLVideoElement>('video')
watch(
  () => props.active,
  (active) => !active && video.value?.pause()
)
</script>
