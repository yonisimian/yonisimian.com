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
      This march originated from a spontaneous trombone improvisation when I was 17 years old.
      My foray into orchestral composition led me to experiment with orchestrating the improvised melody, ultimately formalizing it into a march tailored for a wind orchestra.
      The composition premiered in 2022 during a notable performance by the Technion Orchestra, and a recording of this premiere is accessible through the link below.
    `,
    wilfi:
      'composition, orchestration. The ability to listen to live rehearsals and make changes accordingly. Also, gained experience in the Sibelius notation software.',
    wiwdd: 'nothing :)',
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
      It is the second song I've recorded by myself.
      Drawing from the lessons of previous attempts, I endeavored to elevate the professionalism of this project.
      Each musical component was performed by me, except for the drum section - which I composed and executed digitally.
    `,
    wilfi:
      'recording, mixing, mastering. A particular emphasis on achieving a harmonious integration by blending the instruments correctly.',
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
      Our team is responsible for developing a compiler designed to facilitate the validation of cutting-edge chips by our validation teams.
      Aside from my role, I also prepare riddles and short lectures for our team's weekly meetings.
    `,
    wilfi:
      'C++17, Python, Git, tcsh, LLVM, how to write tests, and various aspects of operating systems as well (not to forget the teamwork dynamics 😄).',
    notes:
      "For clear reasons, I can't provide any code from this project; however, I can talk about it in more detail in person :)"
  },
  {
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn,
    description: `
      As part of my B.Sc. in Computer Science, I took a course in Data Mining.
      In this course we learned about various data mining algorithms, emphasizing their strategic application based on contextual considerations.
      The final project, accessible through the links below, required the application of learned methods and algorithms to analyze a dataset.
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
      When I heard about the graduate studies positions in the Georgia Tech School of Music, I decided to create a portfolio website to effectively showcase my qualifications.
      After working on this site for a while, I understood that it worths presenting the site itself as a project,
      as for I believe it stands as a compelling testament to the quality of my work.
    `,
    wilfi:
      'Vue3, TypeScript, Netlify, emphasis on UI/UX and responsive design. A bit of CSS3 animations.',
    notes: `
      the dark theme of this website is a tiny easter egg for myself, as for it hints the world of an invtrovert like me;
      On the outside, the website is white, clean, simplistic, and if I may say - a bit boring.
      However, if you look deeper (i.e. click on the dark theme icon), you will find a whole world of colors, animations, and lots of fun 🌈😄.
    `
  },
  {
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: c,
    description: `
      This simplistic calculator written in C is more than just a project for me;
      if you look at the readme markdown file, accessible through the link below,
      you will encounter a comprehensive exposition detailing the intricacies of how I made this calculator.
      I think this project serves as a good example of my ability to express myself and explain my work to others,
      which is (in my mind) almost as important as writing the project itself.
    `,
    wilfi:
      'C, Git, Markdown, managing a project with a specific objective, and the hard part - finishing a project.',
    wiwdd: `
      delving deeper into the subject commencing implementation.
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
