import type { FC } from "react";
import {
  ArrowUpRight,
  FolderGit2,
  GitCommitHorizontal,
  Github,
  Star,
} from "lucide-react";
import type { PortfolioProject } from "../../data/data.tsx";
import { useTranslation } from "react-i18next";

export const ProjectCard: FC<PortfolioProject> = ({
  title,
  description,
  githubUrl,
  demoUrl,
  stack,
  language,
  commits,
  stars,
}) => {
  const { t } = useTranslation();

  return (
    <article className="card border border-base-200 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="card-body gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-primary/10 p-2 text-primary">
              <FolderGit2 className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <h2 className="card-title text-xl leading-tight">{title}</h2>
              <p className="text-sm text-base-content/65">{language}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-base-content/70">
            {typeof commits === "number" && (
              <span className="inline-flex items-center gap-1">
                <GitCommitHorizontal className="h-4 w-4" />
                {commits}
              </span>
            )}
            {typeof stars === "number" && (
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4" />
                {stars}
              </span>
            )}
          </div>
        </div>

        <p className="text-base-content/80">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={`${title}-${tech}`} className="badge badge-outline badge-primary">
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end pt-2">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-soft"
            >
              <span>{t("projectsPage.liveDemo")}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline flex items-center gap-2 rounded-lg"
          >
            <Github className="h-4 w-4" />
            <span>{t("projectsPage.github")}</span>
          </a>
        </div>
      </div>
    </article>
  );
};
