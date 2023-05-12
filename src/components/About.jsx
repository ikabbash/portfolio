import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb"

function About() {
  return (
    <>
      <div className="px-10 mb-[400px]" id="about">
        <div className="container max-w-screen-lg mx-auto py-40 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-20">
          
          {/* <!-- right --> */}
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-indigo-600 font-bold text-3xl">
              <span>00. </span>About me
            </h1>
            <h1 className="text-xl font-medium">My journey</h1>
            <p className="text-gray-400 max-w-xl">
            I graduated from AASTMT's College of Computer Engineering in February 2023 and have
            always had a passion for DevOps. For me personally, I'm the type of person who likes
            to think of what's going on behind the scenes, how can I break a system down part
            by part and understand each one of them and their role in the system, then improve
            and automate them into something better.</p>
            <p className="text-gray-400 max-w-xl">
            Currently, I am fortunate enough that I started working as a Junior DevOps Engineer with
            <a href="https://espace.com.eg/" className="text-blue-500 font-semibold hover:underline
            transition-all duration-500 ">eSpace</a>, an exceptional software development company based
            in Alexandria, Egypt.
            </p>
            <p className="text-gray-400 max-w-xl">
            Feel free to say hi or ask for any inquiry and I'll try my
            best to respond as soon as possible at <a className="text-blue-500 font-semibold hover:underline
            transition-all duration-500">i.kabbash@protonmail.ch</a>
            </p>
            <h1 className="text-xl font-medium">Some of my recent skills: </h1>
            <div className="grid grid-cols-2">
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Kubernetes</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Azure</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />ArgoCD</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Helm</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />AWS</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Azure DevOps</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Jenkins</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-red-800" />Terraform</span>
            </div>
          </div>
          {/* <!-- left --> */}
          {/* <div className="relative">
            <img
              className="h-1/4 absolute top-0 right-0 -z-10"
              src="dots?"
              alt=""
            />
            <div className="h-full overflow-hidden">
              <img src="the tall image" alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default About;
