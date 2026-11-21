<template>
  <Teleport to="body">
    <div
      v-if="index !== null"
      ref="dialog"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md text-light-900 select-none"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-2 text-sm bg-gradient-to-b from-black/60 to-transparent"
      >
        <span>{{ index + 1 }} / {{ items.length }}</span>
        <button
          ref="closeButton"
          type="button"
          aria-label="Close"
          class="w-8 h-8 text-xl opacity-80 hover:opacity-100"
          @click="index = null"
        >
          ✕
        </button>
      </div>
      <YCarousel
        height="100%"
        :items
        :modelValue="index"
        :renderWindow="1"
        @update:modelValue="index = $event"
      >
        <template #slide="{ item, isActive }">
          <YMediaItem :item variant="full" :active="isActive" />
        </template>
        <template #navigation="{ prev, next }">
          <button
            v-if="index > 0"
            type="button"
            aria-label="Previous"
            class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70"
            @click="prev"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            v-if="index < items.length - 1"
            type="button"
            aria-label="Next"
            class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/70"
            @click="next"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </template>
      </YCarousel>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted, useTemplateRef, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useFreezeScroll } from '/@/composables/useFreezeScroll'
import type { MediaItem } from '/@/types/media'

const props = defineProps<{
  items: MediaItem[]
}>()

// Index of the open item, or null when closed
const index = defineModel<number | null>({ required: true })

const dialog = useTemplateRef<HTMLDivElement>('dialog')
const closeButton = useTemplateRef<HTMLButtonElement>('closeButton')
const { freezeScroll, unfreezeScroll } = useFreezeScroll()

let opener: HTMLElement | null = null
watch(
  () => index.value !== null,
  async (open) => {
    if (!open) {
      unfreezeScroll()
      opener?.focus()
      return
    }
    opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    freezeScroll()
    await nextTick()
    closeButton.value?.focus()
  }
)

const trapFocus = (e: KeyboardEvent) => {
  const focusables = [
    ...(dialog.value?.querySelectorAll<HTMLElement>(
      'button, video[controls]:not([tabindex="-1"])'
    ) ?? [])
  ]
  if (!focusables.length) return
  const first = focusables[0]
  const last = focusables[focusables.length - 1]
  const current = document.activeElement
  const inside = current instanceof Node && dialog.value?.contains(current)
  if (e.shiftKey && (!inside || current === first)) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && (!inside || current === last)) {
    e.preventDefault()
    first.focus()
  }
}

onUnmounted(() => index.value !== null && unfreezeScroll())

useEventListener(window, 'keydown', (e: KeyboardEvent) => {
  if (index.value === null) return
  if (e.key === 'Tab') trapFocus(e)
  else if (e.key === 'Escape') index.value = null
  else if (e.key === 'ArrowLeft' && index.value > 0) index.value--
  else if (e.key === 'ArrowRight' && index.value < props.items.length - 1) index.value++
})
</script>
