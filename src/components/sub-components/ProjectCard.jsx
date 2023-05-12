import React from "react";
import { ImFolderOpen } from "react-icons/im"

function ProjectCard({ name, url, topics, description }) {
    
  return (
    // https://www.material-tailwind.com/docs/html/card
    <>
      <div className="relative mt-2 flex ml-1 mr-1 flex-col bg-red-200 bg-clip-border text-gray-700">
        <div className="p-6">
          <ImFolderOpen className="text-4xl mb-8" />
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <a
            className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
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
