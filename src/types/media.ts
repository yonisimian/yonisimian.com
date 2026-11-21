interface BaseMediaItem {
  thumb: string // small image for grids
  ratio: number // width / height
  alt: string
}

interface PhotoItem extends BaseMediaItem {
  type: 'photo'
  src: string
}

interface VideoItem extends BaseMediaItem {
  type: 'video'
  src: string
  poster: string
}

export type MediaItem = PhotoItem | VideoItem
