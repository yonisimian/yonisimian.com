<template>
  <div
    class="notebook-bg flex flex-row relative w-full"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @wheel="onWheel"
  >
    <div class="write-area rows-pattern">
      <slot name="page" />
    </div>
    <div class="margin-area rows-pattern">
      <slot name="margin" />
    </div>
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
  color: rgb(95, 44, 15);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.dark .notebook-bg::before {
  background: #852413;
  opacity: 0.25;
}

.write-area {
  padding: 2rem 1.5rem;
}

.margin-area {
  min-width: calc(min(0.69in, 12vw));
  max-width: 0.69in;
  border-left: 2px solid #e11d481e;
}

.rows-pattern {
  background: repeating-linear-gradient(
    to bottom,
    #f5f5f5,
    #f5f5f5 28px,
    #e5e5e5 29px,
    #f5f5f5 30px
  );
}

.dark .rows-pattern {
  background: repeating-linear-gradient(
    to bottom,
    #0f172a,
    #0f172a 28px,
    #1e293b 29px,
    #0f172a 30px
  );
}
</style>
