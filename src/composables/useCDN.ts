export const useMediaCdn = (path: string, options: { w: number; fm: string }) => {
  const base = path.startsWith('/') ? path.slice(1) : path
  const isDev = import.meta.env.DEV

  const width = options.w
  const format = options.fm

  if (isDev) {
    // Local fallback: just use the original image from /public
    return `/${base}`
  }

  // Production (Netlify): use CDN transformation
  return `/cdnimg/${base}?w=${width}&fm=${format}`
}
