import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo400.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // https://www.zalgogenerator.com/
  // E̺̱͜ͅx̛per̖̙̭̄̓͌i̶eņ͈̦͐ͭc̮̪̋ͫe͒̔
  // W̢̳ͫor͍̬ͧ͑k̦̖̔͆
  // B̎́ͤl̠̏o͆̀͢g͖
  const [CPabout, setAbout] = useState(false);
  const [CPexperience, setExperience] = useState(false);
  const [CPwork, setWork] = useState(false);
  const [CPblog, setBlog] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 max-w mx-auto px-4 text-gray-100 sticky top-0 z-50 bg-background opacity-95">
      <img src={Logo} alt={"Logo400"} className="ml-10 md:ml-20 h-10 opacity-100" />
      <ul className="hidden md:flex mr-8">
        <a className="p-4 text-text1" href="#about" onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
          <span className="text-primary">00. </span> {CPabout ?  <span>A͔͜ͅb͔̕o̭̰̫͑ͨ̅u͚̝͙͗ͩ̆t͟</span> : <span>About</span>} 
        </a>
        <a className="p-4 text-text1" href="#experience" onMouseEnter={() => setExperience(true)} onMouseLeave={() => setExperience(false)}>
          <span className="text-primary">01. </span> {CPexperience ?  <span>E̺̱͜ͅx̛per̖̙̭̄̓͌i̶eņ͈̦͐ͭc̮̪̋ͫe͒̔</span> : <span>Experience</span>} 
        </a>
        <a className="p-4 text-text1" href="#work" onMouseEnter={() => setWork(true)} onMouseLeave={() => setWork(false)}>
          <span className="text-primary">10. </span> {CPwork ?  <span>W̢̳ͫor͍̬ͧ͑k̦̖̔͆</span> : <span>Work</span>} 
        </a>
        <a className="p-4 text-text1" href="#blog" onMouseEnter={() => setBlog(true)} onMouseLeave={() => setBlog(false)}>
          <span className="text-primary">11. </span> {CPblog ?  <span>B̎́ͤl̠̏o͆̀͢g͖</span> : <span>Blog</span>} 
        </a>
        <li className="p-4">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-primary border-2 transition duration-300 ease border-primary"
          >
            <span className="text-primary transition duration-300 group-hover:text-card ease">
              Resume
            </span>
          </a>
        </li>
      </ul>

      {/* mobile version */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose className="text-secondary" size={20} /> : <AiOutlineMenu className="text-secondary" size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-[#09090c] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] flex-col"
        }
      >
        <li className="p-4">
          <a className="text-text1" href="#about" onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)}>
          <span className="text-primary">00. </span> {CPabout ?  <span>A͔͜ͅb͔̕o̭̰̫͑ͨ̅u͚̝͙͗ͩ̆t͟</span> : <span>About</span>}
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1" href="#experience" onMouseEnter={() => setExperience(true)} onMouseLeave={() => setExperience(false)}>
          <span className="text-primary">00. </span> {CPexperience ?  <span>E̺̱͜ͅx̛per̖̙̭̄̓͌i̶eņ͈̦͐ͭc̮̪̋ͫe͒̔</span> : <span>Experience</span>}
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1" href="#work" onMouseEnter={() => setWork(true)} onMouseLeave={() => setWork(false)}>
          <span className="text-primary">00. </span> {CPwork ?  <span>W̢̳ͫor͍̬ͧ͑k̦̖̔͆</span> : <span>Work</span>}
          </a>
        </li>
        <li className="p-4">
          <a className="text-text1" href="#blog" onMouseEnter={() => setBlog(true)} onMouseLeave={() => setBlog(false)}>
          <span className="text-primary">00. </span> {CPblog ?  <span>B̎́ͤl̠̏o͆̀͢g͖</span> : <span>Blog</span>}
          </a>
        </li>
        <li className="p-4 mt-1">
          <a
            href="#_"
            className="rounded-md px-3.5 py-1.5 m-1 group cursor-pointer hover:bg-primary border-2 transition duration-300 ease border-primary"
          >
            <span className="text-primary transition duration-300 group-hover:text-card ease">
              Resume
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
