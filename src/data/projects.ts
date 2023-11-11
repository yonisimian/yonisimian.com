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
    description: `
      I started working at Intel in 2022 as an R&D software development student.
      Our team is responsible for developing a compiler that helps the validation teams to test the newest chips.
      Aside from my role, I also prepare riddles / short-lectures for the team's weekly meetings.
    `,
    wilfi:
      'C++17, Python, Git, tcsh, LLVM, how to write tests, and many aspects of operating systems as well (not to forget the team work of course 😄).',
    notes:
      "of course, I can't provide any code from this project, but I can talk about it in more detail in person :)"
  },
  {
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn,
    description: `
      As part of my B.Sc. in Computer Science, I took a course in Data Mining.
      In this course we learned about different data mining algorithms, with an emphasis on how and when to use them for our needs.
      In the final project (which is available in the link below), we were asked to analyze a dataset using the methods and algorithms we learned.
    `,
    wilfi:
      'Python, Pandas, Scikit-learn, Matplotlib, Data Mining algorithms, how to analyze a dataset, how to present the results.',
    links: [
      {
        title: 'Final Project - Part 1',
        url: 'https://www.docdroid.net/tdVhPku/206584021-data-mining-20595-maman-21-pdf'
      },
      {
        title: 'Final Project - Part 2',
        url: 'https://www.docdroid.net/GjM3WAp/206584021-data-mining-20595-maman-22-pdf'
      }
    ]
  },
  {
    title: 'This very site',
    category: ProjectCategory.CS,
    img: sonic,
    description: `
      When I heard about the graduate studies positions in the Georgia Tech School of Music, I decided to create a portfolio website to present myself.
      After working on this site for a while, I understood that it worths presenting the site itself as a project, as for I learned much from it,
      and I think it is a good example of my work.
    `,
    wilfi:
      'Vue3, TypeScript, Netlify, emphasis on UI/UX and responsive design. A bit of CSS3 animations.',
    notes: `
      The dark theme of this website is a tiny easter egg for myself, as for it hints the world of an invtrovert like me;
      On the outside, the website is white, clean, simplistic, and if I may say - a bit boring.
      But if you look deeper (i.e. click on the dark theme icon), you will find a whole world of colors, animations, and a lot of fun 🌈😄.
    `
  },
  {
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: c,
    description: `
      This simplistic calculator written in C is more than just a project for me;
      if you look at the readme markdown file in the link below, you will find a very detailed explanation on about how I wrote this calculator.
      I think this project is a good example of my ability to express myself and explain my work to others,
      which is (in my mind) almost as important as writing the project itself.
    `,
    wilfi:
      'C, Git, Markdown, managing a project with a specific objective, and the hard part - finishing a project.',
    wiwdd: `
      Study the subject more before starting to implement it.
      Apparently, I've aquired a compiler developer way of thinking, but my terminology was a bit off.
      The project could have looked more professional if I knew more about lexing and parsing.
    `,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/yonisimian/c-calculator'
      }
    ]
  },
  {
    title: 'PacmanX10',
    category: ProjectCategory.CS,
    img: pacmanx10,
    description: `
      This project was my first experience with C++ (written in C++11).
      It was a game submitted for a game jam, written all by me (and took 5th place in "authentic in-the-spirit entry" out more more than 100 entries!).
      I tried to make this game fun to play, and the music (which as also added by me) is a big part of it - specially the sound effects 😉.
    `,
    wilfi:
      'C++, memory management, what to compromise and what not to compromise in order to meet the deadline.',
    wiwdd:
      'learn more about C++ and memory management, as for it was my biggest challenge in this project.',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/yonisimian/Pacmanx10'
      },
      {
        title: 'CODEJAM entry',
        url: 'https://itch.io/jam/olc-codejam-2021/rate/1187635'
      },
      {
        title: 'itch.io',
        url: 'https://yonisimian.itch.io/pacmanx10'
      }
    ]
  }
]

export default projects
