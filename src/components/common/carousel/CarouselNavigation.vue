<template>
  <div class="carousel-navigation">
    <button @click="$emit('prev')" class="nav-button nav-button-prev" :disabled="!canGoPrev">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>
    </button>

    <button @click="$emit('next')" class="nav-button nav-button-next" :disabled="!canGoNext">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  canGoPrev?: boolean
  canGoNext?: boolean
}

withDefaults(defineProps<Props>(), {
  canGoPrev: true,
  canGoNext: true
})

defineEmits<{
  prev: []
  next: []
}>()
</script>

<style scoped>
.carousel-navigation {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
}

.nav-button {
  pointer-events: auto;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0 2px;
}

.nav-button:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
