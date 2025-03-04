import React from "react";
import SurveyNomadImage from "../../assets/SurveyNomad.png";

const projects = [
  {
    title: "SurveyNomad",
    description:
      "A full-stack web application for creating surveys, forums, and timed quizzes with customization options, and featuring results displayed in tables or charts.",
    image: SurveyNomadImage,
    link: "https://www.canva.com/design/DAFz4GKnduQ/Bsc3sCyUlHibSgl0YXsdSg/view?utm_content=DAFz4GKnduQ&utm_campaign=designshare&utm_medium=link&utm_source=viewer",
    hashtags: ["React", "Express", "NodeJS", "MongoDB", "Redux", "Azure", "Terraform"],
  },
  // {
  //   title: "",
  //   description:
  //     "",
  //   image: SurveyNomadImage,
  //   link: "#",
  //   hashtags: [""],
  // },
];

const ProjectList = () => {
  return (
    <div className="mx-auto p-2">
      {projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          key={project.link}
          className="block p-6 rounded-lg shadow-lg mb-6 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-card group"
        >
          <div className="flex flex-col md:flex-row">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/4 rounded-lg mb-4 md:mb-0 object-cover"
            />
            <div className="md:ml-6 flex-1">
              <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-secondary">
                {project.title} ↗
              </h3>
              <p className="text-[#8892b0] text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-tag text-secondary px-2 py-1 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
