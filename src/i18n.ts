import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
const resources = {
    en: {
        translation: {
            french: "French",
            english: "English",
            // links
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            // sidebar
            titleDesc: "Computer Science Engineer"
        },
    },
    fr: {
        translation: {
            french: "Français",
            english: "Anglais",
            // links
            home: "Accueil",
            about: "À propos",
            projects: "Projets",
            contact: "Contact",
            // sidebar
            titleDesc: "Ingénieur en informatique",
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
