import type { FC } from "react";
import { File, FolderGit2, Github, Linkedin, Mail, Send } from "lucide-react";

export interface SidebarLinksInt {
  titleKey: string;
  icon: FC<{ className?: string }>;
  path: string;
  selected?: boolean;
}

export interface SocialAccount {
  icon: FC<{ className?: string }>;
  path: string;
  label: string;
}

export const sidebarLinks: SidebarLinksInt[] = [
  {
    titleKey: "resume",
    icon: File,
    path: "/",
  },
  {
    titleKey: "projects",
    icon: FolderGit2,
    path: "/projects",
  },
  {
    titleKey: "contact",
    icon: Send,
    path: "/contact",
  },
];

export const socialAccounts: SocialAccount[] = [
  {
    icon: Github,
    path: "https://github.com/fahchouchsm",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    path: "https://www.linkedin.com/in/fachchouch-mohammed-63b311375",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    path: "mailto:fahchouchsm@gmail.com",
    label: "Email",
  },
];

interface AvailableLanguagesInt {
  key: string;
}

export const AvailableLanguages: AvailableLanguagesInt[] = [
  { key: "en" },
  { key: "fr" },
];

export interface educationItemsInt {
  key: string;
  yearBegin: number;
  yearEnd: number | null;
  imgKey: string;
  type: "education" | "work" | "internship";
  skills: string[];
  links?: {
    link: string;
    name: string;
  }[];
  locationLink?: string;
}

export const educationItems: educationItemsInt[] = [
  {
    key: "ehei",
    yearBegin: 2024,
    yearEnd: 2027,
    imgKey: "ehei.webp",
    type: "education",
    skills: [
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "PHP",
      "React",
      "Laravel",
      "Node.js",
      "Django",
      "Spring Boot",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Linux",
      "Windows Server",
      "Cloud Computing",
      "AWS",
      "Azure",
      "Docker",
      "RESTful API",
      "GraphQL",
      "Cybersecurity",
      "OAuth2",
      "JWT",
      "Flutter",
      "React Native",
      "Machine Learning",
      "Unit Testing",
    ],
    links: [
      {
        link: "https://ehei.ac.ma/",
        name: "Official Website",
      },
    ],
    locationLink: "https://maps.app.goo.gl/ULMt4F4VatWtKsEt6",
  },
  {
    key: "pfeBts",
    yearBegin: 2023,
    yearEnd: null,
    imgKey: "pfeBts.png",
    type: "education",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Electron",
      "Tailwind CSS",
      "MongoDB",
    ],
    links: [
      {
        link: "https://github.com/fahchouchsm/CasaChores",
        name: "Source Code",
      },
    ],
  },
  {
    key: "radeeo",
    yearBegin: 2023,
    yearEnd: null,
    imgKey: "radeeo.jpg",
    type: "internship",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Electron",
      "Tailwind CSS",
      "MySQL",
    ],
    links: [
      {
        link: "https://www.radeeo.ma",
        name: "Radeeo Website",
      },
    ],
    locationLink: "https://maps.app.goo.gl/iQpjxcv3bfKoJSff7",
  },
//  todo
  {
    key: "persoProjects",
    yearBegin: 2021,
    yearEnd: null,
    imgKey: "udemy.png",
    type: "education",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "APIs",
    ],
    // todo
    links: [],
    locationLink: undefined,
  }

];

