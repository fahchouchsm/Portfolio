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
    <div className="flex flex-col-reverse items-center px-7 md:flex-row h-full mt-10 gap-10">
      <div className="max-w-xl md:text-left flex-1 lg:flex-3 text-left">
        <h1 className="text-5xl font-bold md:text-5xl">
          {t("hero.greeting")} <br />
          <span className="text-primary font-serif">{t("hero.name")}</span>
        </h1>

        <h2 className="mb-6 text-lg font-semibold md:text-xl text-gray-500">
          {t("hero.subtitlePrefix")}{" "}
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </h2>

        <p className="mb-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-semibold">
          {t("hero.description")}
        </p>
      </div>
      <div className="flex-1 flex ">
        <img
          className="rounded-full float-up-down md:mb-0 mb-10 w-full"
          src="/pfp.png"
          alt={t("hero.name")}
          loading="lazy"
          rel={t("hero.imgRel")}
        />
      </div>
    </div>
  );
};
