export enum ProjectCategory {
  MUSIC = 'Music',
  CS = 'Computer Science',
  ACADEMY = 'Academy'
}

export type ProjectLink = {
  title: string
  url: string
}

export type Project = {
  title: string
  category: ProjectCategory
  img: string
  description: string
  wilfi?: string // What I learned from it
  wiwdd?: string // What I would do differently
  links?: ProjectLink[]
}
