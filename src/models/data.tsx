import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { User } from "./user";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const dataUser: User = {
  name: "Cristhian Mercado C.",
  nickname: "criswaves",
  headline:
    "Full Stack Developer | Mobile Developer | React, Angular, TypeScript, Nest, PHP, Kotlin",
  logo: "I build accessible and enjoyable experiences on the internet, designed to connect and impact people.",
  resumeUrl: "/CristhianCV.pdf",
  about:
    "Hi, my name is Cristhian Mercado, and I am a Systems Engineer with over three years of experience as a developer. I consider myself motivated, ambitious, and proactive, thriving on challenges.\n\nMy career began as an intern at my university. Later, I worked with them, contributing to multiple projects, including a significant information system that benefited over 70,000 students. There, I worked with technologies like Angular, React, PHP, Node.js, and React Native.\n\nLater, at AssureSoft, I worked as a Mobile and Web Developer. I embraced the challenge of learning native mobile technologies, gaining proficiency in Kotlin, Java, and Jetpack Compose. I also transitioned to web development using React with TypeScript, PHP, and Node.js. A key project was a global e-commerce platform for auto parts, where I contributed to backend migration from Node.js version 10 to 16 and collaborated directly with clients.\n\nMost recently, at Compass Business, I focused on Frontend Development, designing and implementing UI/UX components for a financial platform using React, TypeScript, and Bootstrap.\n\nOutside work, I enjoy board games, chess, volleyball, calisthenics, and exploring new technology trends. On weekends, I like reading poetry or watching movies.",
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
  skills: ["React", "React Native", "Kotlin", "TypeScript", "Node.js"],
  profilePicture: "/photo.JPG",
  interests: "Filosofía, poesía, tecnología, y diseño de software.",
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
      description:
        "I was part of the development team for a web platform focused on strategic business planning. This tool is designed to support companies of all sizes in achieving their goals step by step through interactive dashboards, inspired by methodologies such as Lean. Additionally, it features financial modules that enable users to project their variable and fixed costs, among other key indicators, on a quarterly, monthly, and annual basis, facilitating informed decision-making",
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
      role: "Web Developer",
      dateStarted: "2022-10-01",
      dateEnded: "2024-08-01",
      description:
        "I worked on multiple projects as a Web Developer, one of the them was the development of new features and bug fixes for global e-commerce systems. I also supported migrations to upgraded versions of Node.js, along with all related dependencies, which reduced development time, improved scalability and enabled the addition of new features that were made possible by these upgrades. During this experience, I gained valuable insights by working closely with US native clients, collaborating with them in person to ensure the success of projects",
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
      description:
        "I worked as a mobile developer on a social media-like application focused on discovering football talents from a young age. The app allowed users to upload, edit, and view videos on a feed, as well as manage player profiles, including their career history, teams, clubs, and matches. It was developed natively using Kotlin and modern technologies like Jetpack Compose. Additionally, I performed testing and profiling to optimize video playback performance and caching, ensuring a seamless user experience.",
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
      description:
        "I was part of a team that developed an information system benefiting over 75,000 university students. This system enabled companies and businesses affiliated with the university to post product and service offers through a web platform, primarily designed for university staff. It also included features for managing usage reports, users, and generating statistics based on student preferences. Students could access these offers via a mobile application, authenticate themselves with their university credentials, and claim the offers directly from the app. Through this experience, I gained skills in managing small teams using agile frameworks like Kanban and deepened my knowledge of developing systems tailored to public institutions. ",
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
      description:
        "I gained experience as an intern as a frontend developer on several projects, focusing on the design and development of the user interface (UI) and user experience (UX) for a web platform intended for the University's departments. The platform allowed staff to oversee funding processes and applications, improved workflows, and enhanced decision-making within the institution.",
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
