import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
    en: {
        translation: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            engineer: "Computer Science Engineer",
            welcome: "Welcome to my portfolio",
        },
    },
    fr: {
        translation: {
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            contact: "Contact",
            engineer: "Ingénieur en informatique",
            welcome: "Bienvenue sur mon portfolio",
        },
    },
};

i18n
    .use(LanguageDetector) // automatically detect browser language
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
