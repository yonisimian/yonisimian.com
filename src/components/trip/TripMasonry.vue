<template>
  <div class="flex flex-col items-center justify-center">
    <header class="flex flex-col items-center justify-center gap-2 py-4 w-full select-none">
      <TitleSeeThrough :title class="text-4xl" />
    </header>

    <article class="w-full px-4 mb-4">
      <YMediaGrid :items="allMedia">
        <template #default="{ item, index }">
          <button
            type="button"
            class="block w-full h-full cursor-zoom-in transition-opacity hover:opacity-85"
            :aria-label="`Open ${item.type} ${index + 1}: ${item.alt}`"
            @click="openIndex = index"
          >
            <YMediaItem :item variant="thumb" />
          </button>
        </template>
      </YMediaGrid>
    </article>

    <YLightbox v-model="openIndex" :items="allMedia" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTripData } from '/@/composables/useTripData'

const { title, allMedia } = useTripData()

const openIndex = ref<number | null>(null)
</script>
