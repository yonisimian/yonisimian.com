<template>
  <div
    class="item opacity-40 hover:opacity-80 text-white w-full h-full min-w-44 flex flex-col items-center justify-center cursor-pointer select-none"
    :class="{ active: isCurrDest }"
    :style="flagStyle"
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
import { formatDate } from '/@/functions/trip'

const props = defineProps<{
  dest: T
  date?: string
  isCurrDest: boolean
  chooseDest: (dest: T) => void
}>()

const flagStyle =
  'bgImage' in props.dest
    ? {
        backgroundImage: `url(${props.dest.bgImage})`
      }
    : {}
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
