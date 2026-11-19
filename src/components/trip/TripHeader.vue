<template>
  <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
    <TitleSeeThrough :title="title" class="text-4xl" />
    <div
      v-if="collections.length"
      class="w-full flex gap-2 items-center justify-center text-sm text-blue-gray-800 dark:text-blue-gray-300"
    >
      <template v-for="(item, index) in collections" :key="item.slug">
        <p v-if="index > 0">•</p>
        <h3 :class="{ 'animate-my-tada': bounceIndex === IDLE_TICKS + index }">
          <a href="#" @click.prevent="collection = item.slug">{{ item.slug }}</a>
        </h3>
      </template>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import { useTripData } from '/@/composables/useTripData'

const { collection } = useTripState()
const { title, collections } = useTripData()

// each cycle: IDLE_TICKS quiet ticks, then one bounce per collection link
const IDLE_TICKS = 5
const bounceIndex = ref(-1)
let interval: number | undefined

onMounted(() => {
  if (!collections.length) return
  interval = window.setInterval(() => {
    bounceIndex.value = (bounceIndex.value + 1) % (IDLE_TICKS + collections.length)
  }, 1500)
})

// only do the animation when static
window.addEventListener('scroll', () => {
  bounceIndex.value = -1
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
a {
  color: inherit;
  cursor: pointer;
}
a:hover {
  color: #00b3ff; /* same as strong */
}
@keyframes my-tada {
  from {
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70% {
    transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, -3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
.animate-my-tada {
  animation: my-tada 1s linear 1;
}
</style>
