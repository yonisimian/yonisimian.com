<template>
  <div class="flex justify-between gap-2">
    <input
      @input="(event) => filterSearch((event.target as HTMLInputElement).value)"
      class="pl-3 pr-1 sm:px-4 py-2 min-w-full border-1 border-sky-900 dark:border-gray-200 rounded-full text-sm sm:text-md"
      id="name"
      name="name"
      type="search"
      required="false"
      placeholder="Search Projects"
      aria-label="Name"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  filterSearch: (filter: string) => void
}>()
</script>

<style scoped></style>
