import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { User } from "./user";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const dataUser: User = {
  name: "Cristhian Mercado Cespedes",
  nickname: "criswvs_",
  headline:
    "Senior Frontend Engineer | React, TypeScript, Performance, Scalable UI Systems",
  logo: "I design scalable frontend systems and enterprise experiences focused on performance, maintainability, and long-term impact.",
  resumeUrl: "/cv.pdf",
  about: `
  Hi, my name is Cristhian Mercado, and I am a Systems Engineer and Senior Frontend Engineer with experience building enterprise software, scalable frontend architectures, and high-performance web applications.

  Over the years I have contributed across frontend, backend, and mobile ecosystems, working on solutions ranging from university systems serving more than 75,000 students to global e-commerce platforms, business planning systems, enterprise RFID management solutions, and analytics environments connected to Zebra NFL initiatives.

  My primary expertise focuses on React, TypeScript, frontend architecture, performance optimization, scalable UI systems, MicroUI environments, and design system implementation. Throughout my career I have worked across React, Angular, Vue, Node.js, PHP, Kotlin, Java, and modern frontend ecosystems while adapting to different technical domains and business challenges.

  Most recently I contribute to enterprise administrative and RFID device management platforms, leading modernization initiatives involving UI migration efforts, shared theming systems, MicroUI architectures, and scalable frontend foundations. My work includes collaborating with distributed engineering teams across multiple countries and US stakeholders while improving maintainability, performance, and long-term scalability.

  I enjoy solving technical challenges involving architecture, frontend systems design, performance optimization, and building maintainable software that scales.

  Outside engineering I enjoy poetry, painting, motorcycles, board games, chess, and exploring technology trends.
  `,
  birthDate: "January 1st",
  joinedDate: "Joined in 2021",
  status: "Available",
  languages: [
    { name: "Spanish", level: "Native" },
    {
      name: "English",
      level: "Advanced (B2+). In the process of achieving fluency (C1) ",
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Angular",
    "Vue",
    "Micro Frontends",
    "Module Federation",
    "Performance Optimization",
    "Design Systems",
    "SASS",
    "TanStack Query",
    "Redux",
    "Node.js",
    "PHP",
    "Kotlin",
    "AWS",
  ],
  profilePicture: "/photo.JPG",
  interests:
    "Poetry, philosophy, software architecture, motorcycles, painting, board games, and technology exploration.",
  location: { city: "Santa Cruz", country: "Bolivia" },
  education: {
    university: {
      name: "Universidad Mayor de San Simon",
      dateJoined: "2016-02-01",
      dateFinished: "2022-02-01",
      degree: "Bachelor's Degree in Systems Engineering",
      location: { city: "Cochabamba", country: "Bolivia" },
    },
    certifications: [
      {
        name: "SmallTalk English Speaking Test",
        description:
          "Certificación avanzada en JavaScript y tecnologías relacionadas.",
        date: "2024-09-12",
        institution: "SmallTalk2Me",
        url: "https://app.smalltalk2.me/cert/cac68729",
      },
      {
        name: "Certified Frontend Developer (React)",
        description:
          "Certificate covering  topics like React, CSS, and JavaScript",
        skills: "JavaScript, ES6, React, CSS",
        date: "2024-09-10",
        url: "https://www.hackerrank.com/certificates/iframe/c907e108baee",
        institution: "HackerRank",
      },
      {
        name: "Certified JavaScript (Intermediate)",
        description:
          "Certificate covering topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
        skills: "JavaScript, ES6",
        date: "2024-09-10",
        url: "https://www.hackerrank.com/certificates/iframe/7e0ddf118ef0",
        institution: "HackerRank",
      },
    ],
  },
  projects: [
    {
      title: "Lexa",
      description:
        "Lexa is a browser extension that analyzes and highlights grammatical structures directly in the user's browser. It processes content locally and provides real-time feedback without sending data to external servers.",
      repositoryUrl: "https://github.com/Stumbleine/lexa",
      technologies: ["JS", "Preact", "CSS"],
    },
    {
      title: "Salar de Uyuni",
      description:
        "I have designed and developed this interactive animation using CodePen with CSS, Sass and HTML, representing an emblematic tourist place in my country.",
      url: "https://codepen.io/chang42/pen/wvEwbWe",
      technologies: ["HTML", "SASS", "CSS", "CodePen"],
      img: "/Salar.png",
    },
    {
      title: "Buffalo Talks",
      description:
        "I am currently developing a web application focused on learning and reinforcing English. The platform offers a wide variety of exercises designed to cover key aspects such as grammar, listening comprehension and reading. This project seeks to provide a comprehensive educational experience, combining interactive tools and dynamic content to improve users' language skills.",
      repositoryUrl: "https://github.com/Stumbleine/buffalo-talks",
      url: "https://buffalo-talks.vercel.app/",
      technologies: ["React", "Material UI", "TypeScript"],
    },
    {
      title: "Dactilosaurio",
      description:
        "I developed a short web project inspired by typing apps, with the aim of improving typing speed and accuracy. The app includes interactive exercises that allow users to practice and improve their typing skills by tracking their performance in real time.",
      repositoryUrl: "https://github.com/Stumbleine/Dactilosaurio",
      technologies: ["React", "Material", "JavaScript"],
    },
  ],
  experiences: [
    {
      role: "Senior Frontend Developer",
      dateStarted: "2026-02-01",
      description: `
Enterprise RFID device management platforms supporting operational workflows and hardware ecosystems. Contributing to frontend modernization initiatives involving MicroUI architectures, shared theming systems, UI migration efforts, and scalable frontend foundations using React and TypeScript.
Collaborate with distributed engineering teams across multiple countries and US stakeholders while contributing performance improvements and long-term maintainability initiatives. Also contributed to Vue 2 to Vue 3 migration efforts for Zebra NFL-related analytics environments.
`,
      challenges: [
        "Large-scale enterprise frontend scalability",
        "UI migration initiatives",
        "Shared theming consistency across MicroUI environments",
        "Frontend performance optimization",
        "Cross-team collaboration across distributed international teams",
      ],
      technologies: [
        "React",
        "Typescript",
        "TanStack",
        "Vue",
        "SASS",
        "Spring Boot",
        "Micro Frontends",
        "Module Federation (Vite)",
      ],
      links: [],
      company: {
        name: "New Vision Data",
        website: "https://www.newvisiondata.com/",
      },
      employmentType: "full-time",
    },
    {
      role: "Lead Frontend Developer",
      dateStarted: "2025-02-01",
      dateEnded: "2026-01-01",

      description: `
Led frontend development initiatives across internal administrative platforms, contributing frontend architecture decisions, UI quality standards, and technical execution using React and TypeScript.
Coordinated engineering efforts across frontend, backend, and mobile teams while collaborating with stakeholders to align technical delivery with business priorities. Helped establish engineering processes involving sprint planning, PR review practices, coding standards, reporting structures, ticket workflows, and technical alignment discussions.
`,

      challenges: [
        "Cross-team coordination across frontend, backend, and mobile teams",
        "Establishing engineering processes and development standards",
        "Balancing delivery timelines with software quality",
        "Improving team operational efficiency",
        "Technical alignment between engineering and business stakeholders",
      ],

      technologies: [
        "React",
        "TypeScript",
        "Scrum",
        "Jira",
        "Git",
        "PR Reviews",
        "Frontend Architecture",
        "Technical Leadership",
      ],

      links: [],

      company: {
        name: "New Vision Data",
        website: "https://www.newvisiondata.com/",
      },

      employmentType: "full-time",
    },
    {
      role: "IA Trainer",
      dateStarted: "2024-11-01",
      description:
        "I work as an AI model evaluator on various projects for Outlier. My role includes analyzing, improving, and providing feedback on the performance of models, ensuring their accuracy and effectiveness in real-world scenarios. I collaborate with large international teams, providing critical and strategic insight to optimize AI systems in different contexts.",

      technologies: [
        "IA Prompting",
        "Logical and Critical Thinking",
        "Attention to Detail",
        "Data Analysis",
        "Evaluation Criteria and Rubrics",
        "Time Management",
      ],
      links: [],
      company: {
        name: "Outlier",
        website: "https://outlier.ai/",
      },
      employmentType: "part-time",
    },
    {
      role: "Full Stack Developer",
      dateStarted: "2024-10-01",
      dateEnded: "2025-01-01",
      description: `
Strategic business planning platform designed to help organizations manage objectives, operational planning, and financial forecasting through interactive dashboards and analytical modules.
I contributed to frontend development using React and TypeScript while collaborating on backend services and financial data visualization features. The platform supported quarterly, monthly, and annual business projections, helping organizations make informed operational decisions.
`,
      challenges: [
        "Translating complex business concepts into intuitive UI experiences.",
        "Maintaining consistency across dashboard modules.",
        "Handling financial projection data and analytical visualizations.",
      ],
      technologies: [
        "React",
        "Typescript",
        "Bootstrap",
        "Python",
        "DJango",
        "SASS",
        "PostgreSQL",
        "Git",
        "Jira",
      ],
      links: [],
      company: {
        name: "Business Compass",
      },
      employmentType: "full-time",
    },
    {
      role: "Full Stack Developer",
      dateStarted: "2022-10-01",
      dateEnded: "2024-08-01",
      description: `
Worked across multiple enterprise web initiatives, including global e-commerce systems focused on auto parts distribution and large-scale business operations.
My responsibilities included frontend feature development, backend integrations, technical debt reduction initiatives, and Node.js migration efforts that improved maintainability and enabled future platform capabilities. I collaborated directly with US stakeholders, including in-person discussions, translating business requirements into scalable software solutions.
`,
      challenges: [
        "Legacy system modernization",
        "Node.js migration efforts",
        "Technical debt reduction",
        "Cross-functional collaboration",
      ],
      technologies: [
        "React",
        "JavaScript",
        "PHP",
        "AWS",
        "Node.js",
        "Nest",
        "PostgreSQL",
        "MySQL",
        "Git",
        "Jira",
      ],
      links: [],
      company: {
        name: "AssureSoft",
        website: "https://www.assuresoft.com/",
      },
      employmentType: "full-time",
    },
    {
      role: "Mobile Developer",
      dateStarted: "2022-10-01",
      dateEnded: "2024-08-01",
      description: `
Native Android application focused on discovering young football talent through social-style experiences, player profiles, and video-driven interactions.
I contributed to mobile architecture, profile systems, media experiences, and performance optimization initiatives involving caching strategies and video playback improvements using Kotlin and Jetpack Compose.
`,
      challenges: [
        "Video playback optimization",
        "Caching strategies",
        "Mobile architecture decisions",
        "Application lifecycle complexity",
      ],
      technologies: [
        "Android Studio",
        "Jetpack Compose",
        "Kotlin",
        "Firebase",
        "Material3",
        "Jira",
        "Git",
      ],
      links: [],
      company: {
        name: "AssureSoft",
        website: "https://www.assuresoft.com/",
      },
      employmentType: "full-time",
    },
    {
      role: "Full Stack Developer",
      dateStarted: "2021-10-01",
      dateEnded: "2022-12-31",
      description: `
University information system serving over 75,000 students, enabling organizations affiliated with the institution to publish offers, manage analytics, and improve engagement workflows.
I worked across frontend and backend development using React, PHP, Node.js, and supporting services while contributing reporting systems, statistical analysis features, and operational management capabilities.
`,
      challenges: [
        "Public-sector scalability requirements",
        "Large institutional workload support",
        "Operational reporting systems",
        "Balancing usability and system complexity",
      ],
      technologies: [
        "React",
        "Redux",
        "React Native",
        "JavaScript",
        "PHP",
        "Node.js",
        "PostgreSQL",
        "DBeaver",
        "Jira",
        "Git",
      ],
      links: [],
      company: {
        name: "UMSS",
      },
      employmentType: "full-time",
    },
    {
      role: "Frontend Developer",
      dateStarted: "2021-10-01",
      dateEnded: "2022-03-01",
      description: `
Contributed to internal university administrative systems focused on funding processes, operational visibility, and institutional workflows.
Worked on frontend experiences and UI implementation while learning software delivery practices, agile collaboration, and user-centered interface design.
`,
      technologies: [
        "Angular",
        "React",
        "TypeScript",
        "JavaScript",
        "Material",
        "Jira",
        "Git",
        "Figma",
      ],
      company: {
        name: "UMSS",
      },
      employmentType: "internship",
    },
  ],
  contact: [
    {
      name: "Phone",
      data: "+591 68468998",
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
      name: "E-mail",
      data: "cmercadocss@gmail.com",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  ],
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cristhian-m-css/",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Stumbleine",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "Codepen",
      url: "https://codepen.io/chang42",
      icon: <FontAwesomeIcon icon={faCodepen} />,
    },
  ],
};
