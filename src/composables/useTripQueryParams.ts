// basically the state of TheBigTrip
import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'

export const useTripQueryParams = () => {
  const slide = useQueryParam('slide', {
    default: 0,
    parse: (v) => parseInt(v || '0'),
    stringify: (v) => v.toString()
  })

  const fullscreenRaw = useQueryParam('fullscreen', {
    default: '',
    parse: (v) => v || ''
  })

  // Clean boolean wrapper for fullscreen
  const fullscreen = computed<boolean>({
    get: () => fullscreenRaw.value === 'true',
    set: (val: boolean) => {
      fullscreenRaw.value = val ? 'true' : ''
    }
  })

  return { slide, fullscreen }
}
