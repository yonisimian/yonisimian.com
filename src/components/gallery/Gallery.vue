<template>
  <article class="pt-10 sm:pt-14">
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
import { Project, ProjectCategory } from '/@/types/types'

const selectedCategory = ref('')
const searchProject = ref('')
const projects = ref<Project[]>([])

projects.value.push({
  title: 'project title',
  category: ProjectCategory.music,
  img: 'project image'
})

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
