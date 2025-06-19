<template>
  <div
    class="item text-light-500 text-shadow-xl min-w-48 p-8 text-center cursor-pointer box-border select-none"
    :class="{ active: isCurrDest }"
    :style="flagStyle"
    @click="chooseDest(dest)"
  >
    <div>{{ dest.name }}</div>
    <div v-if="date" class="text-xs text-gray-300">{{ formatDate(date) }}</div>
  </div>
</template>

<script setup lang="ts" generic="T extends { name: string }">
const props = defineProps<{
  dest: T
  date?: string
  isCurrDest: boolean
  chooseDest: (dest: T) => void
}>()

const formatDate = (dateStr: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const match = dateStr.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/)
  if (!match) return dateStr
  const month = months.indexOf(match[1]) + 1
  const day = parseInt(match[2], 10)
  const year = match[3]
  return `${day}-${month}-${year}`
}

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
