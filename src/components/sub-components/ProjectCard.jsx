import React from "react";
import { ImFolderOpen } from "react-icons/im"

function ProjectCard({ name, url, topics, description }) {
    
  return (
    // https://www.material-tailwind.com/docs/html/card
    <>
      <div className="relative mt-2 flex ml-1 mr-1 flex-col bg-card bg-clip-border text-gray-700">
        <div className="p-6">
          <ImFolderOpen className="text-4xl mb-8 text-secondary" />
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-text1 antialiased">
            {name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-text2">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <a
            className="font-medium text-text3"
            href="#"
          >
            <p
              className="inline-flex"
            > {topics}
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
