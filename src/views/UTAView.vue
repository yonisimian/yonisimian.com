<template>
  <div
    ref="containerRef"
    class="w-screen h-screen fixed overflow-hidden top-0 left-0 z-10"
    @mousemove="isVideoButtonVisible = true"
    @mouseleave="isVideoButtonVisible = false"
    @click="togglePlay"
  >
    <div class="kingdom-container"></div>
    <div class="w-full h-full justify-center items-center flex">
      <audio ref="audio" hidden>
        <source src="/media/misc/uta.mp3" type="audio/mpeg" />
      </audio>
      <Transition
        enterActiveClass="transition-opacity duration-200"
        enterFromClass="opacity-0"
        enterToClass="opacity-100"
        leaveActiveClass="transition-opacity duration-500"
        leaveFromClass="opacity-100"
        leaveToClass="opacity-0"
      >
        <VideoPlayButton
          v-show="isVideoButtonVisible || !isPlaying"
          class="rounded-full flex items-center justify-center bg-transparent z-20"
          :isPlaying
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const audio = ref<HTMLAudioElement | null>(null)

const isPlaying = ref(false)
const isVideoButtonVisible = ref(true)
const containerRef = ref<HTMLElement | null>(null)
let timeout: number | undefined = undefined

const togglePlay = () => {
  showAndAutoHideButton()
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      audio.value.play().catch(() => console.log('Autoplay prevented'))
      isPlaying.value = true
    }
  }
}

const showAndAutoHideButton = () => {
  isVideoButtonVisible.value = true
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    if (isPlaying.value) {
      isVideoButtonVisible.value = false
    }
  }, 1500)
}

const onMouseMove = () => {
  showAndAutoHideButton()
}

watch(isPlaying, (playing) => {
  if (!playing) {
    isVideoButtonVisible.value = true
    clearTimeout(timeout)
    timeout = undefined
  }
})

onMounted(() => {
  containerRef.value?.addEventListener('mousemove', onMouseMove)
})
onUnmounted(() => {
  containerRef.value?.removeEventListener('mousemove', onMouseMove)
  clearTimeout(timeout)
})
</script>

<style scoped>
.kingdom-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/media/misc/uta.webp');
  background-repeat: repeat;
  background-size: auto;
  animation: diagonalScroll 40s linear infinite;
  opacity: 1;
  filter: blur(3px);
}

@keyframes diagonalScroll {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 2159px 2159px;
  }
}
</style>
