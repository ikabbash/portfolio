import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo400.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center h-16 max-w mx-auto px-4 text-text1 text-lg font-semibold sticky top-0 py-10 z-50 bg-background opacity-95 backdrop-blur-3xl">
      <button onClick={scrollToTop}>
        <img src={Logo} alt={"Logo400"} className="ml-10 md:ml-30 h-14 opacity-100"/>
      </button>
      <ul className="hidden md:flex mr-30">
        <a className="my-4 text-text1 ml-10 group" href="#about">
          <span className="text-primary">00. </span> <span className="group-hover:underline">About</span> 
        </a>
        <a className="my-4 text-text1 ml-10 group" href="#experience">
          <span className="text-primary">01. </span> <span className="group-hover:underline">Experience</span>
        </a>
        <a className="my-4 text-text1 ml-10 group" href="#work">
          <span className="text-primary">10. </span> <span className="group-hover:underline">Work</span>
        </a>
        <a className="my-4 text-text1 ml-10 group" href="#blog">
          <span className="text-primary">11. </span> <span className="group-hover:underline">Blog</span>
        </a>
        <li className="my-4 ml-10">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-secondary border-2 transition duration-300 ease border-secondary"
          >
            <span className="text-secondary transition duration-300 group-hover:text-card ease">
              Resume
            </span>
          </a>
        </li>
      </ul>

      {/* mobile version */}
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose className="text-secondary" size={25} /> : <AiOutlineMenu className="text-secondary" size={25} />}
      </div>
      <ul
        className={`fixed left-0 top-0 w-[50%] sm:w-[60%] h-screen bg-background backdrop-blur-3xl pt-16 px-6 ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="p-4">
          <a className="text-text1 group" href="#about">
          <span className="text-primary">00. </span> <span className="group-hover:underline">About</span>
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1 group" href="#experience">
          <span className="text-primary">01. </span> <span className="group-hover:underline">Experience</span>
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1 group" href="#work">
          <span className="text-primary">10. </span> <span className="group-hover:underline">Work</span>
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1 group" href="#blog">
          <span className="text-primary">11 . </span> <span className="group-hover:underline">Blog</span>
          </a>
        </li>
        <li className="p-4 mt-1">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-secondary border-2 transition duration-300 ease border-secondary"
          >
            <span className="text-secondary transition duration-300 group-hover:text-card ease">
              Resume
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
