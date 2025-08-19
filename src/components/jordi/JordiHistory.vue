<template>
  <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
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
          <JordiHistoryItem
            v-for="activity in activities"
            :key="activity.id"
            :activity
            :del="() => del(activity.id)"
            :edit="(newTime: string) => edit(activity.id, newTime)"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type BabyActivity } from '/@/types/jordi'

defineProps<{
  activities: BabyActivity[]
  del: (id: string) => void
  edit: (id: string, newTime: string) => void
}>()

const isCollapsed = ref(false)

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
