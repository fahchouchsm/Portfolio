import React from "react";
import { FadeInWhenVisible } from "../animation/FadeInWhenVisible.tsx";

const GitHubStats: React.FC<{ username: string }> = ({ username }) => {
  return (
    <section className="mt-12">
      {/* Animated title */}
      <FadeInWhenVisible>
        <h2 className="mb-3 font-semibold text-gray-800 md:text-2xl">
          GitHub Score
        </h2>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dracula`}
          alt="GitHub Streak"
          className="mx-auto w-full object-contain shadow-lg"
          loading="lazy"
        />
      </FadeInWhenVisible>
    </section>
  );
};

export default GitHubStats;
