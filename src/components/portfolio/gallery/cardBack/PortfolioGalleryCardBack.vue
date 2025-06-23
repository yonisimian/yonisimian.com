<template>
  <DarkBackground />
  <CardBackBackground @click="discard">
    <PortfolioBackCard @click.stop class="relative">
      <PortfolioBackLogo class="sm:block hidden" :src="project.img" :alt="project.title" />
      <CardBackCloseButton @click="discard" />
      <PortfolioBackCategory :category="project.category" />
      <PortfolioBackTitle :title="project.title" />
      <PortfolioBackDesc :description="project.description" />
      <PortfolioBackTitledDesc
        v-if="project.wilfi"
        :title="'What I\'ve learned from it'"
        :desc="project.wilfi"
        :class="{ 'pb-2': project.wiwdd }"
      />
      <PortfolioBackTitledDesc
        v-if="project.wiwdd"
        :title="'What I\'d do differently'"
        :desc="project.wiwdd"
      />
      <PortfolioBackEmbed v-if="project.embed" :link="project.embed" />
      <PortfolioBackTitledDesc v-if="project.notes" :title="'Notes'" :desc="project.notes" />
      <PortfolioBackLinks v-if="project.links" :links="project.links" />
    </PortfolioBackCard>
  </CardBackBackground>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { Project } from '/@/types/portfolio'

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
