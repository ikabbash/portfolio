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
    <>
      {/* https://codepen.io/dzoni404/embed/PdZrwL?default-tab=html%2Cresult&theme-id=dark */}
      <div className="container px-10 py-12 mx-auto mb-16 max-w-screen-lg scroll-mt-20 mb-[400px]" id="work">
      <div className="text-center sm:text-left before:block before:w-24 before:h-1 before:mb-4 before:rounded-md before:dark:bg-secondary" />
        <div className="flex">
          <h1 className="text-3xl mb-16 font-bold text-text1">
            <span className="text-primary">10.</span> Personal Projects
          </h1>
          {/* <hr className="w-32 h-1 bg-green-500 mt-5 ml-3.5" /> */}
        </div>
        <PersonalProjects/>
      </div>

      {/* <h2 className="text-center text-2xl font-semibold mb-10 text-text1">
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
      </div> */}

      {/* <div className="text-center text-text2 mb-[400px]">
      <a className="py-3 px-4 rounded-md border-2 transition duration-300 ease group hover:border-secondary ease-in-out"
          href="https://github.com/iKabbash"
          target="_blank"><div className="inline-block mt-16 text-lg transition ease-in-out group-hover:text-secondary">Visit Github</div></a>
      </div>       */}
    </>
  );
}

export default Work;
