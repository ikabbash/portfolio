import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./sub-components/ProjectCard";
import { RiFileDownloadFill } from "react-icons/ri"

function Work() {
  const [repos, setRepos] = useState([]);

  // fetch
  const getRepos = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/v4ldus/repos"
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
      <div className="container px-5 py-12 mx-auto mb-32">
        <div className="flex">
        <h1 className="text-3xl mb-16 lg:ml-40 font-bold md:ml-0">Personal Projects</h1>
        <hr class="w-96 h-1 bg-green-500 mt-5 ml-3.5" />
        </div>
          <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
            <img
              className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative -mb-5"
              src={"https://images7.alphacoders.com/347/347549.jpg"} />
            <div className="bg-white w-full md:w-2/3">
              <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                  <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                    <h3>Saint Basil's Cathedral</h3>
                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                      Moscow - Russia
                    </p>
                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                  </div>
                  <div className="w-full lg:w-3/5 lg:px-3">
                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                      The Cathedral of Vasily the Blessed (Russian: Собор
                      Василия Блаженного, Sobor Vasiliya Blazhennogo), commonly
                      known as Saint Basil's Cathedral, is a church in Red
                      Square in Moscow, Russia. The building, now a museum, is
                      officially known as the Cathedral of the Intercession of
                      the Most Holy Theotokos on the Moat (Russian: Собор
                      Покрова Пресвятой Богородицы, что на Рву, Sobor Pokrova
                      Presvyatoy Bogoroditsy, chto na Rvu) or Pokrovsky
                      Cathedral (Russian: Покровский собор).[5] It was built
                      from 1555–1561 on orders from Ivan the Terrible and
                      commemorates the capture of Kazan and Astrakhan.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center text-4xl">
                      <RiFileDownloadFill/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <h2 className="text-center text-2xl font-semibold mb-10">Other projects</h2>
      <div className="grid grid-cols-2 container max-w-screen-lg mx-auto px-2 mb-[400px]">
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
    </>
  );
}

export default Work;
