import { Project, ProjectCategory } from '../types/types'
import intel from './intel.png'
import sklearn from './sklearn.png'
import sonic from './sonic.png'
import c from './C.png'
import pacmanx10 from './pacmanx10.png'
import maria from './maria.png'
import secondMarch from './2nd march.png'

const projects: Project[] = [
  {
    title: '2nd March',
    category: ProjectCategory.MUSIC,
    img: secondMarch
  },
  {
    title: 'Maria, Maria',
    category: ProjectCategory.MUSIC,
    img: maria
  },
  {
    title: 'Intel',
    category: ProjectCategory.CS,
    img: intel
  },
  {
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn
  },
  {
    title: 'This very site',
    category: ProjectCategory.CS,
    img: sonic
  },
  {
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: c
  },
  {
    title: 'PacmanX10',
    category: ProjectCategory.CS,
    img: pacmanx10
  }
]

export default projects
