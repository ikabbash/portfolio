import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ name, url, description }) {
  return (
    <a
      href={url}
      target="_blank"
      className="relative flex flex-col bg-card bg-clip-border p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-opacity-90"
    >
      {/* External Link Icon Moved to Top Right */}
      <div className="absolute top-4 right-4 text-secondary">
        <FaExternalLinkAlt className="text-lg" />
      </div>

      {/* Title */}
      <h5 className="mb-2 text-lg font-semibold leading-snug tracking-normal text-text1">
        {name}
      </h5>

      {/* Description */}
      <p className="text-sm font-light leading-relaxed text-text2">
        {description}
      </p>
    </a>
  );
}

export default ProjectCard;
