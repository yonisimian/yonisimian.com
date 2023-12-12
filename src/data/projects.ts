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
import shiftsUI from '/@/assets/projects/shifts-ui.png'
import redHedgehog from '/@/assets/projects/the red hedgehog.png'
import secondChance from '/@/assets/projects/a second chance.png'
import bachelor from '/@/assets/projects/bachelor.png'
import LaTeX from '/@/assets/projects/LaTeX.png'
import psycho from '/@/assets/projects/psycho.png'

const projects: Project[] = [
  {
    title: '2nd March',
    category: ProjectCategory.MUSIC,
    img: secondMarch,
    description: `
    This is the second march I have ever composed, hence the name.
    It originated from a spontaneous trombone improvisation when I was 17 years old.
    My foray into orchestral composition led me to experiment with orchestrating the improvised melody,
    ultimately formalizing it into a march tailored for a wind orchestra.
    The composition premiered in 2022 during a notable performance by the Technion Orchestra,
    and a recording of this premiere is accessible through the link below.
    
    The march is shaped in a classic march A B C A form: main theme,
    followed by a low-brass part that contrast the main theme,
    then a wind trio featuring a transposition to the subdominant,
    and finally the main theme again in the new key.
    The march was written using the Sibelius music notation software.
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
    This rock-pop song is the second song I've recorded by myself, about 3 years after the first one - Eli.
    Drawing from the lessons of previous attempts, I endeavored to elevate the professionalism of this project.
    This means better playing, recording, mixing, mastering, and everything that involves writing a song.
    Each musical component was performed by me, except for the drum section - which I composed and executed digitally.
    The song was recorded and edited using the Cubase DAW.

    The song features electric and acoustic guitars and bass, as well as glockenspiel, bongos, backing vocals, and also singing - all performed by me.
    Along with that, I wrote virtual drums, keys and FXs parts that were played by the computer.
    In contrast to my first song (and most pop songs), Maria, Maria features not one but three voice lines -
    i.e. three different melodic lines that together make the song.
    Each voice line is stacked with layers of 4 to 10 tracks, most of them being electric guitars.
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
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn,
    description: `
    As part of my B.Sc. in Computer Science, I took a course in Data Mining.
    In this course we learned about various data mining algorithms such as decision trees, Bayesian inference, neural networks and more,
    emphasizing their strategic application based on contextual considerations.
    In addition to the algorithms themselves and the ability to fit an algorithm into a database and my needs,
    we were taught how to collect the data, integrate it, and also some methods to handle incomplete / biased / variant
    data in order to avoid analysis issues such as overfitting and underfitting.
    Moreover, evaluation methods have been taught for good result analysis and conclusion drawing
    after executing any data-mining algorithm on our database.
    
    
    The final project, accessible through the links below, required the application of the learned methods and algorithms to analyze a dataset.
    I’ve decided to write this final project using LaTeX to make it look professional, and I am indeed pleased with the results :)
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
    This simplistic calculator written in C is more than just another project for me;
    if you look at the readme markdown file, accessible through the link below,
    you will encounter a comprehensive exposition detailing the intricacies of how I made this calculator.
    Also good to mention, this was my first C project, and thus its purpose what helping me learn this language.
    The calculator itself, as I said, is rather simplistic; it has a command-line interface, and it features a set of
    basic math arithmetic operations along with trigonometric functions, usage of popular / custom mathematical constants,
    and also keeping and viewing a history of calculations.

    I think this project serves as a good example of my ability to express myself and explain my work to others,
    which is important for working with a team and or in a company.    
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
    This project was my first experience with C++ (written in C++11),
    intended as a fun and straight-forward game, submitted for an international online game jam.
    The submission won 5th place in "authentic in-the-spirit entry" out of more more than 100 entries.
    The game utilizes a game-focused C++ library called "PixelGameEngine" that was created by a Youtuber that I like.
    This library is focused on obtaining user input and rendering real-time graphics, while leaving all algorithmic aspects to the coder.
    
    This project was the first C++ project I've ever done, and it was a great learning experience.
    My main challenge was the memory management implementation, ensuring efficiency and low hardware requirements, while meeting the competition’s hard deadline.    

    In addition to coding, I composed and created the game's music and sound effects, both produced using FL studio.
    The music consists of eight instruments (synthesizers and drum machines), inspired by classic 8-bit games.
    The sound effects consist of original vocalizations, processed by audio effects such as pitch shift and time wrap.
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
    title: 'Intel',
    category: ProjectCategory.CS,
    img: intel,
    description: `
    I started working at Intel in 2022 as an R&D software development student.
    Our team is responsible for developing a compiler designed to facilitate the validation of cutting-edge chips by our validation teams.
    As part of my role, I develop using C++ as the main programming language, alongside with Python and Assembly occasionally. 
    Aside from my role, I also prepare riddles and short lectures for our team's weekly meetings,
    usually on the topic of modern C++ which I encourage the team to embrace.
    
    At Intel I learned how to work in a team, and how to engage with other teams.
    I learned (and keep learning) how to come up with a feature idea, implement it,
    test it and enable it; a process that usually takes a few months and for me is like having a small project by itself, for each such feature.
    `,
    wilfi:
      'C++17, Python, Git, tcsh, LLVM, how to write tests, and various aspects of operating systems as well (not to forget the teamwork dynamics 😄).',
    notes:
      "For clear reasons, I can't provide any code from this project; however, I can talk about it in more detail in person :)"
  },
  {
    title: "Bachelor's Degree",
    category: ProjectCategory.ACADEMY,
    img: bachelor,
    description: `
    I am currently studying for my B.Sc. in Computer Science at The Open University of Israel, set to graduate in summer 2024.
    I started the degree while serving in the IDF in 2018, moved to the Technion in 2021 a year and a half after my discharge,
    and returned to the Open University a year later in 2022 after being hired to Intel.
    
    My elective courses in the degree are:
    Advanced Java Programming, Data Mining, Image Processing, Defensive System Programming, Databases,
    A seminar work in the topic of Artificial Intelligence, and a project in the topic of Web Applications.
    My current GPA is 91.    
    `,
    notes:
      'Some of my essays are available on other projects in this portfolio, such as Data Mining and LaTeX.'
  },
  {
    title: 'LaTeX',
    category: ProjectCategory.ACADEMY,
    img: LaTeX,
    description: `
    Most of the assignments in my Computer Science degree I made using the MS Word software.
    At some point, I decided to learn LaTeX, as I heard it is a better tool for writing academic assignments.
    I wanted my assignments to look more professional, and I also wanted to have an alternative to MS Word that
    succeeds where Word fails such as managing graphics, sectioning, bibliography
    and maintaining a unified aesthetic look for the entire document.
    
    My LaTeX assignments are written using the online software of Overleaf.
    Below are links to three samples of assignments in different courses that I wrote using LaTeX.    
    `,
    embed: 'https://www.docdroid.net/wXeq6T3/assignment-sample-1-pdf',
    links: [
      {
        title: 'Sample #1',
        url: 'https://www.docdroid.net/wXeq6T3/assignment-sample-1-pdf'
      },
      {
        title: 'Sample #2',
        url: 'https://www.docdroid.net/VnW7wBU/assignment-sample-2-pdf'
      },
      {
        title: 'Sample #3',
        url: 'https://www.docdroid.net/yEhYMJW/assignment-sample-3-pdf'
      }
    ]
  },
  {
    title: 'Eli',
    category: ProjectCategory.MUSIC,
    img: maria,
    description: `
    This is a rock song I composed, and the very first one that I've recorded fully.
    The song features electric guitars (lead and backing), bass guitar, trombone and backing vocals - all performed by myself, as well as virtual drums.
    The song was recorded in multiple live takes, without written score, produced and mixed in Cubase.
    The song's melody, harmony and sound show my greatest influence - the late 90’s alternative rock band Red Hot Chilli Peppers.
    My goal was to get a light and clean mix, while combining the electric guitars with my main instrument - the trombone.
    The song also features original lyrics, which have not been recorded due to lack of knowledge in voice recording and mixing.
    `,
    wilfi: 'fundamentals of recording and mixing.',
    wiwdd:
      'play more confidently and with more energy, write the drums differently, use different approach of mixing. Luckily, all of these improvments show in my next song - Maria, Maria.',
    embed: 'https://www.youtube.com/embed/MJBjzEIoYDo?si=zSror3bOdFtM1nao',
    links: [
      {
        title: 'YouTube',
        url: 'https://youtu.be/MJBjzEIoYDo'
      }
    ]
  },
  {
    title: 'Octavarium',
    category: ProjectCategory.MUSIC,
    img: octavarium,
    description: `
    After performing my 2nd march at the Technion with its wind orchestra,
    I wanted to stretch my limits and do something more ambitious and grandiose for my next project.
    Hence, I decided to write a symphonic cover for one of my favorite songs - Octavarium by Dream Theater.
    Unlike the 2nd march, this cover is written for a symphonic orchestra,
    along with an electric guitar, electric bass, piano and a drum set.
    
    This cover was written using the music notation software MuseScore 4.
    The cover is not full, some solos were omitted, and the song was shortened from 24 minutes to 16
    in order to fit in the orchestra’s concert schedule,
    as well as my desire to feature the entire orchestra’s sound as the main focus of this song rather than the solos
    (which are of course performed by one instrument at a time).    
    `,
    embed: 'https://musescore.com/user/2563941/scores/13304740/embed',
    notes: `
    The cover was to be played by the Technion Orchestra, but due to the Iron Swords war in Israel, the performance was cancelled.
    `,
    links: [
      {
        title: 'Original (YouTube)',
        url: 'https://youtu.be/XYV8Zt2k0RQ?si=ipvusKEI-23KUm6B'
      },
      {
        title: 'Cover (MuseScore)',
        url: 'https://musescore.com/user/2563941/scores/13304740'
      }
    ]
  },
  {
    title: 'RHCP Cover Band',
    category: ProjectCategory.MUSIC,
    img: band,
    description: `
    I was the bassist of a cover band of the rock band Red Hot Chili Peppers.
    Our cover band consisted of 4 members - guitar, bass, drums players and a vocalist, just like the band itself.
    We played in several venues, mostly small pubs in TLV, covering their most famous songs.
    
    Our performances usually lasted only a few minutes, containing only 4-5 songs;
    but we managed once to find a place that wanted us for a full show,
    and we played about 14 songs which concluded in a show of about 90 min.
    In this show, which parts of it are available in the links below,
    we played a set-list similar to RHCP’s set-lists in their own shows (which last a similar amount of time as well).
    
    The band was a nice experience for me to get out of the classical music performances boundaries and experiment with a different type of art,
    such that involves the audience more and is more related to the "feel" and the energy rather than to the notes themselves
    and the accuracy that is required when playing classical music.
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
    title: 'Psycho App - WIP',
    category: ProjectCategory.CS,
    img: psycho,
    description: `
    Psycho App is a temporary name for a psychometric test educational web app I'm currently working on,
    that's meant to be used by students and perhaps also high-schoolers.
    The app is in early stages of development, but has already reached more than 4000 lines of code that I'm proud of enough to present here.
    
    The app is developed using Vue 3, one of the most famous JavaScript frameworks,
    as well as Firebase for different purposes (mainly database), and Tailwind CSS for styling.    
    `,
    wilfi: `
    Vue3, TypeScript, Tailwind CSS, FireBase, Hosting, Deploying, CI/CD, UI/UX, AC/DC (just kidding).
    I also expect to implement data mining algorithms in the future, and learn how to analyze the app's usage for better efficiency and UX.
    `,
    notes:
      'The code is not yet available on GitHub, but a POC is available on the link below. The app is not yet ready for production, but it is already usable.',
    links: [
      {
        title: 'Psycho App',
        url: 'https://psycho-app-69420.web.app/'
      }
    ]
  },
  {
    title: 'Shifts UI',
    category: ProjectCategory.CS,
    img: shiftsUI,
    description: `
    Shifts UI is a platform for managing shifts, meant to be used in my previous workplace.
    I did this project with a friend-colleague of mine, who was responsible for the back-end, which was written using Python and the library Flask.
    I was responsible for developing the front-end of the platform, which was written in the most popular JavaScript framework - React, as well as Bootstrap for styling.
    
    The project was never finished - we actually managed to make it work locally,
    but the lack of knowledge in DevOps and cloud computing prevented us from deploying it.
    However, I learned a lot from making this project, and I'm undoubtly proud enough of it to present its code in this portfolio.
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
    img: redHedgehog,
    description: `
    The Red Hedgehog is the first music album I've ever released.
    I wrote the songs when I was 16-17 years old, using Guitar Pro 5 as my tablature software.
    Most of the songs started as an improvisation on the guitar, and then I wrote them down
    as part of my desire to learn how to write music and combine different instruments together into one greater thing.
    I put low to zero effort on mixing and mastering, as I didn't know those terms back then, as well as the importance of them.
    
    The album contains 16 alternative-rock songs, most of them featuring only guitars, bass and drums.
    Most of the songs contain 4-10 tracks, usually one drum set, one bass, and the rest are guitars.
    Sometimes keys were added as well. The songs are simple in shape and form, and are heavily influenced by the band Red Hot Chili Peppers,
    and a bit of influence from Crush 40 can be heard as well.    
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
    img: secondChance,
    description: `
    A Second Chance is my second unmixed album :D
    This one was never completed due to my joining the army service, but I'm still proud of it.
    I released it about a year after the first album (The Red Hedgehog), this time using Guitar Pro 6 as my tablature software.
    I think that this album shows a great improvement in my songwriting skills,
    as well as mixing and mastering which I encountered for the first time in my life.
    
    The album contains 12 alternative-rock songs, this time featuring more than just guitars, bass and drums -
    sometimes different types of synthesizers, and sometimes orchestral instruments. Most of the songs contain 5-12 tracks.
    The songs are simple in shape and form, but a bit more complex than those on The Red Hedgehog. 
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
    When I heard about the graduate studies positions in the Georgia Tech School of Music,
    I decided to create a portfolio website to effectively showcase my qualifications.
    After working on this site for a while, I understood that it was worth presenting the site itself as a project,
    as I believe it stands as a compelling testament to the quality of my work.
    
    This site was written using Vue 3 and TypeScript, was styled using Uno CSS, and was deployed and hosted using Netlify.
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
