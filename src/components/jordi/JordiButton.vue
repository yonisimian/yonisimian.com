<!-- filepath: src/components/jordi/JordiButton.vue -->
<template>
  <div
    @click="handleClick"
    class="w-full p-4 rounded-xl relative overflow-hidden hover:bg-sky-400/10 shadow-lg hover:shadow-xl select-none backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px] transition-all duration-300 ease cursor-pointer"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div :class="currentIcon" class="text-3xl transition-all duration-300"></div>
        <div class="text-left">
          <h3 class="text-xl font-semibold">{{ currentLabel }}</h3>
          <p class="text-sm opacity-90">Tap to record</p>
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
  </div>
</template>

<!-- filepath: src/components/jordi/JordiButton.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { type ActivityConfig, type BabyActivity, ActivityType } from '/@/types/jordi'
import { useTimeSince } from '/@/composables/useTimeSince'
import { useSleepState } from '/@/data/jordi'

const props = defineProps<{
  config: ActivityConfig
  lastActivity?: BabyActivity
}>()

const emit = defineEmits<{
  click: [state?: 'start' | 'end']
}>()

// Use reactive sleep state
const sleepStateRef = useSleepState()

const isSleepActivity = computed(() => props.config.type === ActivityType.SLEEP)

const currentLabel = computed(() => {
  if (isSleepActivity.value) {
    console.log('Sleep state changed to:', sleepStateRef.value) // This will now log on changes
    return sleepStateRef.value === 'awake' ? props.config.label : props.config.alternateLabel
  }
  return props.config.label
})

const currentIcon = computed(() => {
  if (isSleepActivity.value) {
    return sleepStateRef.value === 'awake' ? props.config.icon : props.config.alternateIcon
  }
  return props.config.icon
})

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
    const nextState = sleepStateRef.value === 'awake' ? 'start' : 'end'
    emit('click', nextState)
  } else {
    emit('click')
  }
}
</script>
