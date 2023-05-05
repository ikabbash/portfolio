import React from "react";
// import { FiYoutube, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiYoutube, SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri"

function Sidebar() {
  return (
    // reference: https://www.kindacode.com/article/tailwind-css-how-to-create-a-sticky-social-sharing-bar/
    <div className="fixed left-0 bottom-0 z-50 px-5 bg-transparent flex-col space-y-4 text-2xl ml-6 hidden md:flex">
      {/* <a href="#" title="Checkout my Github"> */}
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <SiGithub />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <SiLinkedin />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <SiYoutube />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <RiInstagramFill />
      </a>

      <div className="h-[100px] ml-2.5 bg-gray-900 w-[2px]"></div>
    </div>
  );
}

export default Sidebar;
