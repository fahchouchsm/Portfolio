import type { FC } from "react";
import { Timeline } from "./TimeLine/TimeLine";
import { Hero } from "./hero.tsx";
import GithubHeatMap from "../../components/GithubHeatMap.tsx";
import { GoProjects } from "./goProjects.tsx";

export const Welcome: FC = () => {
  return (
    <section className="flex flex-col gap-4 px-10">
      <Hero />
      <Timeline />
      <GithubHeatMap username="fahchouchsm" />
      <GoProjects />
    </section>
  );
};