export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  stack: string[];
  language: string;
  commits?: number;
  stars?: number;
  githubUrl: string;
  demoUrl?: string;
  imgUrl?: string;
  imgAlt?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "authGetway-PFA-4year",
    description:
      "Spring Boot auth gateway for a Smart City microservices architecture with JWT validation and RBAC enforcement.",
    stack: ["Spring Boot", "Java 21", "Spring Cloud Gateway", "JWT", "Maven", "Docker"],
    language: "Java 91% · HTML 8% · Dockerfile 1%",
    commits: 43,
    stars: 1,
    githubUrl: "https://github.com/fahchouchsm/authGetway-PFA-4year",
    imgUrl: "/pfp.png",
    imgAlt: "authGetway-PFA-4year project",
  },
  {
    id: 2,
    title: "fixMyCity-Front",
    description:
      "React/TypeScript Smart City frontend monorepo with FixMyCity and BusWay apps, shared auth flow, and Vite setup.",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "MUI", "Redux Toolkit", "Vite"],
    language: "React/TypeScript",
    githubUrl: "https://github.com/fahchouchsm/fixMyCity-Front",
    imgUrl: "/pfp.png",
    imgAlt: "fixMyCity-Front project",
  },
  {
    id: 3,
    title: "CasaChores",
    description:
      "Service marketplace with location-aware search, provider profiles, reviews, real-time chat, and OTP verification.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "Twilio"],
    language: "TypeScript 81% · JavaScript 18%",
    commits: 25,
    githubUrl: "https://github.com/fahchouchsm/CasaChores",
    imgUrl: "/pfp.png",
    imgAlt: "CasaChores project",
  },
  {
    id: 4,
    title: "fixMyCity-ASP-RestAPI-4year",
    description:
      "ASP.NET Core REST microservice for the Smart City platform, designed to trust gateway-injected identity headers.",
    stack: ["ASP.NET Core", "C#", "Docker", "Bruno"],
    language: "C# 64% · Dockerfile 36%",
    commits: 1,
    githubUrl: "https://github.com/fahchouchsm/fixMyCity-ASP-RestAPI-4year",
    imgUrl: "/pfp.png",
    imgAlt: "fixMyCity ASP REST API project",
  },
  {
    id: 5,
    title: "BlackJackSimulator",
    description: "Java Blackjack simulator in a Maven project setup for IntelliJ.",
    stack: ["Java", "Maven"],
    language: "Java 100%",
    commits: 2,
    githubUrl: "https://github.com/fahchouchsm/BlackJackSimulator",
    imgUrl: "/pfp.png",
    imgAlt: "BlackJackSimulator project",
  },
  {
    id: 6,
    title: "BlackJack-Simulator",
    description: "Alternative Java Blackjack simulator workspace with VS Code style structure.",
    stack: ["Java"],
    language: "Java 100%",
    commits: 5,
    githubUrl: "https://github.com/fahchouchsm/BlackJack-Simulator",
    imgUrl: "/pfp.png",
    imgAlt: "BlackJack-Simulator project",
  },
  {
    id: 7,
    title: "Bank-Project",
    description:
      "Banking simulation web app with Passport-based authentication and a dashboard for balance, income, and expenses.",
    stack: ["Node.js", "Express", "MongoDB", "Passport.js", "EJS", "Bootstrap"],
    language: "EJS 82% · JavaScript 17% · CSS 1%",
    commits: 3,
    githubUrl: "https://github.com/fahchouchsm/Bank-Project",
    imgUrl: "/pfp.png",
    imgAlt: "Bank-Project project",
  },
  {
    id: 8,
    title: "todo-DotNet-Sessions-Coockies",
    description:
      "ASP.NET Core MVC todo app with cookie/session authentication and clean layered structure.",
    stack: ["ASP.NET Core", "C#", "Razor Views", "Docker"],
    language: "C# 46% · HTML 46% · CSS 4% · Dockerfile 4%",
    commits: 6,
    githubUrl: "https://github.com/fahchouchsm/todo-DotNet-Sessions-Coockies",
    imgUrl: "/pfp.png",
    imgAlt: "todo DotNet Sessions Coockies project",
  },
  {
    id: 9,
    title: "ChatAppJavaTCP-JavaFX",
    description:
      "TCP chat application with JavaFX UI, Maven setup, and class diagram documentation.",
    stack: ["Java", "JavaFX", "TCP Sockets", "Maven"],
    language: "Java 100%",
    commits: 16,
    githubUrl: "https://github.com/fahchouchsm/ChatAppJavaTCP-JavaFX",
    imgUrl: "/pfp.png",
    imgAlt: "ChatAppJavaTCP-JavaFX project",
  },
  {
    id: 10,
    title: "Restaurent-Stock-Managment",
    description:
      "Electron desktop stock management app built with React, TypeScript, Tailwind CSS, and Vite.",
    stack: ["Electron", "React", "TypeScript", "Tailwind CSS", "Vite"],
    language: "TypeScript 97.5%",
    commits: 2,
    githubUrl: "https://github.com/fahchouchsm/Restaurent-Stock-Managment",
    imgUrl: "/pfp.png",
    imgAlt: "Restaurent-Stock-Managment project",
  },
  {
    id: 11,
    title: "InventoryManagmentApp",
    description:
      "Mobile inventory manager using React Native and Expo with structured modular folders.",
    stack: ["React Native", "Expo", "TypeScript"],
    language: "TypeScript 97%",
    commits: 7,
    stars: 1,
    githubUrl: "https://github.com/fahchouchsm/InventoryManagmentApp",
    imgUrl: "/pfp.png",
    imgAlt: "InventoryManagmentApp project",
  },
  {
    id: 12,
    title: "Monark-Ecom-Web-App",
    description:
      "Early stage e-commerce frontend with React, TypeScript, Tailwind, shadcn/ui, and Vite tooling.",
    stack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Vite"],
    language: "Not specified",
    commits: 1,
    githubUrl: "https://github.com/fahchouchsm/Monark-Ecom-Web-App",
    imgUrl: "/pfp.png",
    imgAlt: "Monark-Ecom-Web-App project",
  },
  {
    id: 13,
    title: "Oh-Barber-DIJON",
    description:
      "Barber shop website for a Dijon business using React, TypeScript, Tailwind CSS, and custom assets.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    language: "TypeScript 84% · JavaScript 8% · CSS 5% · HTML 2%",
    commits: 5,
    githubUrl: "https://github.com/fahchouchsm/Oh-Barber-DIJON",
    imgUrl: "/pfp.png",
    imgAlt: "Oh-Barber-DIJON project",
  },
  {
    id: 14,
    title: "Gestion_de_stage",
    description:
      "Internship management system with EJS server-rendered views, middleware, uploads flow, and MySQL data model.",
    stack: ["Node.js", "Express", "EJS", "MySQL", "SCSS"],
    language: "CSS 40% · EJS 29% · JavaScript 28% · SCSS 4%",
    commits: 4,
    githubUrl: "https://github.com/fahchouchsm/Gestion_de_stage",
    imgUrl: "/pfp.png",
    imgAlt: "Gestion_de_stage project",
  },
  {
    id: 15,
    title: "Python-german",
    description: "Repository placeholder with no code committed yet.",
    stack: ["Python"],
    language: "Empty repository",
    githubUrl: "https://github.com/fahchouchsm/Python-german",
    imgUrl: "/pfp.png",
    imgAlt: "Python-german project",
  },
];

