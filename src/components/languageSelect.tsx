import type { i18n } from "i18next";
import type { FC } from "react";

interface LanguageSelectInt {
  t: (key: string) => string;
  i18n: i18n;
}

export const LanguageSelect: FC<LanguageSelectInt> = ({ t, i18n }) => {
  return (
    <select
      value={i18n.language}
      className="absolute right-5 select w-fit"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">{t("english")}</option>
      <option value="fr">{t("french")}</option>
    </select>
  );
};
