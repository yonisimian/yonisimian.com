<template>
  <div>
    <Transition name="slide">
      <div v-if="isChosen">
        <GalleryCardBack :discard="() => (isChosen = false)" :project="project" />
      </div>
    </Transition>
    <GalleryCardFront @click="isChosen = true" :project="project" />
  </div>
</template>

<script setup lang="ts">
import { Project } from '/@/types/types'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  id: string
  project: Project
}>()

const isChosen = ref(false)

onMounted(() => {
  const hash = window.location.hash
  if (hash.substring(1) === props.id) {
    isChosen.value = true
  }
})
</script>

<style scoped>
/* .slide-leave-active {
  transition: all 0.5s;
} */
</style>
