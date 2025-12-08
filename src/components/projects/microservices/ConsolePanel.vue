<template>
  <div
    ref="consoleContainer"
    class="p-4 w-full h-full font-mono text-sm overflow-y-auto border border-gray-400/20 rounded-lg overflow-hidden bg-blue-gray-900/5 backdrop-filter backdrop-blur-[4px]"
  >
    <div class="text-gray-500 mb-2">Console Output:</div>
    <div v-for="(msg, idx) in messages" :key="idx" class="text-yellow-700 mb-1">> {{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ messages: string[] }>()

const consoleContainer = ref<HTMLDivElement | null>(null)

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
