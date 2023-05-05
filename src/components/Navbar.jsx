import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from "../assets/Logo400.svg"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-16 max-w mx-auto px-4 text-gray-100 sticky top-0 z-50 bg-[#09090c] opacity-95'>
      <img src={Logo} alt={"Logo400"} className='ml-10 h-10 opacity-100'/>
      <ul className='hidden md:flex mr-8'>
        <li className='p-4'><span>00. </span>About</li>
        <li className='p-4'><span>01. </span>Experience</li>
        <li className='p-4'><span>10. </span>Work</li>
        <li className='p-4'><span>11. </span>Blog</li>
        <li className='p-4'>Resume</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4'>About</li>
          <li className='p-4'>Experience</li>
          <li className='p-4'>Blog</li>
          <li className='p-4'>Work</li>
          <li className='p-4'>Contact</li>
          <li className='p-4'>Resume</li>
      </ul>
    </div>
  );
};

export default Navbar;