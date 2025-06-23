<template>
  <main class="pt-6 sm:pt-14 pb-16 min-h-[100svh]">
    <h2 class="text-4xl font-bold mb-8 text-center">My Projects</h2>
    <GalleryBar
      :selectedCategories="selectedCategories"
      :toggleCategory="toggleCategory"
      :filterSearch="(text: string) => searchProject = text"
      :isHighlightsSelected="selectedHighlights"
      :toggleHighlights="toggleHighlights"
    />

    <GalleryGrid :projects="filteredProjects" />
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

const filteredProjects = computed(() => {
  let filtered = projects.value
  if (selectedHighlights.value) {
    filtered = filterProjectsByHighlights(filtered)
  }
  if (selectedCategories.value) {
    filtered = filterProjectsByCategory(filtered)
  }
  if (searchProject.value) {
    filtered = filterProjectsBySearch(filtered)
  }
  return filtered
})

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

const filterProjectsByCategory = (projects: Project[]) => {
  if (!selectedCategories.value.length) return projects
  return projects.filter((item) => selectedCategories.value.includes(item.category))
}

const filterProjectsBySearch = (projects: Project[]) => {
  let project = new RegExp(searchProject.value, 'i')
  return projects.filter((el) => el.title.match(project) || el.category.match(project))
}

const filterProjectsByHighlights = (projects: Project[]) => {
  return projects.filter((item) => item.highlight === true)
}
</script>

<style scoped></style>
