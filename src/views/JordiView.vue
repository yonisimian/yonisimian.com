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
          :lastActivity="getLastActivityOfType(config.type)"
          :add="(state?: 'start' | 'end') => addActivity(config.type, state)"
        />
        <JordiHistory
          :activities="activities.filter((activity) => activity.type === config.type)"
          :del="(id: string) => deleteActivity(id)"
          :edit="(id: string, newTime: string) => editActivity(id, newTime)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'
import { activityConfigs, useJordi } from '/@/data/jordi'

const { activities, addActivity, editActivity, deleteActivity, getLastActivityOfType } = useJordi()

useSeoMeta({
  title: "Ronen's Baby Monitor",
  description: 'Track baby activities including sleep, feeding, and medicine times',
  ogTitle: "Ronen's Baby Monitor - Baby Activity Tracker",
  ogDescription: 'Simple and effective baby activity tracking for sleep, feeding, and medicine'
})
</script>
