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

  const binaryNumbers = ["01", "02", "03", "04"];
  const menuItems = ["About", "Experience", "Work", "Blog"];

  return (
    <div className="flex justify-between items-center h-20 w-full px-6 lg:px-20 text-text1 text-lg font-semibold sticky top-0 py-6 z-50 bg-background opacity-95 backdrop-blur-3xl">
      <button onClick={scrollToTop}>
        <img src={Logo} alt="Logo400" className="h-12 lg:h-14 opacity-100" />
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-12">
        {menuItems.map((item, index) => (
          <a
            key={index}
            className="group text-text1"
            href={`#${item.toLowerCase()}`}
          >
            <span className="text-primary">{`${binaryNumbers[index]}. `}</span>
            <span className="group-hover:underline">{item}</span>
          </a>
        ))}
        <li>
          <a
            href="/ikabbash-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-4 py-1.5 group cursor-pointer hover:bg-secondary border-2 transition duration-300 ease border-secondary"
          >
            <span className="text-secondary transition duration-300 group-hover:text-card ease">
              Resume
            </span>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <AiOutlineClose className="text-secondary" size={25} />
        ) : (
          <AiOutlineMenu className="text-secondary" size={25} />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed left-0 top-0 w-[70%] sm:w-[50%] md:w-[40%] h-screen bg-background backdrop-blur-3xl pt-16 px-6 ease-in-out duration-500 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index} className="p-4">
            <a className="text-text1 group" href={`#${item.toLowerCase()}`}>
              <span className="text-primary">{`${binaryNumbers[index]}. `}</span>
              <span className="group-hover:underline">{item}</span>
            </a>
          </li>
        ))}
        <li className="p-4 mt-1">
          <a
            href="/ikabbash-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-4 py-1.5 group cursor-pointer hover:bg-secondary border-2 transition duration-300 ease border-secondary"
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
