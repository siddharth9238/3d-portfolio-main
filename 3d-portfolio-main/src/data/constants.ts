export enum SkillNames {
  // --- MUST EXACTLY MATCH 3D MODEL NAMES ---
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",

  // --- YOUR CUSTOM SKILLS FOR EXPERIENCE ---
  JAVA = "java",
  SPRINGBOOT = "springboot",
  RESTAPI = "restapi",
  AJAX = "ajax",
  MYSQL = "mysql",
  SONARQUBE = "sonarqube",
  SAP = "sap",
  PYTHON = "python",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  // ==========================================
  // 3D KEYBOARD LOGOS (All restored to fix clicks)
  // ==========================================
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Yeeting code since '95. 🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JS but with strict typing. 🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The web's skeleton. 🦴",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling with ultimate drip. 💧",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven UI library. ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "The chill frontend framework. 🟢",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production-ready React framework. 👑",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS styling. 🌪️",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript on the backend. 🔙",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Fast, minimal Node framework. 🚂",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Advanced relational database. 🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Flexible NoSQL database. 🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control system. 🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting & collaboration. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Opinionated code formatter. ✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Node package manager. 📦",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend-as-a-service platform. 🔥",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Content management system. 📝",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system. 🐧",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "App containerization. 🐳",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Web server & reverse proxy. 🌐",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud computing services. ☁️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud computing by Google. 🌩️",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Terminal text editor. ⌨️",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Frontend deployment platform. ▲",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },

  // ==========================================
  // YOUR CORE SKILLS (Used for Experience section)
  // ==========================================
  [SkillNames.JAVA]: {
    id: 26,
    name: "java",
    label: "Java",
    shortDescription: "Enterprise-grade backend systems.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 27,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "REST APIs and Spring Security.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.RESTAPI]: {
    id: 28,
    name: "restapi",
    label: "REST APIs",
    shortDescription: "Structured client-server endpoints.",
    color: "#85ea2d",
    icon: "https://cdn.simpleicons.org/openapiinitiative/85EA2D",
  },
  [SkillNames.AJAX]: {
    id: 29,
    name: "ajax",
    label: "Fetch / Axios",
    shortDescription: "Asynchronous data flows.",
    color: "#5a29e4",
    icon: "https://cdn.simpleicons.org/axios/5A29E4",
  },
  [SkillNames.MYSQL]: {
    id: 30,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational schema design.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.SONARQUBE]: {
    id: 31,
    name: "sonarqube",
    label: "SonarQube",
    shortDescription: "Code quality checks.",
    color: "#4e9bcd",
    icon: "https://cdn.simpleicons.org/sonarqube/4E9BCD",
  },
  [SkillNames.SAP]: {
    id: 32,
    name: "sap",
    label: "SAP BTP",
    shortDescription: "Cloud solution architecture.",
    color: "#0faaff",
    icon: "https://cdn.simpleicons.org/sap/0FAAFF",
  },
  [SkillNames.PYTHON]: {
    id: 33,
    name: "python",
    label: "Python",
    shortDescription: "Problem solving and algorithms.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Nov 2025",
    endDate: "Apr 2026",
    title: "Software Engineer Trainee",
    company: "Nvisagecomp Solutions LLP",
    description: [
      "Shipped full-stack features for an enterprise client by connecting React screens with Java and Spring Boot services through Fetch/Axios workflows.",
      "Built database-backed CRUD endpoints with structured error handling, supporting role-based workflows and concurrent user sessions.",
      "Resolved server-side bugs and SonarQube findings across null handling, transactions, and security-sensitive backend logic.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.JAVA,
      SkillNames.SPRINGBOOT,
      SkillNames.RESTAPI,
      SkillNames.AJAX,
      SkillNames.MYSQL,
      SkillNames.SONARQUBE,
    ],
  },
  {
    id: 2,
    startDate: "Jul 2025",
    endDate: "Oct 2025",
    title: "Full Stack Intern",
    company: "YHills",
    description: [
      "Programmed scalable full-stack modules across React, JavaScript, Node.js, and Express workflows.",
      "Standardized frontend-backend API behavior with validation, consistent error responses, and asynchronous data fetching.",
      "Built reusable features while keeping UI behavior aligned with backend service contracts.",
    ],
    skills: [
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.RESTAPI,
      SkillNames.AJAX,
    ],
  },
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  institution: string;
  description: string[];
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Adamas University, Kolkata",
    description: [
      "Focusing on advanced software development, enterprise software environments, and modern web architectures.",
    ],
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Utkal University, Bhubaneswar",
    description: [
      "Built a strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and database management.",
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Light mode is bright. Proceed with confidence and maybe a little squinting.",
    "Switching to light mode. The UI has entered daylight mode.",
    "Light mode activated. Everything is now very visible.",
  ],
  dark: [
    "Dark mode activated. Much calmer.",
    "Back to dark mode. Good choice for late-night building.",
    "Dark mode is on. The stars can breathe again.",
  ],
};