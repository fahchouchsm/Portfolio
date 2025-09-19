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
}
export const educationItems: educationItemsInt[] = [
  {
    key: "aws",
    yearBegin: 2024,
    yearEnd: null,
    imgKey: "aws",
  },
  {
    key: "udemy",
    yearBegin: 2024,
    yearEnd: null,
    imgKey: "aws",
  },
];
