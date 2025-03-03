import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./sub-components/ProjectCard";
import PersonalProjects from "./sub-components/PersonalProjects";

function Work() {
  const [repos, setRepos] = useState([]);

  // fetch
  const getRepos = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/ikabbash/repos"
    );
    setRepos(data.slice(0, 4));
  };

  useEffect(() => {
    getRepos();
  }, []);

  // console.log(repos)

  return (
    <div className="mb-[400px]">
      {/* https://codepen.io/dzoni404/embed/PdZrwL?default-tab=html%2Cresult&theme-id=dark */}
      <div className="container px-4 py-12 mx-auto max-w-screen-lg scroll-mt-20" id="work">
      <div className="mt-4 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
          <h1 className="text-center sm:text-left text-3xl font-bold text-text1 mb-4">
            <span className="text-primary">10. </span> Personal Projects
          </h1>
        </div>
        <PersonalProjects/>
      </div>

      <h2 className="text-center text-2xl font-semibold mb-4 text-text1">
        Other Github Projects
      </h2>
      <div className="grid grid-cols-2 container max-w-screen-lg mx-auto px-4">
        {repos.map((repo) => {
          return (
            <ProjectCard
              name={repo.name}
              description={repo.description}
              topics={repo.topics}
              key={repo.url}
            />
          );
        })}
      </div>

      <div className="text-center text-text2">
      <a className="py-3 px-4 rounded-md border-2 transition duration-300 ease group hover:border-secondary ease-in-out"
          href="https://github.com/iKabbash"
          target="_blank"><div className="inline-block mt-16 text-lg transition ease-in-out group-hover:text-secondary">Visit Github</div></a>
      </div>      
    </div>
  );
}

export default Work;
