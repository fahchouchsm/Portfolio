import { socialAccounts } from "../data/data.tsx";
import { useTranslation } from "react-i18next";
import { Mail, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl space-y-6">
      <header className="rounded-3xl bg-base-100 p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">
          {t("contactPage.title")}
        </h1>
        <p className="mt-2 max-w-2xl text-base-content/75">
          {t("contactPage.subtitle")}
        </p>
      </header>

      <div className="card border border-base-200 bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            {t("contactPage.emailTitle")}
          </h2>
          <a
            className="link link-primary text-lg"
            href={`mailto:${t("contactPage.emailValue")}`}
          >
            {t("contactPage.emailValue")}
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {socialAccounts.map((account) => (
          <a
            key={account.label}
            href={account.path}
            target="_blank"
            rel="noreferrer"
            className="card border border-base-200 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="card-body">
              <div className="flex items-center gap-2">
                <account.icon className="h-5 w-5 text-primary" />
                <h2 className="card-title text-lg">{account.label}</h2>
              </div>
              <p className="truncate text-sm text-base-content/70">{account.path}</p>
              <span className="link link-primary inline-flex items-center gap-1">
                {t("contactPage.openLink")}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

