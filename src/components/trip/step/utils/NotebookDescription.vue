<template>
  <div class="w-full h-full">
    <div
      v-if="description"
      v-html="description"
      dir="rtl"
      class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
    />
    <div v-else class="w-full h-full text-center p-4" dir="rtl">
      <div class="animate-pulse flex flex-col items-start gap-4">
        <div class="h-8 opacity-50 bg-gray-400 rounded w-3/8"></div>
        <div class="h-6 opacity-50 bg-gray-400 rounded w-1/4"></div>
        <div class="h-4 opacity-50 bg-gray-400 rounded w-1/2"></div>
        <div class="h-4 opacity-50 bg-gray-400 rounded w-3/8"></div>
        <div class="h-8 opacity-50 bg-gray-400 rounded w-1/3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<style scoped></style>
