<template>
  <div
    class="flex flex-col sm:flex-row items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors select-none"
    @dblclick="startEditing(activity)"
  >
    <div class="flex items-center space-x-3 flex-1">
      <div class="flex-1 min-w-0">
        <div class="font-medium text-gray-800 dark:text-gray-200">
          {{ getActivityLabel(activity) }}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          <button
            @click="startEditing(activity)"
            class="hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer"
            :title="`Edit time for ${getActivityLabel(activity).toLowerCase()}`"
          >
            {{ formatActivityTime(activity.timestamp) }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <div class="text-right text-sm text-gray-500 dark:text-gray-400">
        {{ formatRelativeTime(activity.timestamp) }}
      </div>

      <button
        @click="startEditing(activity)"
        class="opacity-50 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        :title="`Edit ${getActivityLabel(activity).toLowerCase()} time`"
      >
        <div class="i-ph-pencil text-lg"></div>
      </button>

      <button
        @click="handleDelete(activity)"
        class="opacity-50 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 hover:text-red-600 dark:hover:text-red-400"
        :title="`Delete ${getActivityLabel(activity).toLowerCase()} entry`"
      >
        <div class="i-ph-trash text-lg"></div>
      </button>
    </div>

    <Teleport to="body">
      <JordiModalEdit
        v-if="showEditModal"
        :activity
        :edit="(newTime: string) => edit(newTime)"
        :close="() => (showEditModal = false)"
      />
    </Teleport>

    <Teleport to="body">
      <JordiModalDelete
        v-if="showDeleteModal"
        :activity
        :del="() => del()"
        :close="() => (showDeleteModal = false)"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type BabyActivity } from '/@/types/jordi'
import { formatActivityTime, formatRelativeTime, getActivityLabel } from '/@/functions/jordi'

defineProps<{
  activity: BabyActivity
  del: () => void
  edit: (newTime: string) => void
}>()

const showEditModal = ref(false)
const showDeleteModal = ref(false)

const startEditing = (activity: BabyActivity) => {
  showEditModal.value = true
}

const handleDelete = (activity: BabyActivity) => {
  showDeleteModal.value = true
}
</script>

<style scoped></style>
