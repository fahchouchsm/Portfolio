import type { TranslationKeys } from "./types.ts";
import { heroEn } from "./components/hero.ts";
import { timeLineDrawerEN } from "./components/typeLineDrawer.ts";
import { sidebarEn } from "./components/sidebar.ts";
import { timeLineEn } from "./components/timeLine.ts";

export const en: { translation: TranslationKeys } = {
  translation: {
    wakaTotal: "Total project time",
    languageName: {
      fr: "French 🇫🇷",
      en: "English 🇺🇸",
    },
    sidebar: sidebarEn,
    hero: heroEn,
    timelineDrawer: timeLineDrawerEN,
    timeLine: timeLineEn,
  },
};
