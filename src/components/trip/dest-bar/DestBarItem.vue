<template>
  <div
    class="item opacity-40 hover:opacity-80 text-white w-full h-full min-w-44 flex flex-col items-center justify-center cursor-pointer select-none"
    :class="{ active: isCurrDest }"
    :style="bgStyle"
    @click="chooseDest(dest)"
  >
    <div class="stroked">
      {{ dest.shortName || dest.name }}
    </div>
    <p v-if="date" class="text-xs half-stroked">
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

const defaultBgStyle = { backgroundColor: 'black' }
const bgImageFromURI = (uri: string) => {
  try {
    return { backgroundImage: `url(${encodeURI(uri)})` }
  } catch (e) {
    console.error('Invalid URI for background image:', uri, e)
    return defaultBgStyle
  }
}

const bgStyle = (() => {
  if ('bgImage' in props.dest) {
    const bgImage = props.dest.bgImage
    if (typeof bgImage === 'string') {
      return bgImageFromURI(bgImage)
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
          return bgImageFromURI(mediaItem as PhotoURL)
        } else {
          return bgImageFromURI((mediaItem as VideoURL).thumbnail)
        }
      }
    } else {
      console.warn(
        `DestBarItem: bgImage should be a string or a valid index, got ${typeof bgImage}`
      )
    }
  }
  return defaultBgStyle
})()
</script>

<style scoped>
.item {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
