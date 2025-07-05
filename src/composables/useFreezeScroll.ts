import { nextTick } from 'vue'

export function useFreezeScroll() {
  let scrollPosition = 0

  const freezeScroll = () => {
    scrollPosition = document.documentElement.scrollTop
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollPosition}px` // Offset the body position by the scroll position
  }

  const unfreezeScroll = () => {
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''

    nextTick(() => {
      // Ensure the scroll position is restored after the DOM updates
      window.scrollTo(0, scrollPosition)
    })
  }

  return {
    scrollPosition,
    freezeScroll,
    unfreezeScroll
  }
}
