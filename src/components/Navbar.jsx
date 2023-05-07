import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo400.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 max-w mx-auto px-4 text-gray-100 sticky top-0 z-50 bg-[#09090c] opacity-95">
      <img src={Logo} alt={"Logo400"} className="ml-10 h-10 opacity-100" />
      <ul className="hidden md:flex mr-8">
        <a className="p-4" href="#about">
          <span className="text-red-600">00. </span>About
        </a>
        <a className="p-4" href="#experience">
          <span className="text-red-600">01. </span>Experience
        </a>
        <a className="p-4">
          <span className="text-red-600">10. </span>Work
        </a>
        <a href="#blog" className="p-4">
          <span className="text-red-600">11. </span>Blog
        </a>
        <li className="p-4">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-red-800 border-2 transition duration-300 ease border-red-800"
          >
            <span className="text-white transition duration-300 group-hover:text-gray-900 ease">
              Resume
            </span>
          </a>
        </li>
      </ul>

      {/* mobile version */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#09090c] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] flex-col"
        }
      >
        <li className="p-4">
          <a className="text-red-600" href="#about">00. <span className="text-white">About</span></a>
        </li>
        <li className="p-4">
          <a className="text-red-600" href="#experience">01. <span className="text-white">Experience</span></a>
        </li>
        <li className="p-4">
          <a className="text-red-600" href="#experience">10. <span className="text-white">Work</span></a>
        </li>
        <li className="p-4">
          <a className="text-red-600" href="#blog">11. <span className="text-white">Blog</span></a>
        </li>
        <li className="p-4 mt-1">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-red-800 border-2 transition duration-300 ease border-red-800"
          >
            <span className="text-white transition duration-300 group-hover:text-gray-900 ease">
              Resume
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
