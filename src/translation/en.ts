import type { TranslationKeys } from "./types.ts";
import { heroEn } from "./components/home/hero.ts";
import { timeLineDrawerEN } from "./components/home/typeLineDrawer.ts";
import { sidebarEn } from "./components/sidebar.ts";
import { timeLineEn } from "./components/home/timeLine.ts";
import { projectsEn } from "./components/projects/project.ts";
import { contactEn } from "./components/contact.ts";

export const en: { translation: TranslationKeys } = {
  translation: {
    wakaTotal: "Total project time",
    languageName: {
      fr: "French",
      en: "English",
    },
    sidebar: sidebarEn,
    welcomePage: {
      hero: heroEn,
      timelineDrawer: timeLineDrawerEN,
      timeLine: timeLineEn,
      goToProjectsBtn: {
        text: "See my projects",
        rel: "Go to the projects section",
      },
    },
    projectsPage: projectsEn,
    contactPage: contactEn,
  },
};
