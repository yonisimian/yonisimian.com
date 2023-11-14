<template>
  <div
    class="card grid grid-rows-3 rounded-xl bg-sky-400/5 shadow-lg hover:shadow-xl cursor-pointer select-none mb-10 sm:mb-0 backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] dark:bg-ternary-dark"
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
