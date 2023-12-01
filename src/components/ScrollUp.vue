<template>
  <Transition name="scrollUp">
    <div v-show="!isTop" :class="'fixed bottom-2 right-4'">
      <button class="hover:animate-tada" @click="scrollToheader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6 m-auto"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14 l-7-7 l-7 7"
          ></path>
        </svg>
      </button>
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
