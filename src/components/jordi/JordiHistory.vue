<!-- filepath: src/components/jordi/JordiHistory.vue -->
<template>
  <div class="w-full dark:bg-gray-800 rounded-xl shadow-lg p-6">
    <div
      class="flex items-center justify-between cursor-pointer select-none"
      @click="toggleCollapsed"
    >
      <h2
        class="flex flex-col justify-start items-start text-xl font-semibold text-gray-800 dark:text-gray-200"
      >
        Recent Activity
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          (today:
          {{
            activities.filter(
              (activity) =>
                new Date(activity.timestamp).setHours(0, 0, 0, 0) ===
                new Date().setHours(0, 0, 0, 0)
            ).length
          }})
        </span>
      </h2>
      <div
        class="transition-transform duration-300 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        :class="{ 'rotate-180': !isCollapsed }"
      >
        <div class="i-ph-caret-down text-xl"></div>
      </div>
    </div>

    <Transition
      name="collapse"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave"
    >
      <div v-show="!isCollapsed" class="mt-4">
        <div v-if="activities.length === 0" class="text-center text-gray-500 py-8">
          No activities recorded yet
        </div>

        <div v-else class="space-y-3 max-h-96 overflow-y-auto">
          <div
            v-for="activity in activities"
            :key="activity.id"
            class="flex flex-col md:flex-row items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors select-none"
          >
            <div class="flex items-center space-x-3 flex-1">
              <div class="flex-1 min-w-0">
                <div class="font-medium text-gray-800 dark:text-gray-200">
                  {{ getActivityLabel(activity) }}
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">
                  {{ formatActivityTime(activity.timestamp) }}
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div class="text-right text-sm text-gray-500 dark:text-gray-400">
                {{ formatRelativeTime(activity.timestamp) }}
              </div>

              <!-- Delete button -->
              <button
                @click="handleDelete(activity)"
                class="transition-opacity p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 hover:text-red-600 dark:hover:text-red-400"
                :title="`Delete ${getActivityLabel(activity).toLowerCase()} entry`"
              >
                <div class="i-ph-trash text-lg"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Confirmation Modal -->
    <Teleport to="body">
      <div
        v-if="showDeleteConfirm"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        @click="cancelDelete"
      >
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full shadow-xl" @click.stop>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Delete Activity
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Are you sure you want to delete this
            <span class="font-medium">{{
              activityToDelete ? getActivityLabel(activityToDelete).toLowerCase() : ''
            }}</span>
            entry from {{ activityToDelete ? formatActivityTime(activityToDelete.timestamp) : '' }}?
          </p>
          <div class="flex justify-end space-x-3">
            <button
              @click="cancelDelete"
              class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              @click="confirmDelete"
              class="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type BabyActivity, ActivityType } from '/@/types/jordi'
import { activityConfigs } from '/@/data/jordi'

defineProps<{
  activities: BabyActivity[]
}>()

const emit = defineEmits<{
  delete: [id: string]
}>()

// Collapse state
const isCollapsed = ref(false)

// Delete confirmation state
const showDeleteConfirm = ref(false)
const activityToDelete = ref<BabyActivity | null>(null)

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value
}

// Animation handlers
const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.overflow = 'hidden'
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
  element.style.overflow = 'visible'
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = element.offsetHeight + 'px'
  element.style.overflow = 'hidden'
  // Force reflow
  element.offsetHeight
  element.style.height = '0'
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.overflow = ''
}

const getActivityConfig = (type: ActivityType) => {
  return activityConfigs.find((config) => config.type === type)!
}

const getActivityLabel = (activity: BabyActivity) => {
  const config = getActivityConfig(activity.type)
  if (activity.type === ActivityType.SLEEP) {
    return activity.state === 'start' ? config.label : config.alternateLabel || 'Wake Up'
  }
  return config.label
}

const formatActivityTime = (timestamp: Date) => {
  return timestamp.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatRelativeTime = (timestamp: Date) => {
  const now = new Date()
  const diff = now.getTime() - timestamp.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ago`
  if (hours > 0) return `${hours}h ago`
  if (minutes > 0) return `${minutes}m ago`
  return 'Just now'
}

const handleDelete = (activity: BabyActivity) => {
  activityToDelete.value = activity
  showDeleteConfirm.value = true
}

const confirmDelete = () => {
  if (activityToDelete.value) {
    emit('delete', activityToDelete.value.id)
  }
  cancelDelete()
}

const cancelDelete = () => {
  showDeleteConfirm.value = false
  activityToDelete.value = null
}
</script>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
  overflow: hidden;
}
</style>
