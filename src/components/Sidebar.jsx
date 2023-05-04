import React from "react";
import { FiYoutube, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
// import { SiHashnode } from 'react-icons/si'

function Sidebar() {
  return (
    // reference: https://www.kindacode.com/article/tailwind-css-how-to-create-a-sticky-social-sharing-bar/
    <div className="fixed left-0 bottom-0 z-50 px-5 bg-transparent flex-col space-y-4 text-2xl ml-6 hidden md:flex">
      {/* <a href="#" title="Checkout my Github"> */}
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <FiGithub />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <FiLinkedin />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <FiYoutube />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <FiInstagram />
      </a>

      {/* <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600">
        <SiHashnode />
      </a> */}

      <div className="h-[100px] ml-2.5 bg-gray-900 w-[2px]"></div>
    </div>
  );
}

export default Sidebar;
