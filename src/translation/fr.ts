import type { TranslationKeys } from "./types.ts";
import { heroFr } from "./components/home/hero.ts";
import { timeLineDrawerFR } from "./components/home/typeLineDrawer.ts";
import { sidebarFr } from "./components/sidebar.ts";
import { timeLineFr } from "./components/home/timeLine.ts";
import { projectsFr } from "./components/projects/project.ts";
import { contactFr } from "./components/contact.ts";

export const fr: { translation: TranslationKeys } = {
  translation: {
    wakaTotal: "Temps total du projet",
    languageName: {
      fr: "Français 🇫🇷",
      en: "Anglais 🇺🇸",
    },
    sidebar: sidebarFr,
    welcomePage: {
      hero: heroFr,
      timelineDrawer: timeLineDrawerFR,
      timeLine: timeLineFr,
      goToProjectsBtn: {
        text: "Voir mes projets",
        rel: "Aller à la section des projets",
      },
    },
    projectsPage: projectsFr,
    contactPage: contactFr,
  },
};
