<template>
  <div class="flex justify-between gap-2">
    <!-- <span
      class="hidden sm:block p-2.5 shadow-sm rounded-xl cursor-pointer"
    >
      <i data-feather="search"></i>
    </span> -->
    <input
      @input="(event) => filterSearch((event.target as HTMLInputElement).value)"
      class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 rounded-lg text-sm sm:text-md"
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
// import feather from 'feather-icons'

defineProps<{
  filterSearch: (filter: string) => void
}>()

// onMounted(() => {
//   feather.replace()
// })
</script>

<style scoped></style>
