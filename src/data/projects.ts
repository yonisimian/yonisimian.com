import { Project, ProjectCategory } from '../types/types'

const projects: Project[] = [
  {
    title: '2nd March',
    category: ProjectCategory.MUSIC,
    img: '@/data/2nd march.png'
  },
  {
    title: 'Maria, Maria',
    category: ProjectCategory.MUSIC,
    img: '@/data/maria.png'
  },
  {
    title: 'Intel',
    category: ProjectCategory.CS,
    img: '@/data/intel.png'
  },
  {
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: '@/data/sklearn.png'
  },
  {
    title: 'This very site',
    category: ProjectCategory.CS,
    img: '@/data/sonic.png'
  },
  {
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: '@/data/C.png'
  },
  {
    title: 'PacmanX10',
    category: ProjectCategory.CS,
    img: '@/data/pacmanx10.png'
  }
]

export default projects
