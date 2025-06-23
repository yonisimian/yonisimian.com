export enum ProjectCategory {
  MUSIC = 'Music',
  CS = 'Computer Science',
  ACADEMY = 'Academia'
}

export const HighlightSymbol = '★'

export type CategoryFilter = ProjectCategory | typeof HighlightSymbol

export type ProjectLink = {
  title: string
  url: string
}

export type Project = {
  year?: number
  title: string
  category: ProjectCategory
  img: string
  description: string
  wilfi?: string // What I learned from it
  wiwdd?: string // What I would do differently
  notes?: string
  links?: ProjectLink[]
  embed?: string // for embedded videos / pdfs
  highlight?: boolean
}
