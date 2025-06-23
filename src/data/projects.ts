import { Project, ProjectCategory } from '/@/types/portfolio'

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

import dataminingmmn21 from '/@/assets/mamans/20595 - Maman 21.pdf'
import dataminingmmn22 from '/@/assets/mamans/20595 - Maman 22.pdf'
import lin2mmn13 from '/@/assets/mamans/20229 - Maman 13.pdf'
import computationmmn15 from '/@/assets/mamans/20585 - Maman 15.pdf'
import defensivemmn12 from '/@/assets/mamans/20937 - Maman 12.pdf'
import imageprocessingmmn12 from '/@/assets/mamans/22913 - Maman 12.pdf'

const projects: Project[] = [
  {
    year: 2015,
    title: '2nd March',
    category: ProjectCategory.MUSIC,
    img: secondMarch,
    description: `
    This is the second march I have ever composed, hence its name.
    It originated from a spontaneous trombone improvisation when I was 17 years old.
    My foray into orchestral composition led me to experiment with orchestrating the improvised melody,
    ultimately formalizing it into a march tailored for a wind orchestra.
    The composition premiered in 2022 during a notable performance by the Technion Orchestra,
    and a recording of this premiere is accessible through the link below.

    The march is structured in a classic A B C A form:
    the main theme, followed by a low-brass section that contrasts with the main theme,
    then a wind trio featuring a transposition to the subdominant, and finally,
    the main theme returns in the new key.
    The march was composed using the Sibelius music notation software.
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
    year: 2021,
    title: 'Maria, Maria',
    category: ProjectCategory.MUSIC,
    img: maria,
    description: `
    This rock-pop song is the second one I've recorded independently, approximately three years after the first one - "Eli."
    Drawing from the lessons learned in previous attempts, I endeavored to enhance the professionalism of this project.
    This improvement encompassed better playing, recording, mixing, mastering, and all aspects involved in songwriting.
    Each musical component was performed by me, with the exception of the drum section, which I composed and executed digitally.
    The song was recorded and edited using the Cubase digital audio workstation (DAW).

    The song features electric and acoustic guitars, bass, glockenspiel, bongos, backing vocals, and singing - all performed by me.
    Additionally, I composed virtual drums, keys, and FX parts, which were played by the computer.
    In contrast to my first song (and most pop songs), "Maria, Maria" incorporates not just one but three voice lines,
    i.e., three different melodic lines that collectively shape the song. Each voice line is layered with tracks ranging from 4 to 10,
    with most of them being electric guitars.
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
    year: 2023,
    title: 'Data Mining',
    category: ProjectCategory.ACADEMY,
    img: sklearn,
    description: `
    As part of my B.Sc. in Computer Science, I enrolled in a Data Mining course.
    Throughout the course, we delved into various data mining algorithms, including decision trees, Bayesian inference, neural networks,
    and more, with an emphasis on their strategic application based on contextual considerations.
    Beyond merely understanding the algorithms and their integration into databases to meet specific needs, we were instructed on data collection,
    integration, and methods to address incomplete, biased, or variant data, aiming to prevent analysis issues such as overfitting and underfitting.
    Furthermore, the course covered evaluation methods essential for thorough result analysis and drawing conclusions after implementing any data mining algorithm on our database.

    The final project, accessible through the links below, required the practical application of the learned methods and algorithms to analyze a dataset.
    I opted to document this final project using LaTeX to ensure a professional presentation, and I am indeed pleased with the results :)
    `,
    wilfi:
      'Python, Pandas, Scikit-learn, Matplotlib, Data Mining algorithms, how to analyze a dataset, how to present the results.',
    embed: dataminingmmn21,
    links: [
      {
        title: 'Final Project - Part 1',
        url: dataminingmmn21
      },
      {
        title: 'Final Project - Part 2',
        url: dataminingmmn22
      }
    ],
    highlight: true
  },
  {
    year: 2021,
    title: 'C Calculator',
    category: ProjectCategory.CS,
    img: c,
    description: `
    This simplistic calculator, written in C, holds special significance for me.
    If you peruse the README markdown file, accessible through the link below, you will find a comprehensive exposition detailing the intricacies of how I created this calculator.
    It's worth noting that this project marked my initiation into C programming, serving as a valuable tool in my learning process.

    The calculator itself, as previously mentioned, is rather straightforward, featuring a command-line interface and a set of basic math arithmetic operations.
    Additionally, it incorporates trigonometric functions, the utilization of popular and custom mathematical constants,
    and a functionality for keeping and viewing a history of calculations.

    I believe this project serves as a noteworthy example of my ability to articulate my thoughts and explain my work to others,
    a skill crucial for collaborative work within a team or a company.
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
    year: 2021,
    title: 'PacmanX10',
    category: ProjectCategory.CS,
    img: pacmanx10,
    description: `
    This project marked my initiation into C++ (written in C++11) and was conceived as an enjoyable and straightforward game submitted for an international online game jam.
    The submission achieved 5th place in the "authentic in-the-spirit entry" category out of more than 100 entries.
    The game leverages a game-focused C++ library called "PixelGameEngine," created by a YouTuber whom I follow.
    This library is designed to handle user input and render real-time graphics, leaving algorithmic aspects to the coder.

    Being my first venture into C++, this project served as an invaluable learning experience.
    My primary challenge revolved around implementing memory management to ensure efficiency and low hardware requirements, all while adhering to the competition's deadline.

    Beyond coding, I composed and produced the game's music and sound effects, both crafted using FL Studio.
    The musical composition incorporates eight instruments (synthesizers and drum machines), drawing inspiration from classic 8-bit games.
    The sound effects comprise original vocalizations processed through audio effects such as pitch shift and time warp.
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
    My journey at Intel has begun in 2022 as an R&D software development student.
    Within our team, we are tasked with the development of a compiler designed to streamline the validation process for cutting-edge chips conducted by Intel's validation teams.
    As a part of my role, I extensively employ C++ as the primary programming language, complemented by occasional use of Python and Assembly.

    In addition to my primary responsibilities, I take the initiative to prepare riddles and short lectures for our team's weekly meetings,
    typically focusing on the subject of modern C++ to encourage its adoption within the team. In the YouTube video below, you can find a demonstration of such a riddle.

    At Intel I learned how to work in a team, and how to engage with other teams as well.
    I have acquired and continue to refine the ability to conceive a feature idea, implement it, conduct thorough testing,
    and facilitate its deployment — a process that typically spans a few months and, for me, parallels the execution of a small personal project for each such feature.
    `,
    wilfi:
      'C++17, Python, Git, tcsh, LLVM, how to write tests, and various aspects of operating systems as well (not to forget the teamwork dynamics 😄).',
    embed: 'https://youtube.com/embed/XMI8ZZLw_So?si=r4eO7wUnbmvIByAz',
    notes:
      "For clear reasons, I can't provide any code from this project; however, I can talk about it in more detail in person :)"
  },
  {
    title: "Bachelor's Degree",
    category: ProjectCategory.ACADEMY,
    img: bachelor,
    description: `
    I am currently pursuing my B.Sc. in Computer Science at The Open University of Israel, with an anticipated graduation in the summer of 2024.
    I initiated my studies while serving in the IDF in 2018, subsequently transferring to the Technion in 2021, a year and a half after my discharge.
    Following my employment at Intel in 2022, I returned to The Open University.

    My elective courses within the degree program include Advanced Java Programming, Data Mining, Image Processing, Defensive System Programming, Databases,
    a seminar on Artificial Intelligence, and a project focusing on Web Applications.
    Presently, my GPA stands at 91.
    `,
    notes:
      'Some of my essays are available on other projects in this portfolio, such as Data Mining and LaTeX.'
  },
  {
    title: 'LaTeX',
    category: ProjectCategory.ACADEMY,
    img: LaTeX,
    description: `
    The majority of my assignments during my Computer Science degree were created using MS Word software.
    However, at a certain point, I made the decision to delve into LaTeX, attracted by its reputation as a superior tool for crafting academic assignments.
    My motivation stemmed from a desire to enhance the professional appearance of my assignments and to have an alternative to MS Word
    that excels in areas where Word may fall short, such as managing graphics, sectioning, bibliography, and maintaining a cohesive aesthetic throughout the document.

    My LaTeX assignments are composed using the online platform Overleaf.
    Below, you'll find links to samples of assignments from different courses that I authored using LaTeX.
    `,
    embed: imageprocessingmmn12,
    links: [
      {
        title: 'Sample #1',
        url: imageprocessingmmn12
      },
      {
        title: 'Sample #2',
        url: computationmmn15
      },
      {
        title: 'Sample #3',
        url: defensivemmn12
      },
      {
        title: 'Sample #4',
        url: lin2mmn13
      }
    ]
  },
  {
    year: 2018,
    title: 'Eli',
    category: ProjectCategory.MUSIC,
    img: maria,
    description: `
    This rock song was composed by me, and it is the first piece I've fully recorded.
    The composition includes electric guitars (lead and backing), bass guitar, trombone, and backing vocals, all performed by myself, in addition to virtual drums.
    Recorded in multiple live takes without a written score, the production and mixing took place in Cubase.

    The melody, harmony, and overall sound of the song showcase my greatest influence — the late '90s alternative rock band Red Hot Chili Peppers.
    My aim was to achieve a light and clean mix, blending the electric guitars with my primary instrument, the trombone.
    The song also incorporates original lyrics, although they have not been recorded due to my limited knowledge in voice recording and mixing.
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
    year: 2023,
    title: 'Octavarium',
    category: ProjectCategory.MUSIC,
    img: octavarium,
    description: `
    Following my performance of the 2nd march with the Technion Wind Orchestra,
    I sought to challenge myself further and undertake a more ambitious and grandiose project.
    Consequently, I chose to compose a symphonic cover for one of my favorite songs - "Octavarium" by Dream Theater.
    Unlike the 2nd march, this cover is orchestrated for a symphonic orchestra, featuring also an electric guitar, electric bass, piano, and a drum set.

    I crafted this cover using the music notation software MuseScore 4. It's worth noting that the cover is not complete;
    some solos were omitted, and the song was condensed from its original 24-minute duration to 16 minutes.
    This adjustment was made to align with the orchestra's concert schedule and to emphasize the entire orchestra's sound
    as the primary focus of the composition, rather than the solos (which, of course, are performed by individual instruments).
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
    I served as the bassist in a Red Hot Chili Peppers cover band, comprising four members - guitar, bass, drums players, and a vocalist, mirroring the lineup of the original band.
    Our performances took place in various venues, primarily small pubs in Tel Aviv, where we covered the most renowned songs of the Red Hot Chili Peppers.

    Typically, our sets were concise, spanning only a few minutes and encompassing 4-5 songs.
    However, on one occasion, we secured a venue that allowed us to perform a full show, where we played 14 songs, resulting in an approximately 90-minute performance.
    The set-list for this show, parts of which are accessible through the links below, closely resembled RHCP's own set-lists, both in terms of song selection and duration.

    Participating in this band proved to be a rewarding experience, enabling me to break away from the confines of classical music performances.
    It provided an opportunity to explore a different form of art that engages the audience more and is closely tied to the "feel" and energy,
    rather than solely focusing on the notes and precision required in classical music.
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
    year: 2023,
    title: 'Psycho App - WIP',
    category: ProjectCategory.CS,
    img: psycho,
    description: `
    The working title for my current project is "Psycho App," a temporary name for a psychometric test educational web application that I am currently developing.
    The primary audience for this app is intended to be students, and possibly high schoolers.
    Although still in the early stages of development, the app has already surpassed 4000 lines of code, a milestone I am proud to showcase here.

    I am using Vue 3, one of the most widely used JavaScript frameworks, for the development of the app.
    Additionally, Firebase is utilized for various purposes, with a primary focus on the database, and Tailwind CSS is employed for styling purposes.
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
    year: 2020,
    title: 'Shifts UI',
    category: ProjectCategory.CS,
    img: shiftsUI,
    description: `
    "Shifts UI" is a shift management platform designed for use in my former workplace.
    Collaborating with a friend and colleague, I took charge of the front-end development using the popular JavaScript framework React, along with Bootstrap for styling.
    Simultaneously, my colleague handled the back-end using Python and the Flask library.

    Despite the project remaining unfinished and not deployed, we successfully achieved functionality on a local level.
    The lack of expertise in DevOps and cloud computing posed challenges for deployment.
    Nevertheless, the experience gained from this project was invaluable, and I am unequivocally proud enough of the progress made to include its code in my portfolio.
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
    year: 2016,
    title: 'The Red Hedgehog',
    category: ProjectCategory.MUSIC,
    img: redHedgehog,
    description: `
    "The Red Hedgehog" stands as my inaugural music album release. I composed the songs at the age of 16-17, utilizing Guitar Pro 5 as my tablature software.
    The formation of most songs emerged from guitar improvisations, transcribed as part of my aspiration to learn music composition and blend various instruments into a cohesive whole.
    Back then, I allocated minimal effort to mixing and mastering, unfamiliar with these terms and their significance.

    Comprising 16 alternative-rock tracks, the album predominantly features guitars, bass, and drums, with occasional additions of keys enhance certain tracks.
    Each song typically consists of 4-10 tracks, with a standard setup of one drum set, one bass, and the remainder allocated to guitars.
    The songs exhibit simplicity in structure, heavily influenced by the Red Hot Chili Peppers, with a subtle touch of inspiration from Crush 40.
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
    year: 2017,
    title: 'A Second Chance',
    category: ProjectCategory.MUSIC,
    img: secondChance,
    description: `
    "A Second Chance" represents my second album, albeit remaining unmixed; nonetheless, it holds a special place in my creative journey.
    Unfortunately, this album was left incomplete due to my enlistment in the army, but I take pride in its existence.
    Released approximately a year after my debut album, "The Red Hedgehog," this time I utilized Guitar Pro 6 as my tablature software.
    Notably, this album reflects considerable growth in my songwriting skills, marked by my introduction to mixing and mastering techniques.

    Comprising 12 alternative-rock tracks, "A Second Chance" ventures beyond the conventional guitars, bass, and drums setup.
    It incorporates diverse elements, ranging from various synthesizers to orchestral instruments.
    Most tracks in the album consist of 5-12 individual components.
    While maintaining simplicity in structure, these songs exhibit a heightened level of complexity compared to those found on "The Red Hedgehog."
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
    Upon learning about the graduate studies positions in the Georgia Tech School of Music,
    I embarked on creating a portfolio website to adeptly showcase my qualifications.
    As I delved into the development of this site, I realized its merit as a standalone project, a testament to the quality of my work.

    The website was crafted using Vue 3 and TypeScript, with styling implemented through Uno CSS.
    For deployment and hosting, I utilized the services of Netlify.
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
