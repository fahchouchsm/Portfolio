import type { FC } from "react";
import { Timeline } from "./TimeLine/TimeLine";
import { Hero } from "./hero.tsx";
import GithubHeatMap from "../../components/GithubHeatMap.tsx";
import { GoProjects } from "./goProjects.tsx";

export const Welcome: FC = () => {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-1 sm:px-2 md:gap-8 md:px-0">
      <Hero />
      <Timeline />
      <GithubHeatMap username="fahchouchsm" />
      <GoProjects />
    </section>
  );
};
