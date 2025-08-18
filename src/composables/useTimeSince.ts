import { ref, computed, onMounted, onUnmounted } from 'vue'

export const useTimeSince = (getDate: () => Date | undefined) => {
  const now = ref(new Date())
  let interval: number | undefined

  onMounted(() => {
    interval = window.setInterval(() => {
      now.value = new Date()
    }, 1000) // Update every second
  })

  onUnmounted(() => {
    if (interval) {
      clearInterval(interval)
    }
  })

  const timeSince = computed(() => {
    const date = getDate()
    if (!date) return ''

    const diff = now.value.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days}d ${hours % 24}h ago`
    if (hours > 0) return `${hours}h ${minutes % 60}m ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'Just now'
  })

  return { timeSince }
}
