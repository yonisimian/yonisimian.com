<template>
  <div
    class="card grid grid-rows-3 rounded-xl bg-sky-400/5 shadow-lg hover:shadow-xl cursor-pointer select-none mb-10 sm:mb-0 backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] transform hover:scale-107 dark:bg-ternary-dark"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  transition-duration: 0.5s, 0.2s, 0.5s;
  transition-timing-function: ease, ease, ease;
  transition-property: transform, box-shadow, color;
}

.dark .card:hover {
  border: 1px solid #00b3ff;
  box-shadow: 0 0 4px #00b3ff;
}

@keyframes glow {
  0% {
    top: -5px;
    left: -10px;
  }
  25% {
    top: -5px;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  75% {
    top: 100%;
    left: -5px;
  }
  100% {
    top: 0;
    left: -5px;
  }
}
</style>
