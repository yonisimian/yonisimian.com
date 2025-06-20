<template>
  <div
    class="item text-light-500 text-shadow-xl min-w-48 p-8 text-center cursor-pointer box-border select-none"
    :class="{ active: isCurrDest }"
    :style="flagStyle"
    @click="chooseDest(dest)"
  >
    <div>{{ dest.shortName || dest.name }}</div>
    <div v-if="date" class="text-xs text-gray-300">{{ formatDate(date) }}</div>
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
  background-color: rgba(60, 60, 60);
  background-blend-mode: overlay;
}
.active {
  background-color: rgba(90, 90, 90);
  font-weight: 500;
}
.item:hover {
  background-color: rgba(100, 100, 100);
}
</style>
