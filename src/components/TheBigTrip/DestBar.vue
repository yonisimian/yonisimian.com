<template>
  <div
    class="h-scroll-outer w-full overflow-hidden flex items-center justify-center"
    ref="containerRef"
  >
    <div
      class="h-scroll w-full flex"
      :style="scrollStyle"
      @wheel.prevent="onWheel"
      @mousedown="onDragStart"
      @mousemove="onDragMove"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
      @touchstart="onDragStart"
      @touchmove="onDragMove"
      @touchend="onDragEnd"
    >
      <DestBarItem
        v-for="(dest, index) in destinations"
        :key="index"
        :dest
        :date="dates?.at(index)"
        :isCurrDest="isCurrDest(dest)"
        :chooseDest
      />
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends { name: string }">
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  destinations: T[]
  dates?: string[]
  currDest: T
  chooseDest: (dest: T) => void
}>()

const ITEM_WIDTH = 192 // px, must match DestBarItem min-width + margin in CSS

const isCurrDest = (dest: T) => {
  if (!dest || !props.currDest) return false
  if ('id' in dest && 'id' in props.currDest) {
    return dest.id === props.currDest.id
  }
  return dest === props.currDest
}

const currIdx = computed(() => props.destinations.findIndex(isCurrDest))

// === Fixture: initial position of the DestBarItems was not correct ===
const containerRef = ref<HTMLElement | null>(null)
const containerWidth = ref<number | null>(null)

onMounted(() => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.clientWidth
  }
})

// Optional: Update width on window resize
window.addEventListener('resize', () => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.clientWidth
  }
})

// Watch for changes in currIdx or containerWidth and update scroll
watch([currIdx, containerWidth], () => {
  // This will trigger recomputation of scrollStyle
})
// === End Fixture ===

const scrollStyle = computed(() => {
  // Center the current destination
  const centerIdx = currIdx.value
  // const containerWidth = document.querySelector('.h-scroll-outer')?.clientWidth
  if (centerIdx === -1 || !containerWidth.value) return {}
  const offset = centerIdx * ITEM_WIDTH + ITEM_WIDTH / 2 - containerWidth.value / 2
  return {
    transform: `translateX(${-offset}px)`,
    // transition: 'transform 0.6s cubic-bezier(.4,1.4,.6,1)' // a bit harsh
    transition: 'transform 0.5s cubic-bezier(.4,1.15,.8,1)'
  }
})

const onWheel = (e: WheelEvent) => {
  if (!props.destinations?.length) return
  const idx = currIdx.value
  if (idx === -1) return

  if ((e.deltaY < 0 || e.deltaX > 0) && idx > 0) {
    // Scroll up / left: previous destination
    props.chooseDest(props.destinations[idx - 1])
  } else if ((e.deltaY > 0 || e.deltaX < 0) && idx < props.destinations.length - 1) {
    // Scroll down / right: next destination
    props.chooseDest(props.destinations[idx + 1])
  }
}

// --- Drag/Swipe logic ---
const startX = ref<number | null>(null)
const dragging = ref(false)

const onDragStart = (e: MouseEvent | TouchEvent) => {
  dragging.value = true
  if (e instanceof TouchEvent) {
    startX.value = e.touches[0].clientX
  } else {
    startX.value = e.clientX
  }
}

const onDragMove = (e: MouseEvent | TouchEvent) => {
  if (!dragging.value || startX.value === null) return
  let currentX
  if (e instanceof TouchEvent) {
    currentX = e.touches[0].clientX
  } else {
    currentX = e.clientX
  }
  const dx = currentX - startX.value
  // Only trigger if drag is significant
  if (Math.abs(dx) > 10) {
    const idx = currIdx.value
    if (dx > 0 && idx > 0) {
      props.chooseDest(props.destinations[idx - 1])
    } else if (dx < 0 && idx < props.destinations.length - 1) {
      props.chooseDest(props.destinations[idx + 1])
    }
    dragging.value = false
    startX.value = null
  }
}

const onDragEnd = () => {
  dragging.value = false
  startX.value = null
}
</script>

<style scoped>
.h-scroll-outer {
  /* Add a fade effect using mask-image */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
}
</style>
