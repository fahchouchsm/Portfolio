export type TranslationShape<T> = {
    [K in keyof T]: T[K] extends object ? TranslationShape<T[K]> : string | string[];
};

// define English translation shape
export type TranslationKeys = TranslationShape<{
    wakaTotal: string;
    languageName: {
        fr: string;
        en: string;
    };
    sidebar: {
        links: {
            home: string;
            about: string;
            projects: string;
            contact: string;
        };
        linksRel: {
            home: string;
            about: string;
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
        cta: string;
    };
}>;
