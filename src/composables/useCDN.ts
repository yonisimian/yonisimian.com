export const useMediaCdn = (path: string, options: { w: number; fm: string }) => {
  const base = path.startsWith('/') ? path.slice(1) : path

  const width = options.w
  const format = options.fm

  return encodeURI(`/cdnimg/${base}?w=${width}&fm=${format}`)
}
