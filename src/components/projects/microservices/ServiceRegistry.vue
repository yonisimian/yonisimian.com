<template>
  <div
    class="flex flex-col gap-4 w-44 bg-gray-50 border border-gray-200 p-2.5 rounded-lg shadow-sm flex-shrink-0 select-none"
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
      <button @click="$emit('delete-selected')" :disabled="selectedId === null">
        Delete Selected
      </button>
      <button @click="$emit('clear-all')">Clear All</button>
    </div>

    <div class="text-xs text-gray-700">
      <div class="legend-item"><span class="swatch ui"></span>UI</div>
      <div class="legend-item"><span class="swatch api"></span>API Gateway</div>
      <div class="legend-item"><span class="swatch account"></span>Account + DB</div>
      <div class="legend-item"><span class="swatch inventory"></span>Inventory + DB</div>
      <div class="legend-item"><span class="swatch order"></span>Order + DB</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ selectedId: number | null }>()
</script>

<style scoped>
button {
  height: 28px;
  border: solid 1px #d1d5db;
  border-radius: 8px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
}
.swatch {
  width: 14px;
  height: 14px;
  display: inline-block;
  border-radius: 3px;
}
.swatch.ui {
  background: #7cbcff;
}
.swatch.api {
  background: #ffd36b;
}
.swatch.account {
  background: #8be38b;
}
.swatch.inventory {
  background: #c18bff;
}
.swatch.order {
  background: #ff9aa2;
}
</style>
