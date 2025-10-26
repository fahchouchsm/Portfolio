import type { TranslationKeys } from "./types.ts";
import { heroFr } from "./components/hero.ts";
import { timeLineDrawerFR } from "./components/typeLineDrawer.ts";
import { sidebarFr } from "./components/sidebar.ts";
import { timeLineFr } from "./components/timeLine.ts";

export const fr: { translation: TranslationKeys } = {
  translation: {
    wakaTotal: "Temps total du projet",
    languageName: {
      fr: "Français 🇫🇷",
      en: "Anglais 🇺🇸",
    },
    sidebar: sidebarFr,
    hero: heroFr,
    timelineDrawer: timeLineDrawerFR,
    timeLine: timeLineFr,
  },
};
