<template>
  <main class="pt-6 sm:pt-14 pb-16 min-h-[100svh]">
    <YGalleryHeader>My Projects</YGalleryHeader>
    <PortfolioGalleryBar
      :selectedCategories="selectedCategories"
      :toggleCategory="toggleCategory"
      :filterSearch="(text: string) => searchProject = text"
      :isHighlightsSelected="selectedHighlights"
      :toggleHighlights="toggleHighlights"
    />

    <YGallery :items="filteredProjects" :sortFn="projectsSortFunc" class="mt-3">
      <template #CardFront="{ item, onClick }">
        <PortfolioGalleryCardFront :project="item" @click="onClick" />
      </template>
      <template #CardBack="{ item, discard }">
        <PortfolioGalleryCardBack :project="item" :discard="discard" />
      </template>
    </YGallery>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Project, ProjectCategory } from '/@/types/portfolio'
import projectsData from '/@/data/projects'

const selectedCategories = ref<ProjectCategory[]>([])
const selectedHighlights = ref(false)
const searchProject = ref('')
const projects = ref<Project[]>(projectsData)

const projectsSortFunc = (a: Project, b: Project) =>
  (b.year ?? Number.MIN_SAFE_INTEGER) - (a.year ?? Number.MIN_SAFE_INTEGER)

const filteredProjects = computed(() =>
  projects.value.filter((project) => {
    // Highlights filter
    if (selectedHighlights.value && !project.highlight) {
      return false
    }

    // Categories filter
    if (
      selectedCategories.value.length > 0 &&
      !selectedCategories.value.includes(project.category)
    ) {
      return false
    }

    // Search filter
    if (searchProject.value) {
      const searchTerm = searchProject.value.toLowerCase()
      const titleMatch = project.title.toLowerCase().includes(searchTerm)
      const categoryMatch = project.category.toLowerCase().includes(searchTerm)
      const descriptionMatch = project.description?.toLowerCase().includes(searchTerm) // Optional: search in description too

      if (!titleMatch && !categoryMatch && !descriptionMatch) {
        return false
      }
    }

    return true
  })
)

const toggleHighlights = () => {
  selectedHighlights.value = !selectedHighlights.value
}

const toggleCategory = (category: ProjectCategory) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter((item) => item !== category)
  } else {
    selectedCategories.value.push(category)
  }
}
</script>

<style scoped></style>
