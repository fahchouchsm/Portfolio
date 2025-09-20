export type TranslationShape<T> = {
    [K in keyof T]: T[K] extends object ? TranslationShape<T[K]> : string | string[];
};

interface TimeLineItem {
    title: string;
    name: string;
    subtitle: string;
    description: string;
    duration: string;
}

export type TranslationKeys = TranslationShape<{
    wakaTotal: string;
    languageName: {
        fr: string;
        en: string;
    };
    sidebar: {
        links: {
            resume: string;
            projects: string;
            contact: string;
        };
        linksRel: {
            resume: string;
            projects: string;
            contact: string;
        };
        socialAccountsLinksRel: {
            github: string;
            linkedin: string;
            email: string;
        };
        titleDesc: string;
        asideRel: string;
    };
    hero: {
        greeting: string;
        name: string;
        subtitlePrefix: string;
        typing: string[];
        description: string;
        imgRel: string;
    };
    timeLine: {
        ehei: TimeLineItem;
        radeeo: TimeLineItem;
    };
    timelineDrawer: {
        overview: string;
        keySkills: string;
        links: string;
        duration: string;
    };
}>;