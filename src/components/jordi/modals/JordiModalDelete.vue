<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="close"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-xl" @click.stop>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Delete Activity</h3>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Are you sure you want to delete this
        <span class="font-medium">{{ getActivityLabel(activity).toLowerCase() }}</span>
        entry from {{ formatActivityTime(activity.timestamp) }}?
      </p>
      <div class="flex justify-end space-x-3">
        <button
          @click="close"
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          @click="del"
          class="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BabyActivity } from '/@/types/jordi'
import { getActivityLabel, formatActivityTime } from '/@/data/jordi'

defineProps<{
  activity: BabyActivity
  del: () => void
  close: () => void
}>()
</script>

<style scoped></style>
