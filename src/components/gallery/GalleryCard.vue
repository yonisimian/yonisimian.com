<template>
  <div>
    <Transition name="slide">
      <div v-if="isChosen">
        <GalleryCardBack :discard="() => (isChosen = false)" :project="project" />
      </div>
    </Transition>
    <GalleryCardFront @click="onClick" @touchend="onClick" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'
import { ref } from 'vue'

defineProps<{
  project: Project
}>()

const isChosen = ref(false)

const onClick = () => {
  isChosen.value = true
}
</script>

<style scoped>
/* .slide-leave-active {
  transition: all 0.5s;
} */
</style>
