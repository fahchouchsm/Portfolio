import type { FC } from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

interface ProjectCardInt {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  githubUrl: string;
}

export const ProjectCard: FC<ProjectCardInt> = ({
  id,
  title,
  description,
  imgUrl,
  imgAlt,
  githubUrl,
}) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={imgUrl} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={githubUrl} className="btn btn-soft">
            <span>Live Demo</span>
          </Link>
          <Link
            to={`/project/${id}`}
            className="btn btn-outline flex items-center gap-2 rounded-lg hover:bg-black hover:text-white"
          >
            <Github />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
