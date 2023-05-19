import React from "react";
import { TbArrowBadgeRight } from "react-icons/tb"
import picture2 from "../assets/picture2.jpg"

function About() {
  return (
    <>
      <div className="px-10 mb-[400px]" id="about">
        <div className="container max-w-screen-lg mx-auto py-40 md:px-10 flex flex-col-reverse lg:flex-row items-center gap-20">
          
          {/* <!-- right --> */}
          <div className="my-auto flex flex-col gap-3">
          <div className="text-center sm:text-left before:block before:w-24 before:h-1 before:mb-2 before:rounded-md before:dark:bg-secondary" />
            <h1 className="font-bold text-3xl text-text1">
              <span className="text-primary">00. </span>About me
            </h1>
            <p className="text-gray-400 max-w-xl text-text2">
            I graduated from AASTMT's College of Computer Engineering in February 2023 and have
            always had a passion for DevOps. For me personally, I'm the type of person who likes
            to think of what's going on behind the scenes, how can I break a system down part
            by part and understand each one of them and their role in the system, then improve
            and automate them into something better.</p>
            <p className="text-gray-400 max-w-xl text-text2">
            Currently, I am fortunate enough that I started working as a Junior DevOps Engineer with
            <a href="https://espace.com.eg/"> <span className="text-secondary font-semibold hover:underline
            transition-all duration-500 ">eSpace</span></a>, an exceptional software development company based
            in Alexandria, Egypt.
            </p>
            <p className="text-gray-400 max-w-xl text-text2">
            Feel free to say hi or ask for any inquiry and I'll try my
            best to respond as soon as possible at <a className="text-secondary font-semibold hover:underline
            transition-all duration-500">i.kabbash@protonmail.ch</a>
            </p>
            <h1 className="font-medium text-text2">Some of my recent skills: </h1>
            <div className="grid grid-cols-2 text-text2">
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Kubernetes</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Azure</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />ArgoCD</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Helm</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />AWS</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Azure DevOps</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Jenkins</span>
              <span className="flex items-center"><TbArrowBadgeRight className="text-md mr-1 text-primary" />Terraform</span>
            </div>
          </div>
          {/* <!-- left --> */}
              <img src={picture2} alt="the tall image"
              style={{width: 400, height:550}} 
              className="object-cover"/>
        </div>
      </div>
    </>
  );
}

export default About;
