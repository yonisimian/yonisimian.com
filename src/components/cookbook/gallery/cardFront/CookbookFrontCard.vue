<template>
  <div
    class="card aspect-square rounded-xl bg-sky-400/5 shadow-lg hover:shadow-xl cursor-pointer select-none backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] dark:bg-ternary-dark"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-property: opacity, box-shadow, color, background-color;
  border: 1px solid transparent;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom, #9ee1fe99, #00000000);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.dark .card::before {
  background: linear-gradient(to bottom, #00b3ff88, #00000000);
}

.card:hover::before {
  opacity: 1;
}

.card :deep(img) {
  transform: scale(1);
  transition: transform 0.5s ease;
}

.card:hover :deep(img) {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
</style>
