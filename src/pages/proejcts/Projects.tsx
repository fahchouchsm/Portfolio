import { ProjectCard } from "./ProjectCard.tsx";
import { portfolioProjects } from "../../data/data.tsx";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl space-y-6">
      <header className="rounded-3xl bg-base-100 p-6 shadow-sm md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-black tracking-tight md:text-4xl">
            {t("projectsPage.title")}
          </h1>
          <span className="badge badge-primary badge-outline badge-lg">
            {portfolioProjects.length} repos
          </span>
        </div>
        <p className="mt-2 text-base-content/75">
          Personal, academic, and professional projects across web, desktop, and mobile.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
