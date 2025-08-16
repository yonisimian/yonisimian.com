<template>
  <Transition name="scrollToEdge">
    <div v-show="!isAtEdge">
      <ScrollButton
        :direction="direction"
        :handleClick="scrollToEdge"
        :ariaLabel="`Scroll ${direction}`"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  direction: 'up' | 'down'
}>()

const isAtEdge = ref(props.direction === 'up')

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Set initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  const atTop = window.scrollY === 0
  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 1
  isAtEdge.value = props.direction === 'up' ? atTop : atBottom
}

const scrollToEdge = () => {
  if (props.direction === 'up') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
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
