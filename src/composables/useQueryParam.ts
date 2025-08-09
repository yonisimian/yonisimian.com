import { computed, WritableComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useQueryParam<T>(
  key: string,
  options: {
    default: T
    parse?: (value: string | null) => T
    stringify?: (value: T) => string
  }
): WritableComputedRef<T> {
  const route = useRoute()
  const router = useRouter()

  const parse = options.parse ?? ((v: string | null) => v as unknown as T)
  const stringify = options.stringify ?? ((v: T) => String(v))

  const param = computed<T>({
    get() {
      const raw = route.query[key]
      return parse(Array.isArray(raw) ? raw[0] : raw ?? null)
    },
    set(value: T) {
      const newQuery = { ...route.query }
      if (
        value == null ||
        value === '' ||
        value === options.default ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete newQuery[key]
      } else {
        newQuery[key] = stringify(value)
      }
      router.push({ query: newQuery }) // use `router.replace` if you don't want to add to history
    }
  })

  return param
}
