import type { FC } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface sidebarLinksInt {
  title: string;
  icon: string;
  path: string;
}

interface socialAccountsInt {
  icon: FC<{ className?: string }>;
  path: string;
  rel: string;
}

export const sidebarLinks: sidebarLinksInt[] = [
  {
    title: "Home",
    icon: "home",
    path: "/",
  },
  {
    title: "About",
    icon: "user",
    path: "/about",
  },
  {
    title: "Projects",
    icon: "folder",
    path: "/projects",
  },
  {
    title: "Contact",
    icon: "mail",
    path: "/contact",
  },
];

export const socialAccounts: socialAccountsInt[] = [
  {
    icon: Github,
    path: "https://github.com/fahchouchsm",
    rel: "personal github account link",
  },
  {
    icon: Linkedin,
    path: "https://www.linkedin.com/in/fachchouch-mohammed-63b311375",
    rel: "persnoal linkedin account link",
  },
  {
    icon: Mail,
    path: "mailto:fahchouchsm@gmail.com",
    rel: "personal email adress link",
  },
];
