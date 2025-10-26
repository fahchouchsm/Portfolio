import type { FC } from "react";
import { Timeline } from "./TimeLine/TimeLine";
import { Hero } from "./hero.tsx";
import GithubHeatMap from "../../components/GithubHeatMap.tsx";

export const Welcome: FC = () => {
  return (
    <section className="px-10">
      <Hero />
      <Timeline />
      <GithubHeatMap username="fahchouchsm" />
    </section>
  );
};
