<template>
  <button
    @click="handleClick"
    class="w-full p-4 rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 select-none transition-all duration-300 ease cursor-pointer text-white"
    :style="buttonStyle"
  >
    <div
      class="absolute top-0 left-0 w-full h-full inset-0 opacity-0 dark:opacity-100 bg-black/15 z-10"
    />
    <div
      class="absolute top-0 left-0 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/10 z-20"
    />

    <div class="relative z-10 flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div :class="currentIcon" class="text-3xl transition-all duration-300"></div>
        <div class="text-left">
          <p class="text-sm opacity-90">Tap to record</p>
          <h3 class="text-xl font-semibold">{{ currentLabel }}</h3>
        </div>
      </div>

      <div class="text-right">
        <div v-if="lastActivity" class="text-sm">
          <div class="opacity-90">Last:</div>
          <div class="font-mono">{{ formatLastTime }}</div>
          <div class="text-xs opacity-75">{{ timeSinceLastActivity }}</div>
        </div>
        <div v-else class="text-sm opacity-75">No records yet</div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type ActivityConfig, type BabyActivity, ActivityType } from '/@/types/jordi'
import { useTimeSince } from '/@/composables/useTimeSince'
import { useJordi } from '/@/data/jordi'

const props = defineProps<{
  config: ActivityConfig
  lastActivity?: BabyActivity
  add: (state?: 'start' | 'end') => void
}>()

const { isCurrentlySleeping } = useJordi()

const isSleepActivity = computed(() => props.config.type === ActivityType.SLEEP)

const currentLabel = computed(() => {
  if (isSleepActivity.value) {
    return isCurrentlySleeping.value ? props.config.alternateLabel : props.config.label
  }
  return props.config.label
})

const currentIcon = computed(() => {
  if (isSleepActivity.value) {
    return isCurrentlySleeping.value ? props.config.alternateIcon : props.config.icon
  }
  return props.config.icon
})

const buttonStyle = computed(() => ({
  background: `linear-gradient(135deg, ${props.config.colorFrom}, ${props.config.colorTo})`
}))

const formatLastTime = computed(() => {
  if (!props.lastActivity) return ''
  return props.lastActivity.timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
})

const { timeSince: timeSinceLastActivity } = useTimeSince(() => props.lastActivity?.timestamp)

const handleClick = () => {
  if (isSleepActivity.value) {
    const nextState = isCurrentlySleeping.value ? 'end' : 'start'
    props.add(nextState)
  } else {
    props.add()
  }
}
</script>
