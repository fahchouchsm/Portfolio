import { ProjectCard } from "./ProjectCard.tsx";

export const Projects = () => {
  const fakeProject = {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and TypeScript showcasing projects and blog posts.",
    imgUrl: "/assets/portfolio-screenshot.png",
    imgAlt: "Screenshot of the portfolio website",
    githubUrl: "google.com",
  };

  return (
    <section>
      <h1></h1>
      <ProjectCard {...fakeProject} />
    </section>
  );
};
