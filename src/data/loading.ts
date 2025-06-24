import { ref, computed } from 'vue'

const _isVisible = ref(false)
let timeout: number

export const isRouteLoading = computed(() => _isVisible.value)

export const startLoadingSpinner = () => {
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    _isVisible.value = true
  }, 200)
}

export const stopLoadingSpinner = () => {
  clearTimeout(timeout)
  _isVisible.value = false
}
