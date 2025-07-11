import { ref } from 'vue'

const isRouteLoading = ref(false)
let timeout: number

const startLoadingSpinner = () => {
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    isRouteLoading.value = true
  }, 200)
}

const stopLoadingSpinner = () => {
  clearTimeout(timeout)
  isRouteLoading.value = false
}

export const useLoading = () => {
  return {
    isRouteLoading,
    startLoadingSpinner,
    stopLoadingSpinner
  }
}
