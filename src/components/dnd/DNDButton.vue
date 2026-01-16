<template>
  <button @click="selectPlaylist(playlistType)"
    class="w-1/3 h-1/3 py-2 flex items-center justify-center text-white font-bold text-lg transition-all duration-300"
    :class="[isActive ? colorClasses.active : colorClasses.inactive]">
    <div class="flex flex-col items-center gap-1">
      <div :class="iconClass" class="text-3xl" />
      <span class="capitalize">{{ playlistType }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PlaylistType } from '/@/types/dnd'

const props = defineProps<{
  playlistType: PlaylistType
  activePlaylist: PlaylistType
  selectPlaylist: (playlist: PlaylistType) => void
}>()

const isActive = computed(() => props.activePlaylist === props.playlistType)

const colorMap = {
  battle: {
    active: 'bg-red-600 shadow-lg shadow-red-500/50',
    inactive: 'bg-red-500 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30'
  },
  ambient: {
    active: 'bg-green-600 shadow-lg shadow-green-500/50',
    inactive: 'bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30'
  },
  heroic: {
    active: 'bg-blue-600 shadow-lg shadow-blue-500/50',
    inactive: 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30'
  }
}

const iconMap = {
  battle: 'i-ph-sword',
  ambient: 'i-ph-tree',
  heroic: 'i-ph-shield-star'
}

const colorClasses = computed(() => colorMap[props.playlistType])
const iconClass = computed(() => iconMap[props.playlistType])
</script>

<style scoped></style>
