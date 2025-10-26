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
