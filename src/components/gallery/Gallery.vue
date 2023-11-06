<template>
  <article class="my-10 pt-10 sm:pt-14">
    <GalleryFilterSearch
      :filterCategory="(text: string) => selectedCategory = text"
      :filterSearch="(text: string) => searchProject = text"
    />

    <GalleryGrid :projects="filteredProjects" />
  </article>
</template>

<script setup lang="ts">
// import projects from '../../data/projects'

import { ref, computed } from 'vue'
import { Project } from '/@/types/types'
import projectsData from '/@/data/projects'

const selectedCategory = ref('')
const searchProject = ref('')
const projects = ref<Project[]>(projectsData)

const filteredProjects = computed(() => {
  let filtered = projects.value
  if (selectedCategory.value) {
    filtered = filterProjectsByCategory(filtered)
  }
  if (searchProject.value) {
    filtered = filterProjectsBySearch(filtered)
  }
  return filtered
})

const filterProjectsByCategory = (projects: Project[]) => {
  return projects.filter((item) => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1)
    return category.includes(selectedCategory.value)
  })
}

const filterProjectsBySearch = (projects: Project[]) => {
  let project = new RegExp(searchProject.value, 'i')
  return projects.filter((el) => el.title.match(project))
}
</script>

<style scoped></style>
