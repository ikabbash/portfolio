import React from "react";
import { SiLinkedin, SiGithub, SiDevdotto, SiHashnode } from "react-icons/si";

function Footer() {
  // https://tailwind-elements.com/docs/standard/navigation/footer/
  return (
    <>
      <footer className="mt-52 md:hidden">
        <div className="pt-9 text-xl">
          <div className="mb-9 flex justify-center">
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200
              transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <SiLinkedin />
            </a>
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200
              transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <SiGithub />
            </a>
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200
              transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <SiDevdotto />
            </a>
            <a
              href="#!"
              className="text-neutral-800 dark:text-neutral-200
            transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <SiHashnode />
            </a>
          </div>
        </div>
      </footer>
      <p className="text-center mb-2">Built by Ibrahim Kabbash</p>
      <div className="p-2 text-center bg-neutral-700 text-neutral-200"></div>
    </>
  );
}

export default Footer;
