<template>
  <div v-show="visible" class="love-animation">
    <!-- Pink radial gradient overlay -->
    <div class="pink-overlay"></div>

    <!-- Rotating rays -->
    <div class="rays-container">
      <div
        class="ray"
        v-for="i in 8"
        :key="i"
        :style="{ transform: `rotate(${(i - 1) * 45}deg)` }"
      ></div>
    </div>

    <!-- Rising hearts -->
    <div class="hearts-container">
      <!-- Small hearts (slow) -->
      <div class="heart heart-small" v-for="i in 6" :key="`small-${i}`" :style="getHeartStyle()">
        💕
      </div>
      <!-- Medium hearts (medium speed) -->
      <div class="heart heart-medium" v-for="i in 4" :key="`medium-${i}`" :style="getHeartStyle()">
        💖
      </div>
      <!-- Large hearts (fast) -->
      <div class="heart heart-large" v-for="i in 3" :key="`large-${i}`" :style="getHeartStyle()">
        💗
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSecrets } from '/@/composables/useSecrets'

const { addSecretCallback } = useSecrets()
const visible = ref(false)

const activateAnimation = () => {
  visible.value = true
  // Hide after 5 seconds
  setTimeout(() => {
    visible.value = false
  }, 5000)
}

const getHeartStyle = () => {
  const baseDelay = Math.random() * 2 // Random delay 0-2s
  const horizontalPosition = Math.random() * 100 // Random horizontal position

  return {
    left: `${horizontalPosition}%`,
    animationDelay: `${baseDelay}s`
  }
}

addSecretCallback('iloveyou', activateAnimation)
</script>

<style scoped>
.love-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
  overflow: hidden;
  animation: fade 5s ease-in-out;
}

/* Pink radial gradient overlay */
.pink-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(236, 72, 153, 0.6), rgba(251, 207, 232, 0.3));
  animation: pulse 5s ease-out;
}

/* Rotating rays container */
.rays-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 0 0;
  animation: rotate 5s linear infinite;
}

/* Individual ray */
.ray {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  margin-left: -100px;
  transform-origin: 100px 0;
  /* Create triangle shape */
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Hearts container */
.hearts-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Base heart styles */
.heart {
  position: absolute;
  bottom: -100px;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  user-select: none;
  opacity: 0.9;
}

/* Small hearts - slowest */
.heart-small {
  font-size: 1.5rem;
  color: #f8bbd9;
  animation: rise-slow 6s linear infinite;
}

/* Medium hearts - medium speed */
.heart-medium {
  font-size: 2.5rem;
  color: #f472b6;
  animation: rise-medium 4s linear infinite;
}

/* Large hearts - fastest */
.heart-large {
  font-size: 5rem;
  color: #ec4899;
  animation: rise-fast 3s linear infinite;
}

/* Keyframe animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0;
  }
}

@keyframes rise-slow {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: translateX(0) scale(1);
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    bottom: 100vh;
    opacity: 0;
    transform: translateX(20px) scale(0.8);
  }
}

@keyframes rise-medium {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: translateX(0) scale(1);
  }
  15% {
    opacity: 0.9;
  }
  85% {
    opacity: 0.9;
  }
  100% {
    bottom: 100vh;
    opacity: 0;
    transform: translateX(-15px) scale(1.1);
  }
}

@keyframes rise-fast {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: translateX(0) scale(1);
  }
  20% {
    opacity: 0.9;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    bottom: 100vh;
    opacity: 0;
    transform: translateX(10px) scale(1.2);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .heart-small {
    font-size: 1.2rem;
  }

  .heart-medium {
    font-size: 2rem;
  }

  .heart-large {
    font-size: 3rem;
  }
}
</style>
