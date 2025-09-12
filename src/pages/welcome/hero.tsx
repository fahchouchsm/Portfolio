import type { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

export const Hero: FC = () => {
  const { t } = useTranslation();

  const typingStrings = t("hero.typing", { returnObjects: true }) as string[];
  const typingSequence: (string | number)[] = typingStrings.flatMap((s) => [
    s,
    2000,
  ]);

  return (
    <div className="flex flex-col items-center justify-between px-10 md:flex-row">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          {t("hero.greeting")}{" "}
          <span className="text-primary">{t("hero.name")}</span>
        </h1>

        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          {t("hero.subtitlePrefix")}{" "}
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="mb-6 text-lg opacity-80">{t("hero.description")}</p>

        <button className="btn btn-primary">{t("hero.cta")}</button>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src="/react.svg"
          alt={t("hero.name")}
          className="h-64 w-64 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};
