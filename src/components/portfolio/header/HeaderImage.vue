<template>
  <div
    class="header-image-container relative flex items-center justify-center w-[40vh] max-w-[100vw] max-h-[40vh]"
  >
    <ResponsiveImage
      src="/media/portfolio/pp.webp"
      alt="Yehonatan Simian"
      imgClass="rounded-full aspect-ratio-1/1 transition-shadow dark:shadow-[0_0_8px_#00b3ff]"
      fetchpriority="high"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-image-container {
  height: min(40vh, 100vw);
}
</style>
