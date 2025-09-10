import type { FC } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface sidebarLinksInt {
  title: string;
  icon: string;
  path: string;
  rel: string;
  selected?: boolean;
}

interface socialAccountsInt {
  icon: FC<{ className?: string }>;
  path: string;
  rel: string;
  label: string;
}

export const sidebarLinks: sidebarLinksInt[] = [
  {
    title: "Home",
    icon: "home",
    path: "/",
    rel: "home page link",
    selected: true,
  },
  {
    title: "About",
    icon: "user",
    path: "/about",
    rel: "about page link",
  },
  {
    title: "Projects",
    icon: "folder",
    path: "/projects",
    rel: "projects page link",
  },
  {
    title: "Contact",
    icon: "mail",
    path: "/contact",
    rel: "contact page link",
  },
];

export const socialAccounts: socialAccountsInt[] = [
  {
    icon: Github,
    path: "https://github.com/fahchouchsm",
    rel: "personal github account link",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    path: "https://www.linkedin.com/in/fachchouch-mohammed-63b311375",
    rel: "personal linkedin account link",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    path: "mailto:fahchouchsm@gmail.com",
    rel: "personal email address link",
    label: "Email",
  },
];
