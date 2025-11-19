import { ArrowBigRightDash } from "lucide-react";
import { Link } from "react-router-dom";
import { t } from "i18next";

export const GoProjects: FC = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <Link
          to={"/projects"}
          className={
            "btn bg-primary mx-auto rounded-3xl p-6 text-lg text-white"
          }
          rel={t("welcomePage.goToProjectsBtn.rel")}
        >
          <span>{t("welcomePage.goToProjectsBtn.text")}</span>
          <ArrowBigRightDash />
        </Link>
      </div>
    </>
  );
};
