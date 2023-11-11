<template>
  <div
    class="grid grid-rows-3 rounded-xl bg-sky-400/5 shadow-lg hover:shadow-xl cursor-pointer select-none mb-10 sm:mb-0 backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] transform transition-transform transition-shadow transition-opacity transition-colors duration-500 hover:scale-107 dark:bg-ternary-dark"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid {
  position: relative;
  overflow: hidden;
}

.dark .grid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: #00b3ff;
  box-shadow: 0 0 5px #00b3ff, 0 0 10px #00b3ff, 0 0 15px #00b3ff, 0 0 20px #00b3ff;
  border-radius: 50%;
  animation: glow 3s infinite linear;
  visibility: hidden;
}

.grid:hover::before {
  visibility: visible;
}

@keyframes glow {
  0% {
    top: -10px;
    left: -20px;
  }
  25% {
    top: -10px;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  75% {
    top: 100%;
    left: -10px;
  }
  100% {
    top: 0;
    left: -10px;
  }
}
</style>
