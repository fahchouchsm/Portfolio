import type { FC } from "react";
import { Timeline } from "./TimeLine";
import { Hero } from "./Hero";

export const Welcome: FC = () => {
  const educationItems = [
    {
      year: "2024–2027",
      title: "Cycle d’ingénieur – EHEI Oujda",
      subtitle: "Branche: Génie Info",
    },
    {
      year: "2022–2024",
      title: "BTS – Lycée El Maghrib El Arabi",
      subtitle: "Branche: Développement Systèmes d’Information",
    },
    {
      year: "2021",
      title: "Baccalauréat – Sciences Physiques",
      subtitle: "Lycee Charif El Idrissi",
    },
  ];

  return (
    <section className="">
      <Hero />
      <Timeline items={educationItems} />
      <Timeline items={educationItems} />
      <Timeline items={educationItems} />
      <Timeline items={educationItems} />
      <Timeline items={educationItems} />
    </section>
  );
};
