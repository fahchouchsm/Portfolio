import type { i18n } from "i18next";
import type { FC } from "react";
import { AvailableLanguages } from "../data/data";

interface LanguageSelectInt {
  t: (key: string) => string;
  i18n: i18n;
}

export const LanguageSelect: FC<LanguageSelectInt> = ({ t, i18n }) => {
  return (
    <select
      id="language-select"
      name="language"
      value={i18n.language}
      className="absolute right-5 select w-fit"
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        window.location.reload();
      }}
    >
      {AvailableLanguages.map((e, i) => (
        <option value={e.key} key={i} selected={i18n.language == e.key}>
          {t("languageName." + e.key)}
        </option>
      ))}
    </select>
  );
};
