export enum ProjectCategory {
  'music' = 'Music',
  'cs' = 'Computer Science',
  'academy' = 'Academy'
}

export type Project = {
  title: string
  category: ProjectCategory
  img: string
}
