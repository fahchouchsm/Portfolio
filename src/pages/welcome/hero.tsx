import type { FC } from "react";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

export const Hero: FC = () => {
  const { t } = useTranslation();

  const typingStrings = t("welcomePage.hero.typing", { returnObjects: true }) as string[];
  const typingSequence: (string | number)[] = typingStrings.flatMap((s) => [
    s,
    2000,
  ]);

  return (
    <div className="mt-2 flex h-full flex-col-reverse items-center gap-6 md:mt-6 md:flex-row md:gap-10">
      <div className="max-w-2xl flex-1 text-left">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          {t("welcomePage.hero.greeting")} <br />
          <span className="text-primary font-bold">{t("welcomePage.hero.name")}</span>
        </h1>

        <h2 className="mb-4 text-base font-semibold text-gray-500 sm:text-lg md:mb-6 md:text-xl">
          {t("welcomePage.hero.subtitlePrefix")}{" "}
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </h2>

        <p className="mb-3 max-w-2xl text-base leading-relaxed font-semibold text-gray-600 sm:text-lg md:mb-6 md:text-xl">
          {t("welcomePage.hero.description")}
        </p>
      </div>
      <div className="flex w-full flex-1 justify-center md:justify-end">
        <img
          className="float-up-down mb-2 w-full max-w-60 rounded-full sm:max-w-72 md:mb-0 md:max-w-sm"
          src="/pfp.png"
          alt={t("welcomePage.hero.name")}
          loading="lazy"
          rel={t("welcomePage.hero.imgRel")}
        />
      </div>
    </div>
  );
};
