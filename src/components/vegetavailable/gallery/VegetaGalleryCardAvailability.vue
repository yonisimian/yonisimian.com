<template>
  <div
    class="flex items-center justify-center font-medium mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
  >
    <div v-if="availableNow" class="text-green-600 dark:text-green-400">
      {{ $t('veg.card.availableNow') }}
    </div>
    <div v-else class="text-yellow-600 dark:text-yellow-400">
      {{ $t('veg.card.notAvailableNow') }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  availableNow: boolean
}>()
</script>

<style scoped></style>
