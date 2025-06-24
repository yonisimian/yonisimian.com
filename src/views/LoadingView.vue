<template>
  <div class="w-full h-[85vh] flex items-center justify-start">
    <img
      src="/@/assets/sonic.gif"
      alt="Sonic walking (because the site is not RUNNING yet ha-ha)"
      class="sonic h-32"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes run-across {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(100vw);
  }
}

.sonic {
  animation: run-across 8s linear infinite;
}
</style>
