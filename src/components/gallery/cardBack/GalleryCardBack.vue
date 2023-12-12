<template>
  <DarkBackground />
  <BackBackground @click="discard">
    <BackCard @click.stop class="relative">
      <BackLogo class="sm:block hidden" :src="project.img" :alt="project.title" />
      <BackCloseButton @click="discard" />
      <BackCategory :category="project.category" />
      <BackTitle :title="project.title" />
      <BackDesc :description="project.description" />
      <BackTitledDesc
        v-if="project.wilfi"
        :title="'What I\'ve learned from it'"
        :desc="project.wilfi"
        :class="{ 'pb-2': project.wiwdd }"
      />
      <BackTitledDesc
        v-if="project.wiwdd"
        :title="'What I\'d do differently'"
        :desc="project.wiwdd"
      />
      <BackEmbed v-if="project.embed" :link="project.embed" />
      <BackTitledDesc v-if="project.notes" :title="'Notes'" :desc="project.notes" />
      <BackLinks v-if="project.links" :links="project.links" />
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
