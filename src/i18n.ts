import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            languageName: {
                fr: "French 🇫🇷",
                en: "English 🇺🇸",
            },
            sidebar: {
                links: {
                    home: "Home",
                    about: "About",
                    projects: "Projects",
                    contact: "Contact",
                },
                linksRel: {
                    home: "Home page link",
                    about: "About page link",
                    projects: "Projects page link",
                    contact: "Contact page link",
                },
                socialAccountsLinksRel: {
                    github: "Personal GitHub account link",
                    linkedin: "Lien vers le profil LinkedIn personnel",
                    email: "Adresse e-mail personnelle",
                },
                titleDesc: "Computer Science Engineer"
            },
            hero: {
                greeting: "Salut, je suis",
                name: "Mohammed Fahchouch",
                subtitlePrefix: "Je peux",
                typing: [
                    "créer des sites web modernes",
                    "développer des applications",
                    "concevoir des solutions efficaces",
                    "optimiser l'expérience utilisateur",
                ],
                description: "Un développeur passionné qui crée des produits numériques impactants.",
                cta: "Contactez-moi",
            },
        },
    },
    fr: {
        translation: {
            languageName: {
                fr: "Français 🇫🇷",
                en: "Anglais 🇺🇸",
            },
            sidebar: {
                links: {
                    home: "Accueil",
                    about: "À propos",
                    projects: "Projets",
                    contact: "Contact",
                },
                linksRel: {
                    home: "Home page link",
                    about: "About page link",
                    projects: "Projects page link",
                    contact: "Contact page link",
                },
                socialAccountsLinksRel: {
                    github: "Lien vers le compte GitHub personnel",
                    linkedin: "Lien vers le profil LinkedIn personnel",
                    email: "Adresse e-mail personnelle",
                },
                titleDesc: "Ingénieur en informatique",
            },
            hero: {
                greeting: "Salut, je suis",
                name: "Mohammed Fahchouch",
                subtitlePrefix: "Je peux",
                typing: [
                    "créer des sites web modernes",
                    "développer des applications",
                    "concevoir des solutions efficaces",
                    "optimiser l'expérience utilisateur",
                ],
                description: "Un développeur passionné qui crée des produits numériques impactants.",
                cta: "Contactez-moi",
            },
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
