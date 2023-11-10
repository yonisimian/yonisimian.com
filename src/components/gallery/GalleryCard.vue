<template>
  <!-- <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <GalleryCardFront :project="project" />
      </div>
      <div class="flip-card-back">
        <GalleryCardBack :project="project" />
      </div>
    </div>
  </div> -->

  <div>
    <GalleryCardBack v-if="isChosen" :discard="() => (isChosen = false)" :project="project" />
    <GalleryCardFront @click="isChosen = true" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'
import { ref } from 'vue'

defineProps<{
  project: Project
}>()

// @ts-ignore
const isChosen = ref(false)
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  height: 100%;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
