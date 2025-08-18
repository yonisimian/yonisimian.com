<template>
  <YGalleryCardBack :discard>
    <PortfolioBackLogo class="sm:block hidden" :src="project.img" :alt="project.title" />
    <YCloseButton @click="discard" />
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
  </YGalleryCardBack>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { Project } from '/@/types/portfolio'
import { useFreezeScroll } from '/@/composables/useFreezeScroll'

defineProps<{
  project: Project
  discard: () => void
}>()

const { freezeScroll, unfreezeScroll } = useFreezeScroll()

onMounted(freezeScroll)
onBeforeUnmount(unfreezeScroll)
</script>

<style scoped></style>
