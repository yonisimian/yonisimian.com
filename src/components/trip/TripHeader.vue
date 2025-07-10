<template>
  <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
    <TitleSeeThrough class="text-4xl" />
    <div
      class="w-full flex gap-2 items-center justify-center text-sm text-blue-gray-800 dark:text-blue-gray-300"
    >
      <h3 :class="{ 'animate-my-tada': bounceIndex === 5 }">
        <a href="#" @click.prevent="collection = CollectionType.Highlights">highlights</a>
      </h3>
      <p>•</p>
      <h3 :class="{ 'animate-my-tada': bounceIndex === 6 }">
        <a href="#" @click.prevent="collection = CollectionType.Music">music</a>
      </h3>
      <p>•</p>
      <h3 :class="{ 'animate-my-tada': bounceIndex === 7 }">
        <a href="#" @click.prevent="collection = CollectionType.People">people</a>
      </h3>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { CollectionType } from '/@/types/trip'
import { useTripState } from '/@/composables/useTripState'

const { collection } = useTripState()

const bounceIndex = ref(-1)
let interval: number | undefined

onMounted(() => {
  interval = window.setInterval(() => {
    bounceIndex.value = (bounceIndex.value + 1) % 8 // cycle through 0, 1, 2... 7
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
