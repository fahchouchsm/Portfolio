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
      className="select absolute right-5 w-fit"
      defaultValue={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        window.location.reload();
      }}
    >
      {AvailableLanguages.map((e, i) => (
        <option value={e.key} key={i}>
          {t("languageName." + e.key)}
        </option>
      ))}
    </select>
  );
};
