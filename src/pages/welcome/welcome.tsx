import type { FC } from "react";
import { Timeline } from "./TimeLine";
import { Hero } from "./Hero";

export const Welcome: FC = () => {
  return (
    <section className="">
      <Hero />
      <Timeline />
    </section>
  );
};
