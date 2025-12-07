<template>
  <div
    class="flex flex-col gap-4 w-44 border border-gray-400/20 p-2.5 rounded-lg flex-shrink-0 select-none bg-blue-gray-900/5 backdrop-filter backdrop-blur-[4px]"
  >
    <div class="font-bold text-center">Service Registry</div>
    <div class="registry-buttons flex flex-col gap-1">
      <button @click="$emit('create', 'User Interface')">+ UI</button>
      <button @click="$emit('create', 'API Gateway')">+ API Gateway</button>
      <button @click="$emit('create', 'Account Service')">+ Account Service</button>
      <button @click="$emit('create', 'Inventory Service')">+ Inventory Service</button>
      <button @click="$emit('create', 'Order Service')">+ Order Service</button>
    </div>

    <div class="flex flex-col gap-1 my-2">
      <button @click="$emit('reset-state')">Reset State</button>
      <button @click="$emit('delete-selected')" :disabled="selectedId === null">
        Delete Selected
      </button>
      <button @click="$emit('clear-all')">Clear All</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ selectedId: number | null }>()
</script>

<style scoped>
button {
  height: 28px;
  border: solid 1px #d1d5db99;
  border-radius: 8px;
}
</style>
