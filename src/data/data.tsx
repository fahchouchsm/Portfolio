import type { FC } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export interface SidebarLinksInt {
  titleKey: string;
  icon: string;
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
    titleKey: "home",
    icon: "home",
    path: "/",
    selected: true,
  },
  {
    titleKey: "about",
    icon: "user",
    path: "/about",
  },
  {
    titleKey: "projects",
    icon: "folder",
    path: "/projects",
  },
  {
    titleKey: "contact",
    icon: "mail",
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
