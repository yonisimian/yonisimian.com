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
    img: secondMarch,
    description: `
      This march started as an improvisation on my trombone when I was about 17 years old.
      At this time I began to experiment with composing for a whole orchestra, and I liked this improvised melody,
      so I wrote it as a march for a wind orchestra.
      In 2022 we played this march at the Technion Orchestra's concert, and the result is available in the link below.
    `,
    wilfi:
      'composition, orchestration. The ability to listen to live rehearsals and make changes accordingly. Also, gained experience in the Sibelius notation software.',
    wiwdd: 'Nothing :)',
    links: [
      {
        title: '2nd March - YouTube',
        url: 'https://youtu.be/qWQg7MT8oYc?si=MsKHYVbDBERA3CbO'
      }
    ]
  },
  {
    title: 'Maria, Maria',
    category: ProjectCategory.MUSIC,
    img: maria,
    description: `
      This is a song I wrote about a girl I knew.
      It is the second song I've recorded by myself, so I used the knowledge I gained from previous mistakes to make this one more professional.
      Every part of this song was played by me, except for the drums which I wrote and let the computer play.
    `,
    wilfi:
      'recording, mixing, mastering. Great emphasis on blending the different instruments together to make it sound as a whole.',
    wiwdd:
      'sing a bit more lively and less monotonous. Mix the singer to blend it more properly with the song.',
    links: [
      {
        title: 'Maria, Maria - YouTube',
        url: 'https://youtu.be/EsBlRcusFIc?si=v3Yebt8qBeFgMFOC'
      }
    ]
  },
  {
    title: 'Intel',
    category: ProjectCategory.CS,
    img: intel,
    description: ``
  },
  {
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn,
    description: ``
  },
  {
    title: 'This very site',
    category: ProjectCategory.CS,
    img: sonic,
    description: ``
  },
  {
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: c,
    description: ``
  },
  {
    title: 'PacmanX10',
    category: ProjectCategory.CS,
    img: pacmanx10,
    description: ``
  }
]

export default projects
