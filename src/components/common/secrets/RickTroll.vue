<template>
  <div v-show="visible">
    <YDarkBackground />
    <div class="fixed top-0 left-0 w-screen h-screen z-9999 flex justify-center items-center">
      <video ref="video" class="max-w-full max-h-full" @ended="visible = false">
        <source src="/media/misc/RickTroll.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useSecrets } from '/@/composables/useSecrets'

const { addSecretCallback } = useSecrets()

const visible = ref(false)
const video = ref<HTMLVideoElement | null>(null)

const activateRickroll = () => {
  if (video.value) {
    visible.value = true
    video.value.play()
  }
}

onMounted(() => {
  if (typeof HTMLVideoElement !== 'undefined' && video.value) {
    addSecretCallback('konami', activateRickroll)
  }
})
</script>

<style scoped></style>
