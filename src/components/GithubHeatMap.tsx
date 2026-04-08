import React from "react";
import { FadeInWhenVisible } from "../animation/FadeInWhenVisible.tsx";

const GitHubStats: React.FC<{ username: string }> = ({ username }) => {
  return (
    <section className="rounded-2xl bg-base-100 p-4 shadow-sm md:p-6">
      <FadeInWhenVisible>
        <h2 className="mb-3 text-lg font-semibold text-gray-800 md:text-2xl">
          GitHub Score
        </h2>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dracula`}
          alt="GitHub Streak"
          className="mx-auto w-full rounded-xl object-contain shadow-lg"
          loading="lazy"
        />
      </FadeInWhenVisible>
    </section>
  );
};

export default GitHubStats;
