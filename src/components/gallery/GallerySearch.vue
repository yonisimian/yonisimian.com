<template>
  <div class="flex justify-between gap-2">
    <input
      @input="(event) => filterSearch((event.target as HTMLInputElement).value)"
      class="font-general-medium pl-3 pr-1 sm:px-4 py-2 min-w-full border-1 border-gray-200 dark:border-secondary-dark rounded-full text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
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
