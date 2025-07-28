<template>
  <div class="w-full h-full flex items-center justify-start">
    <img
      :src="sonicGifSrc"
      alt="Sonic walking (because the site is not RUNNING yet ha-ha)"
      class="sonic h-32 md:h16"
    />
  </div>
</template>

<script setup lang="ts">
const sonicGifSrc = window.matchMedia('(min-width: 768px)').matches
  ? '/loading/sonic-run.gif'
  : '/loading/sonic-walk.gif'
</script>

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
  animation: run-across 3s linear infinite;
}
</style>
