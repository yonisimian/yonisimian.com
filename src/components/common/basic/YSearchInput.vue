<template>
  <div class="relative">
    <span
      class="i-ph-magnifying-glass-duotone text-gray-400 absolute top-1/2 -translate-y-1/2 text-xl"
      :class="currDir === 'rtl' ? 'right-4' : 'left-4'"
    />
    <input
      @input="(event) => filterSearch((event.target as HTMLInputElement).value)"
      type="search"
      :placeholder="placeholder"
      aria-label="Name"
      autocomplete="off"
      class="w-full h-full p-2 border border-gray-300 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
      :class="[currDir === 'rtl' ? 'pr-12' : 'pl-12']"
    />
  </div>
</template>

<script setup lang="ts">
import { useLang } from '/@/composables/useLang'

defineProps<{
  filterSearch: (filter: string) => void
  placeholder: string
}>()

const { currDir } = useLang()
</script>

<style scoped>
input:hover,
input:focus {
  box-shadow: 0 0 0 #001e24;
  border-color: #00d9ff;
}
input:focus {
  box-shadow: 0 0 4px #00d9ffaa;
}
.dark input:hover {
  box-shadow: 0 0 8px #00d9ffaa;
}
.dark input:focus {
  box-shadow: 0 0 8px #00d9ff;
}
</style>
