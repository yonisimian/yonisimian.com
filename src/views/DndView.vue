<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="w-full max-w-md flex flex-col items-center gap-4">
      <div class="w-full flex flex-wrap justify-center">
        <DNDButton playlistType="battle" :activePlaylist :selectPlaylist />
        <DNDButton playlistType="ambient" :activePlaylist :selectPlaylist />
        <DNDButton playlistType="heroic" :activePlaylist :selectPlaylist />
      </div>
      <div class="w-full">
        <iframe v-for="(playlistId, type) in playlists" :key="type" v-show="activePlaylist === type"
          :src="getEmbedUrl(playlistId)" width="100%" height="492" frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import { useTheme } from '/@/composables/useTheme'
import { PlaylistType } from '/@/types/dnd'

useSeoMeta({
  title: 'D&D Music',
  description: 'Ambient music controller for D&D sessions',
  ogTitle: 'D&D Music Controller',
  ogDescription: 'Play battle, ambient, or heroic music during your D&D sessions'
})

const { isDark } = useTheme()

const activePlaylist = ref<PlaylistType>('ambient')

const playlists = {
  battle: '2n5BkbCwZyfYZLAHscQ7O0',
  ambient: '76brGB5uussUVyWbYGZlCJ',
  heroic: '28v0CrXWsJsmVYavZ6ehjQ'
}

const getSpotifyTheme = () => (isDark.value ? 0 : 1)

const getEmbedUrl = (playlistId: string) => {
  return `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${getSpotifyTheme()}`
}

const selectPlaylist = (type: PlaylistType) => {
  activePlaylist.value = type
}
</script>
