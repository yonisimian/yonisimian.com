<template>
  <select
    @change="event => filterCategory((event.target as HTMLInputElement).value)"
    :name="'galleryFilter'"
    :id="'galleryFilter'"
    class="font-general-medium px-4 py-2 border-1 rounded-lg text-sm sm:text-md"
  >
    <option value class="text-sm sm:text-md">All Projects</option>
    <option v-for="option in ProjectCategory" :key="option" :value="option" class="sm:text-md">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ProjectCategory } from '/@/types/types'

defineProps<{
  filterCategory: (filter: string) => void
}>()
</script>

<style scoped></style>
