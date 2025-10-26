import type { FC } from "react";
import { Timeline } from "./TimeLine/TimeLine";
import { Hero } from "./hero.tsx";

export const Welcome: FC = () => {
  return (
    <section className="">
      <Hero />
      <Timeline />
    </section>
  );
};
