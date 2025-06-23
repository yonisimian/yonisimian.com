<template>
  <div
    class="item text-gray-500 text-shadow-xl min-w-44 flex flex-col items-center justify-center cursor-pointer select-none"
    :class="{ active: isCurrDest }"
    :style="flagStyle"
    @click="chooseDest(dest)"
  >
    <div>{{ dest.shortName || dest.name }}</div>
    <p v-if="date" class="text-xs">
      {{ formatDate(date) }}
    </p>
  </div>
</template>

<script setup lang="ts" generic="T extends { name: string, shortName?: string }">
import { formatDate } from '/@/data/trip'

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
  transition: background 0.2s, color 0.2s;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(30, 30, 30);
  background-blend-mode: overlay;
  aspect-ratio: 3 / 2;
}
/* hacking some colors together, will adjust later on */
.item > p {
  color: rgba(134, 143, 161, 0.8);
  transition: background 0.2s, color 0.2s, font-size 0.2s;
}
.item:hover {
  background-color: rgba(110, 110, 110);
  color: rgba(252, 252, 252, 1);
}
.item:hover > p {
  color: rgba(134, 143, 161, 1);
}
.active.item > p {
  color: rgba(252, 252, 252, 0.7);
}
.active {
  color: rgba(252, 252, 252, 0.9);
  background-color: rgba(100, 100, 100);
  border-color: rgba(34, 169, 184, 0.8);
  border-width: 0px;
  border-style: solid;
  font-weight: 500;
}
</style>
