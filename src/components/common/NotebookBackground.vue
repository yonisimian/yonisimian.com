<template>
  <div
    class="notebook-bg"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @wheel="onWheel"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onTouchStart: (e: TouchEvent) => void
  onTouchEnd: (e: TouchEvent) => void
  onMouseDown: (e: MouseEvent) => void
  onMouseUp: (e: MouseEvent) => void
  onWheel: (e: WheelEvent) => void
}>()
</script>

<style scoped>
.notebook-bg {
  width: 100%;
  color: rgb(95, 44, 15);
  background: repeating-linear-gradient(
    to bottom,
    #f5f5f5,
    #f5f5f5 28px,
    #e5e5e5 29px,
    #f5f5f5 30px
  );
  padding: 1.5rem 5.5rem 1.5rem 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
  user-select: none; /* Prevent text selection during drag */
}

.notebook-bg::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0.69in;
  width: 2px;
  height: 100%;
  background: #e11d48;
  z-index: 1;
  border-radius: 1px;
  opacity: 0.1;
}

/* TODO: thank @mikehearn https://www.transparenttextures.com/ for the textures */

.notebook-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/@/assets/textures/clean-gray-paper.png');
  background-size: cover;
  background-repeat: repeat;
  opacity: 0.3;
  z-index: 0;
}

.dark .notebook-bg::after {
  background-image: url('/@/assets/textures/black-paper.png');
}

.dark .notebook-bg {
  color: #d0c8b8;
  background: repeating-linear-gradient(
    to bottom,
    #0f172a,
    #0f172a 28px,
    #1e293b 29px,
    #0f172a 30px
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.dark .notebook-bg::before {
  background: #852413;
  opacity: 0.25;
}
</style>
