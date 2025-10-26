import type { TranslationKeys } from "../types.ts";

export const sidebarEn: TranslationKeys["sidebar"] = {
  links: {
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
  },
  linksRel: {
    resume: "Cv page",
    projects: "Projects page link",
    contact: "Contact page link",
  },
  socialAccountsLinksRel: {
    github: "Personal GitHub account link",
    linkedin: "LinkedIn profile link",
    email: "Personal email address",
  },
  titleDesc: "Computer Science Engineer",
  asideRel: "Sidebar with navigation links and social accounts",
};

export const sidebarFr: TranslationKeys["sidebar"] = {
  links: {
    resume: "Résumé",
    projects: "Projets",
    contact: "Contact",
  },
  linksRel: {
    resume: "Résumé page",
    projects: "Projects page link",
    contact: "Contact page link",
  },
  socialAccountsLinksRel: {
    github: "Lien vers le compte GitHub personnel",
    linkedin: "Lien vers le profil LinkedIn personnel",
    email: "Adresse e-mail personnelle",
  },
  titleDesc: "Ingénieur en informatique",
  asideRel:
    "Barre latérale avec des liens de navigation et des comptes sociaux",
};
export default sidebarFr;
