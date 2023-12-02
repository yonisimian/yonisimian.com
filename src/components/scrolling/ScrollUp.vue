<template>
  <Transition name="scrollUp">
    <div v-show="!isTop" :class="'fixed bottom-2 right-6 sm:right-4'">
      <ScrollButton :direction="'up'" :handleClick="scrollToheader" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

let header = ref<HTMLElement | null>(null)
const isTop = ref(true)

onMounted(() => {
  header.value = document.querySelector('header')
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isTop.value = window.scrollY === 0
}

const scrollToheader = () => {
  header.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.scrollUp-leave-active,
.scrollUp-enter-active {
  transition: opacity 0.69s;
}
.scrollUp-enter-from,
.scrollUp-leave-to {
  opacity: 0;
}
.scrollUp-enter-to,
.scrollUp-leave-from {
  opacity: 1;
}
</style>
