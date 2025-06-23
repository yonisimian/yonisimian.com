<template>
  <form class="flex justify-between gap-2" novalidate>
    <input
      @input="(event) => filterSearch((event.target as HTMLInputElement).value)"
      class="pl-3 pr-1 sm:px-4 py-2 min-w-full outline-none border-1 border-sky-900 dark:border-gray-200 rounded-full text-sm sm:text-md"
      id="name"
      name="name"
      type="search"
      required="false"
      :placeholder
      aria-label="Name"
      autocomplete="off"
    />
  </form>
</template>

<script setup lang="ts">
defineProps<{
  filterSearch: (filter: string) => void
  placeholder: string
}>()
</script>

<style scoped>
input:focus {
  box-shadow: 0 0 2px #001e24;
}
.dark input:focus {
  box-shadow: 0 0 1px #00d9ff, 0 0 2px #00d9ff, 0 0 3px #00d9ff, 0 0 4px #00d9ff;
}
</style>
