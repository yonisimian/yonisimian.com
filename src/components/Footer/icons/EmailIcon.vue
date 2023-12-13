<template>
  <FooterIcon
    :class="{ 'animate-my-tada': animate }"
    title="Email Me"
    href="mailto:yonisimian@gmail.com"
    i="i-ph-envelope-simple"
  />
</template>

<script setup lang="ts">
import { useReachOutAnimation } from '/@/composables/useReachOut'

const { animate } = useReachOutAnimation()
</script>

<style scoped>
/* same as uno css' tada, but with scale to 1.2 instead of 1.1, and no 90% keyframe */
@keyframes my-tada {
  from {
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70% {
    transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.2, 1.2, 1.2) rotate3d(0, 0, 1, -3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
.animate-my-tada {
  animation: my-tada 1s linear 1;
}
</style>
