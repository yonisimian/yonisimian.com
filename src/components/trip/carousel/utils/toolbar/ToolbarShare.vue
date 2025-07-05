<template>
  <div
    class="relative flex shareButton items-center justify-center"
    :class="{ stretched: isSharing }"
  >
    <ToolbarIcon
      @click="share"
      fill="none"
      title="Share"
      :disabled="isAnimating"
      buttonBgColor="rgba(74, 222, 128, 0.8)"
    >
      <path
        :d="
          isSharing
            ? 'M17 9L10 16L7 13'
            : 'M20 13L20 18C20 19.1046 19.1046 20 18 20L6 20C4.89543 20 4 19.1046 4 18L4 13'
        "
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        :d="
          isSharing
            ? 'M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
            : 'M16 8L12 4M12 4L8 8M12 4L12 16'
        "
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </ToolbarIcon>
    <span class="absolute text-white left-10.5 whitespace-nowrap overflow-hidden"
      >Link copied!</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSharing = ref(false)
const isAnimating = ref(false)

const props = defineProps<{
  shareText?: string
}>()

const share = () => {
  if (navigator.share) {
    // Use the Web Share API if available
    navigator
      .share({
        title: document.title,
        text: props.shareText || 'Check out my page!',
        url: window.location.href
      })
      .catch((err) => {
        console.error('Share failed:', err)
        // alert('Failed to share link :(') // bug: it shares but then sometimes shows this alert
      })
  } else {
    // copy link to clipboard as a fallback
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        isSharing.value = true
        isAnimating.value = true
        setTimeout(() => {
          isSharing.value = false
          setTimeout(() => {
            isAnimating.value = false
          }, 1000)
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
        alert('Failed to copy link :(')
      })
  }
}
</script>

<style scoped>
.shareButton {
  transition: padding-right 1s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 1s cubic-bezier(0.4, 0, 0.2, 1);
  padding-right: 0rem;
  background-color: rgba(0, 0, 0, 0.3);
}
.stretched {
  padding-right: 6.5rem;
  background-color: rgba(74, 222, 128, 0.8);
}
</style>
