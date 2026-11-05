<template>
  <div
    class="header-image-container relative flex items-center justify-center w-[40vh] max-w-[100vw] max-h-[40vh]"
    @click="nextImage"
  >
    <ResponsiveImage
      :src="src(index)"
      alt="Yehonatan Simian - Profile Picture"
      imgClass="rounded-full aspect-ratio-1/1 transition-all duration-500 shadow-[0_0_12px_#666] dark:shadow-[0_0_8px_#00b3ff]"
      fetchpriority="high"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const COUNT = 4
const src = (i: number) => `/media/portfolio/pp/${i}.webp`
const index = ref(0)

const nextImage = () => {
  index.value = (index.value + 1) % COUNT
}

onMounted(() => {
  for (let i = 1; i < COUNT; i++) new Image().src = src(i)
})
</script>

<style scoped>
.header-image-container {
  height: min(40vh, 100vw);
}
</style>
