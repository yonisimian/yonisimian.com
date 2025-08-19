<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    @click="cancelEdit"
  >
    <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-xl" @click.stop>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Edit Activity Time
      </h3>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ getActivityLabel(activity) }} Time
        </label>
        <input
          ref="timeInput"
          v-model="editTimeValue"
          type="time"
          class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div class="flex justify-end space-x-3">
        <button
          @click="cancelEdit"
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <button
          @click="confirmEdit"
          class="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { BabyActivity } from '/@/types/jordi'
import { getActivityLabel } from '/@/functions/jordi'

const props = defineProps<{
  activity: BabyActivity
  edit: (newTime: string) => void
  close: () => void
}>()

const editTimeValue = ref('')
const timeInput = ref<HTMLInputElement | null>(null)

const confirmEdit = () => {
  props.edit(editTimeValue.value)
  props.close()
}

const cancelEdit = () => {
  editTimeValue.value = ''
  props.close()
}

onMounted(() => {
  const timeString = props.activity.timestamp.toTimeString().slice(0, 5)
  editTimeValue.value = timeString
  timeInput.value?.focus()
})
</script>

<style scoped></style>
