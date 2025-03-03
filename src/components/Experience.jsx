import React from "react";
import Certificates from "./sub-components/Certificates";

function Experience() {
  return (
    <section className="mb-[400px] scroll-mt-16" id="experience">
      <div className="container max-w-5xl mx-auto py-12 md:px-4">
        <div className="grid gap-4 sm:grid-cols-12 mx-4">
          {/* Section Header */}
          <div className="sm:col-span-3 text-center sm:text-left mb-4">
            <div className="before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary" />
            <h3 className="text-3xl font-bold text-text1">
              <span className="text-primary">01.</span> Experience
            </h3>
            <span className="text-sm font-bold tracking-wider uppercase text-text2">
              Where I've worked
            </span>
          </div>

          {/* Experience Content */}
          <div className="sm:col-span-9 relative px-4 space-y-6">
            <div className="space-y-12 relative sm:space-y-8 sm:before:absolute sm:before:top-0 sm:before:bottom-0 sm:before:w-0.5 sm:before:left-[-30px] before:dark:bg-gray-700">
              
              {/** Experience Items */}
              {[
                {
                  title: "DevOps Engineer",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "February 2023 - Present",
                  description:
                    "Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
                },
                {
                  title: "DevOps Engineer Internship",
                  company: "eSpace",
                  link: "https://espace.com.eg/",
                  duration: "August 2022 - September 2022",
                  description:
                    "Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-38px] sm:before:top-0 sm:before:translate-y-[6px] sm:before:z-[1] before:dark:bg-red-700"
                >
                  <h3 className="text-xl font-semibold tracking-wide text-text1">
                    {exp.title}{" "}
                    <span className="text-secondary">@ </span>
                    <a
                      href={exp.link}
                      target="_blank"
                      className="text-secondary hover:underline transition-all duration-500"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <time className="text-xs tracking-wide text-text2">
                    {exp.duration}
                  </time>
                  <p className="mt-3 text-text2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </section>
  );
}

export default Experience;
