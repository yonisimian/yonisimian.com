const MEDIA_BASE_URL = (import.meta.env.VITE_MEDIA_BASE_URL || '/media').replace(/\/+$/, '')

export const mediaUrl = (...segments: string[]): string =>
  `${MEDIA_BASE_URL}/${encodeURI(segments.join('/'))}`
