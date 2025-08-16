<template>
  <AnimateOnScroll
    class="group card rounded-xl relative overflow-hidden bg-sky-400/5 shadow-lg hover:shadow-xl select-none backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] transition-all duration-300 ease"
  >
    <slot />
  </AnimateOnScroll>
</template>

<script setup lang="ts"></script>

<style scoped>
.card :deep(img) {
  transform: scale(1);
  transition: transform 0.5s ease;
  z-index: 20;
}

.card:hover :deep(img) {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
</style>
