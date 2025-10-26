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
      className="select fixed top-5 right-5 z-50 w-fit shadow-sm"
      defaultValue={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value).then(() => {
          window.location.reload();
        });
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
