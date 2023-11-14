<template>
  <main class="pt-6 sm:pt-14 min-h-screen">
    <GalleryFilterSearch
      :selectedCategories="selectedCategories"
      :toggleCategory="toggleCategory"
      :filterSearch="(text: string) => searchProject = text"
    />

    <GalleryGrid :projects="filteredProjects" />
  </main>
</template>

<script setup lang="ts">
// import projects from '../../data/projects'

import { ref, computed } from 'vue'
import { Project, ProjectCategory } from '/@/types/types'
import projectsData from '/@/data/projects'

const selectedCategories = ref<ProjectCategory[]>([])
const searchProject = ref('')
const projects = ref<Project[]>(projectsData)

const filteredProjects = computed(() => {
  let filtered = projects.value
  if (selectedCategories.value) {
    filtered = filterProjectsByCategory(filtered)
  }
  if (searchProject.value) {
    filtered = filterProjectsBySearch(filtered)
  }
  return filtered
})

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
</script>

<style scoped></style>
