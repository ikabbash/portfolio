import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./sub-components/ProjectCard";
import PersonalProjects from "./sub-components/PersonalProjects";

function Work() {
  const [repos, setRepos] = useState([]);

  // Fetch GitHub repositories
  const getRepos = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/ikabbash/repos?sort=created&per_page=6"
    );
    setRepos(data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="mb-[400px]">
      <div className="container px-4 py-12 mx-auto max-w-screen-lg scroll-mt-20" id="work">
        <div className="mt-4 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
          <h1 className="text-center sm:text-left text-3xl font-bold text-text1 mb-4">
            <span className="text-primary">10. </span> Personal Projects
          </h1>
        </div>
        <PersonalProjects />
      </div>

      <h2 className="text-center text-2xl font-semibold mb-4 text-text1">
        Other Github Projects
      </h2>

      {/* Responsive Grid - 2 columns on mobile, 3 on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container max-w-screen-lg mx-auto px-4">
        {repos.map((repo) => (
          <ProjectCard
            name={repo.name}
            description={repo.description}
            url={repo.html_url}
            key={repo.name}
          />
        ))}
      </div>

      <div className="text-center text-text2">
        <a className="py-3 px-4 rounded-md border-2 transition duration-300 ease-in-out group hover:border-secondary"
          href="https://github.com/iKabbash"
          target="_blank">
          <div className="inline-block mt-16 text-lg transition ease-in-out group-hover:text-secondary">
            Visit Github
          </div>
        </a>
      </div>
    </div>
  );
}

export default Work;
