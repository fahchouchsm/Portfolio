import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { fr } from "./fr.ts";
import { en } from "./en.ts";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en, fr },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
