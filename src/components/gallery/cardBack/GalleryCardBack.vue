<template>
  <DarkBackground />
  <BackBackground @click="discard">
    <BackCard @click.stop>
      <BackLogo class="sm:block hidden" :src="project.img" :alt="project.title" />
      <BackCategory :category="project.category" />
      <BackTitle :title="project.title" />
      <BackDesc v-for="_ in [1, 2, 3, 4, 5]" :description="'description'" />
      <BackDesc :description="'what skills I\'ve aquired'" />
      <BackDesc :description="'what I\'d do differently'" />
      <BackDesc :description="'links and stuff'" />
    </BackCard>
  </BackBackground>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { Project } from '/@/types/types'

defineProps<{
  project: Project
  discard: () => void
}>()

let scrollPosition = 0

onMounted(() => {
  // Store the scroll position
  scrollPosition = document.documentElement.scrollTop

  // Make the body unscrollable
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = `-${scrollPosition}px` // Offset the body position by the scroll position
})

onBeforeUnmount(() => {
  // Make the body scrollable again
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''

  // Restore the scroll position
  window.scrollTo(0, scrollPosition)
})
</script>

<style scoped></style>
