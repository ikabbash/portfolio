import React from "react";
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6"

function Footer() {
  return (
    <>
      <footer className="mt-52 md:hidden">
        <div className="pt-9 text-xl">
          <div className="mb-9 flex justify-center items-center gap-6">
            <a href="https://www.linkedin.com/in/ikabbash/" target="_blank" className="text-neutral-800 dark:text-text1 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary">
              <SiLinkedin />
            </a>
            <a href="https://github.com/ikabbash" target="_blank" className="text-neutral-800 dark:text-text1 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary">
              <SiGithub />
            </a>
            <a href="https://ikabbash.hashnode.dev" target="_blank" className="text-neutral-800 dark:text-text1 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary">
              <SiHashnode />
            </a>
            <a href="https://medium.com/@ikabbash" target="_blank" className="text-neutral-800 dark:text-text1 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary">
              <FaMedium />
            </a>
            <a href="https://dev.to/ikabbash" target="_blank" className="text-neutral-800 dark:text-text1 transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-secondary">
              <SiDevdotto />
            </a>
          </div>
        </div>
      </footer>
      <p className="text-center mb-2 text-primary">Built and designed by Ibrahim Kabbash.</p>
      <div className="p-2 text-center bg-card text-text1"></div>
    </>
  );
}

export default Footer;
