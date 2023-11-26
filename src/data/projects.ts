import { Project, ProjectCategory } from '/@/types/types'
import intel from '/@/assets/projects/intel.png'
import sklearn from '/@/assets/projects/sklearn.png'
import sonic from '/@/assets/projects/site.png'
import c from '/@/assets/projects/C.png'
import pacmanx10 from '/@/assets/projects/pacmanx10.png'
import maria from '/@/assets/projects/maria.png'
import secondMarch from '/@/assets/projects/2nd march.png'
import octavarium from '/@/assets/projects/octavarium.png'
import band from '/@/assets/projects/band.png'
import ShiftsUI from '/@/assets/projects/shifts-ui.png'
import RedHedgehog from '/@/assets/projects/the red hedgehog.png'
import SecondChance from '/@/assets/projects/a second chance.png'
import Bachelor from '/@/assets/projects/bachelor.png'

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
    ],
    embed: 'https://www.youtube.com/embed/qWQg7MT8oYc?si=DrUO9DRwJpTVqH9L&amp;start=60',
    highlight: true
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
    ],
    embed: 'https://www.youtube.com/embed/EsBlRcusFIc?si=gqEoPlH2zf99ln_M',
    highlight: true
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
    title: "Bachelor's Degree",
    category: ProjectCategory.ACADEMY,
    img: Bachelor,
    description: `
    I am currently studying for my B.Sc. in Computer Science at The Open University of Israel.
    I am expected to graduate in summer 2024, with a current GPA of 91.
    `,
    notes:
      "Tell about my past at the Technion...? (TODO) Also, convince Lior that it's worth mentioning that I'm crazy regarding the way I write essays",
    links: [
      {
        title: 'Grade Sheet',
        url: 'TODO'
      }
    ]
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
    embed: 'https://www.docdroid.net/tdVhPku/206584021-data-mining-20595-maman-21-pdf',
    links: [
      {
        title: 'Final Project - Part 1',
        url: 'https://www.docdroid.net/tdVhPku/206584021-data-mining-20595-maman-21-pdf'
      },
      {
        title: 'Final Project - Part 2',
        url: 'https://www.docdroid.net/GjM3WAp/206584021-data-mining-20595-maman-22-pdf'
      }
    ],
    highlight: true
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
    ],
    highlight: true
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
    ],
    highlight: true
  },
  {
    title: 'Eli',
    category: ProjectCategory.MUSIC,
    img: maria,
    description: `
    This is the first song I've recorded by myself...
    `,
    wilfi: 'fundamentals of recording and mixing.',
    wiwdd:
      'play more confidently and with more energy, write the drums differently, use different approach of mixing. Luckily, all of these improvments show in my next song - Maria, Maria.',
    embed: 'https://www.youtube.com/embed/ssSFOpgSOfI?si=pH2pAfbAaCrH7_8R',
    links: [
      {
        title: 'YouTube',
        url: 'https://youtu.be/ssSFOpgSOfI?si=ButuRB2VA03LAvWB'
      }
    ]
  },
  {
    title: 'Octavarium',
    category: ProjectCategory.MUSIC,
    img: octavarium,
    description: `
    A symphonic cover I made for the song Octavarium by Dream Theater.
    Specifically, it is written for whole symphonic orchestra, along with an electric guitar, electric bass, piano and a drum set.
    The cover is not full, some solos were omitted, and the song was shortened from 24 minutes to 16.
    
    `,
    notes: `
    The cover was to be played by the Technion Orchestra, but due to the Iron Swords war in Israel, the performance was cancelled.
    `,
    links: [
      {
        title: 'Original (YouTube)',
        url: 'https://youtu.be/XYV8Zt2k0RQ?si=ipvusKEI-23KUm6B'
      },
      {
        title: 'Cover (PDF)',
        url: 'TODO'
      }
    ]
  },
  {
    title: 'RHCP Cover Band',
    category: ProjectCategory.MUSIC,
    img: band,
    description: `
    I was the bassist of a Red Hot Chili Peppers cover band.
    We played in several venues, mostly small pubs in TLV, covering their most famous songs.
    `,
    embed: 'https://www.instagram.com/p/CYw-T53MZbx/embed/',
    links: [
      {
        title: 'Instragram - Part 1',
        url: 'https://www.instagram.com/p/CYw-T53MZbx/'
      },
      {
        title: 'Instragram - Part 2',
        url: 'https://www.instagram.com/p/CZDBPQPsLTi'
      }
    ]
  },
  {
    title: 'Shifts UI',
    category: ProjectCategory.CS,
    img: ShiftsUI,
    description: `
    Shifts UI is a platform for managing shifts, meant to be used in my previous workplace.
      I did this project with a friend-colleague of mine, who was responsible for the back-end, which was written using Python and the library Flask.
      I was responsible for developing the front-end of the platform, which was written in React.
      The projects was never finished - we actually managed to make it work locally, but the lack on knowledge in DevOps and cloud computing prevented us from deploying it.
      `,
    wilfi:
      'React, Python, Git, npm/yarn, how to work in another person, how websites work. A little of UI/UX.',
    wiwdd: 'use FireBase or Netlify for deployment. Use npm instead of yarn.',
    notes:
      "Although the project never came to be, I was very proud of it. It could have been a great tool for my previous workplace, and I've learned a lot from it.",
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/yonisimian/shifts-ui'
      }
    ]
  },
  {
    title: 'The Red Hedgehog',
    category: ProjectCategory.MUSIC,
    img: RedHedgehog,
    description: `
      The Red Hedgehog is the first music album I've ever released.
      I wrote the songs when I was 16-17 years old, using Guitar Pro 5 as my tablature software.
      Most of the songs started as an improvisation on the guitar, and then I wrote them down as part of
      my desire to learn how to write music and combine different instrument together into one greater thing.
      I put low to zero effort on mixing and mastering, as for I didn't know those terms back then, as well as the importance of them.
      `,
    embed: 'https://www.youtube.com/embed/pq4uIMAWRQU?si=xrEaLwHv2CQ6r-x9',
    links: [
      {
        title: 'YouTube',
        url: 'https://youtube.com/playlist?list=PL2_PPpf0L5n092bZCgY-nOPXN3-yVsbvG&si=FouSLMVUNfNHCq6B'
      },
      {
        title: 'Favorite song',
        url: 'https://youtu.be/pq4uIMAWRQU?si=9ahqb0FPU-v_YkmO'
      }
    ]
  },
  {
    title: 'A Second Chance',
    category: ProjectCategory.MUSIC,
    img: SecondChance,
    description: `
    A Second Chance is my second unmixed album :)
    This one was never completed due to my joinning to the army service, but I'm still proud of it.
    I released it about a year after the first album (The Red Hedgehog), this time using Guitar Pro 6 as my tablature software.
    I think that this album shows a great improvement in my songwriting skills,
    as well as mixing and mastering which I encountered the first time in my life.
    `,
    embed: 'https://www.youtube.com/embed/HkXwNQ4TOOI?si=A4N1E_M-dzu6Z4bz',
    links: [
      {
        title: 'YouTube',
        url: 'https://youtube.com/playlist?list=PL2_PPpf0L5n1rvPtW6PGnQM5wxVJIakbB&si=H5Kvj78lf1FoJAIZ'
      },
      {
        title: 'Favorite song',
        url: 'https://youtu.be/HkXwNQ4TOOI?si=0CK7BX1em0IJMAd5'
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
    `,
    embed: 'https://yonisimian-portfolio.netlify.app/',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/yonisimian/georgia-portfolio'
      }
    ]
  }
]

export default projects
