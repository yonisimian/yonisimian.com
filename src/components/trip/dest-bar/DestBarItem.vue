<template>
  <div
    class="item opacity-40 hover:opacity-80 text-white w-full h-full min-w-44 flex flex-col items-center justify-center cursor-pointer select-none relative"
    :class="{ active: isCurrDest }"
    @click="chooseDest(dest)"
  >
    <div class="absolute inset-0 w-full h-full object-cover z-0">
      <ResponsiveImage
        v-if="imageSrc"
        :src="imageSrc"
        mode="thumbnail"
        fetchpriority="high"
        :alt="`Background image for ${dest.name}`"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div v-else class="absolute inset-0 w-full h-full z-0 bg-black" />
    </div>
    <div class="stroked z-10">
      {{ dest.shortName || dest.name }}
    </div>
    <p v-if="date" class="text-xs half-stroked z-10">
      {{ formatDate(date) }}
    </p>
  </div>
</template>

<script setup lang="ts" generic="T extends { name: string, shortName?: string }">
import { formatDate, isImage } from '/@/functions/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'

const props = defineProps<{
  dest: T
  date?: string
  isCurrDest: boolean
  chooseDest: (dest: T) => void
}>()

const imageSrc = (() => {
  if ('bgImage' in props.dest) {
    const bgImage = props.dest.bgImage
    if (typeof bgImage === 'string') {
      return bgImage
    } else if (
      typeof bgImage === 'number' &&
      'media' in props.dest &&
      Array.isArray(props.dest.media)
    ) {
      if (props.dest.media.length <= bgImage) {
        console.warn(
          `DestBarItem: bgImage index ${bgImage} is out of bounds for media array of length ${props.dest.media.length}`
        )
      } else {
        const mediaItem = props.dest.media[bgImage] as MediaType
        if (isImage(mediaItem)) {
          return mediaItem as PhotoURL
        } else {
          return (mediaItem as VideoURL).thumbnail
        }
      }
    } else {
      console.warn(
        `DestBarItem: bgImage should be a string or a valid index, got ${typeof bgImage}`
      )
    }
  }
  return null
})()
</script>

<style scoped>
.item {
  overflow: hidden;
  position: relative;
  aspect-ratio: 3 / 2;
  transition: background-color var(--transition-duration), color var(--transition-duration),
    opacity 200ms;
}
.active {
  opacity: 0.8;
  font-weight: 500;
}
.active:hover {
  opacity: 1;
}
.stroked {
  text-shadow: 2px 2px 0 #000;
}
.half-stroked {
  text-shadow: 1px 1px 0 #000;
}
</style>
