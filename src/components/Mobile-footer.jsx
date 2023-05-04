import React from "react";
import { FiYoutube, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
// import { SiHashnode } from 'react-icons/si'

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
              <FiGithub />
            </a>
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200
              transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <FiLinkedin />
            </a>
            <a
              href="#!"
              className="mr-9 text-neutral-800 dark:text-neutral-200
              transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <FiYoutube />
            </a>
            <a
              href="#!"
              className="text-neutral-800 dark:text-neutral-200
            transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:text-red-600"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className="p-4 text-center bg-neutral-700 text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            {" "}
            Tailwind Elements
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
