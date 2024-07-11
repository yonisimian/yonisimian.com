<template>
  <Transition name="scrollToEdge">
    <div v-show="!isAtEdge">
      <ScrollButton :direction="direction" :handleClick="scrollToEdge" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  direction: 'up' | 'down'
}>()

const edge = ref<HTMLElement | null>(null)
const isAtEdge = ref(props.direction === 'up')

onMounted(() => {
  edge.value = document.querySelector(props.direction === 'up' ? 'header' : 'footer')
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isAtEdge.value =
    props.direction === 'up'
      ? window.scrollY === 0
      : window.scrollY + window.innerHeight === document.body.scrollHeight
}

const scrollToEdge = () => {
  edge.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.scrollToEdge-leave-active,
.scrollToEdge-enter-active {
  transition: opacity 0.69s;
}
.scrollToEdge-enter-from,
.scrollToEdge-leave-to {
  opacity: 0;
}
.scrollToEdge-enter-to,
.scrollToEdge-leave-from {
  opacity: 1;
}
</style>
