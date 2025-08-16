import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({ disableTransition: false })
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark
  }
}
