<template>
  <div
    class="header-image-container relative flex items-center justify-center w-[40vh] max-w-[100vw] max-h-[40vh]"
    @click="nextImage"
  >
    <ResponsiveImage
      :src="`/media/portfolio/pp/${index}.webp`"
      alt="Yehonatan Simian - Profile Picture"
      imgClass="rounded-full aspect-ratio-1/1 transition-all duration-500 dark:shadow-[0_0_8px_#00b3ff]"
      fetchpriority="high"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const index = ref(0)

const nextImage = () => {
  index.value = (index.value + 1) % 4
}
</script>

<style scoped>
.header-image-container {
  height: min(40vh, 100vw);
}
</style>
