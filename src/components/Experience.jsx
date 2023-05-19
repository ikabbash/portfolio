import React from "react";
import Certificates from "./sub-components/Certificates";

function Experience() {
  return (
    <>
      <section className="mb-[400px] scroll-mt-16" id="experience">
        <div className="container max-w-5xl md:px-4 py-12 mx-auto ">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
                <h3 className="text-3xl font-bold text-text1"><span className="text-primary">01.</span> Experience</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-text2">
                  Where I've worked
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-red-700">
                  <h3 className="text-xl font-semibold tracking-wide text-text1">
                    Junior DevOps Engineer <span className="text-secondary">@ </span><a className="text-secondary hover:underline
                    transition-all duration-500 " href="https://espace.com.eg/" target="_blank">eSpace</a>
                  </h3>
                  <time className="text-xs tracking-wide text-text2">
                    February 2023 - Present
                  </time>
                  <p className="mt-3 text-text2">
                    Pellentesque feugiat ante at nisl efficitur, in mollis orci
                    scelerisque. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-red-700">
                  <h3 className="text-xl font-semibold tracking-wide text-text1">
                    DevOps Engineer Internship <span className="text-secondary">@ </span><a className="text-secondary hover:underline
                    transition-all duration-500 " href="https://espace.com.eg/" target="_blank">eSpace</a>
                  </h3>
                  <time className="text-xs tracking-wide text-text2">
                    August 2022 - September 2022
                  </time>
                  <p className="mt-3 text-text2">
                    Morbi vulputate aliquam libero non dictum. Aliquam sit amet
                    nunc ut diam aliquet tincidunt nec nec dui. Donec mollis
                    turpis eget egestas sodales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Certificates />
      </section>
    </>
  );
}

export default Experience;
