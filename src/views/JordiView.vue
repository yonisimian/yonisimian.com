<!-- filepath: src/views/JordiView.vue -->
<template>
  <div class="container w-6xl max-w-[83vw] mx-auto">
    <header class="text-center my-8">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Jordi's Monitor</h1>
      <p class="text-gray-600 dark:text-gray-400">Baby Schedule Tracker</p>
    </header>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
      <div
        v-for="config in activityConfigs"
        :key="config.type"
        class="flex flex-col justify-start items-center gap-4"
      >
        <JordiButton
          :config="config"
          :lastActivity="getLastActivity(config.type)"
          @click="handleActivityClick(config.type, $event)"
        />
        <JordiHistory
          :activities="activities.filter((activity) => activity.type === config.type)"
          :del="(id: string) => handleDelete(id)"
          :edit="(id: string, newTime: string) => handleEdit(id, newTime)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { ActivityType, type BabyActivity } from '/@/types/jordi'
import {
  getStoredActivities,
  addActivity,
  activityConfigs,
  deleteActivity,
  editActivity
} from '/@/data/jordi'

const activities = ref<BabyActivity[]>([])

onMounted(() => {
  activities.value = getStoredActivities()
})

const handleActivityClick = (type: ActivityType, state?: 'start' | 'end') => {
  const newActivity = addActivity(type, state)
  activities.value.unshift(newActivity)
}

const getLastActivity = (type: ActivityType): BabyActivity | undefined => {
  return activities.value.find((activity) => activity.type === type)
}

const handleDelete = (id: string) => {
  const success = deleteActivity(id)
  if (success) {
    activities.value = activities.value.filter((activity) => activity.id !== id)
  } else {
    console.warn('could not delete activity')
  }
}

const handleEdit = (id: string, newTime: string) => {
  const success = editActivity(id, newTime)
  if (success) {
    // Refresh activities from storage to get updated order
    activities.value = getStoredActivities()
  } else {
    console.warn('could not edit activity')
  }
}

useSeoMeta({
  title: "Ronen's Baby Monitor",
  description: 'Track baby activities including sleep, feeding, and medicine times',
  ogTitle: "Ronen's Baby Monitor - Baby Activity Tracker",
  ogDescription: 'Simple and effective baby activity tracking for sleep, feeding, and medicine'
})
</script>
