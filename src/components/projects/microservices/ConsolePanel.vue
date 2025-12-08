<template>
  <div
    ref="consoleContainer"
    class="p-4 w-full h-full font-mono text-sm overflow-y-auto border border-gray-400/20 rounded-lg overflow-hidden bg-blue-gray-900/5 backdrop-filter backdrop-blur-[4px]"
  >
    <div class="text-gray-500 mb-2">Console Output:</div>
    <div v-for="(msg, idx) in messages" :key="idx" class="text-yellow-800 mb-1">
      <span class="text-gray-600">[{{ formatTime(msg.timestamp) }}]</span> > {{ msg.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ConsoleMessage } from './types'

const props = defineProps<{ messages: ConsoleMessage[] }>()

const consoleContainer = ref<HTMLDivElement | null>(null)

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

watch(
  () => props.messages.length,
  () => {
    // Scroll to bottom on next tick
    setTimeout(() => {
      if (consoleContainer.value) {
        consoleContainer.value.scrollTop = consoleContainer.value.scrollHeight
      }
    }, 0)
  }
)
</script>
