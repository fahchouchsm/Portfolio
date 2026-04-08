import { ArrowBigRightDash } from "lucide-react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import type { FC } from "react";

export const GoProjects: FC = () => {
  return (
    <div className="flex w-full justify-center pb-1">
      <Link
        to={"/projects"}
        className="btn btn-primary mx-auto w-full max-w-sm rounded-2xl px-4 py-3 text-base text-white sm:w-auto sm:px-6 sm:text-lg"
        rel={t("welcomePage.goToProjectsBtn.rel")}
      >
        <span>{t("welcomePage.goToProjectsBtn.text")}</span>
        <ArrowBigRightDash />
      </Link>
    </div>
  );
};
