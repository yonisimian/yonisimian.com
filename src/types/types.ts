export enum ProjectCategory {
  MUSIC = 'Music',
  CS = 'Computer Science',
  ACADEMY = 'Academy'
}

export type Project = {
  title: string
  category: ProjectCategory
  img: string
}
