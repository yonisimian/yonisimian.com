<template>
  <section class="flex justify-between border-b pb-3 gap-2">
    <GallerySearch :filterSearch="filterSearch" />
    <GalleryFilter :filterCategory="filterCategory" />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  filterCategory: (filter: string) => void
  filterSearch: (filter: string) => void
}>()
</script>

<style scoped></style>
