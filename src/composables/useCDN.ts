export const useMediaCdn = (path: string, _options: { w: number; fm: string }) => {
  const base = path.startsWith('/media/')
    ? path.slice(7)
    : path.startsWith('/')
    ? path.slice(1)
    : path

  // const width = options.w
  // const format = options.fm

  // return `/cdnimg/${base}?w=${width}&fm=${format}`

  return `/media/${base}` // honestly, it's works better than the CDN
}
