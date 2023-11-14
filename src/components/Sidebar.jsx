import React from "react";
// import { FiYoutube, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6"

function Sidebar() {
  return (
    // reference: https://www.kindacode.com/article/tailwind-css-how-to-create-a-sticky-social-sharing-bar/
    <div className="fixed left-0 bottom-1/4 z-50 px-5 bg-transparent flex-col space-y-4 text-2xl ml-6 hidden xl:flex">
      {/* reminder: maybe change xl:flex on above element when hiding the sidebar */}
      <div className="h-[100px] ml-2.5 bg-text2 w-[2px]"></div>
      {/* <a href="#" title="Checkout my Github"> */}
      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary text-text2">
        <SiGithub />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary text-text2">
        <SiLinkedin />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary text-text2">
        <SiHashnode />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary text-text2">
        <FaMedium />
      </a>

      <a href="#" className="transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary text-text2">
        <SiDevdotto />
      </a>

      <div className="h-[100px] ml-2.5 bg-text2 w-[2px]"></div>
    </div>
  );
}

export default Sidebar;
