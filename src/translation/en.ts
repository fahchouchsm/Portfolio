import type { TranslationKeys } from "./types";

export const en: { translation: TranslationKeys } = {
    translation: {
        wakaTotal: "Total project time",
        languageName: {
            fr: "French 🇫🇷",
            en: "English 🇺🇸",
        },
        sidebar: {
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
        },
        hero: {
            greeting: "Salut, je suis",
            name: "Fahchouch Mohammed",
            subtitlePrefix: "Je peux",
            typing: [
                "créer des sites web modernes",
                "développer des applications",
                "concevoir des solutions efficaces",
                "optimiser l'expérience utilisateur",
            ],
            description: "An engineer that is passionate about learning and exploring new technologies, constantly seeking innovative ways to solve problems and improve workflows.",
            imgRel: "Portrait of Fahchouch Mohammed"
        },
        timelineDrawer: {
            overview: "Overview",
            keySkills: "Key Skills",
            links: "Links",
            duration: "Duration"
        },
        timeLine: {
            ehei: {
                name: "EHEI: School of Advanced Engineering Studies",
                title: "EHEI: School of Advanced Engineering Studies",
                subtitle: "EHEI - Oujda, Morocco",
                description: "Pursuing a comprehensive engineering program focusing on software development, cloud computing, and modern web technologies. The School of Advanced Engineering Studies (EHEI) in Oujda is a leading private engineering school in Morocco, recognized by the Ministry of Higher Education. It offers programs in Computer Engineering, Industrial Systems, and IT & Management, preparing students for technology-driven careers.",
                duration: "2024 - 2027 (3 years)",
            },
            radeeo: {
                name: "RADEEO Oujda",
                title: "Internship & Project Experience",
                subtitle: "Udemy / AWS Certified",
                description: "Completed an internship where I developed an Electron application to manage MySQL databases, inspired by MongoDB Compass. Built with TypeScript, React, and Node.js, it allowed full database management, including creating, updating, and querying data. Although the project was not saved to GitHub, it demonstrates my ability to build full-stack desktop applications and handle database connectivity effectively.",
                duration: "1 month.",
            }
        }
    },
};