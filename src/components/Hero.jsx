import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="text-black px-10">
      <div className="max-w-screen-lg mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center sm:px-10">
        <p className="text-secondary font-bold p-2 text-lg">
          <TypeAnimation
            sequence={[
                // https://www.npmjs.com/package/react-type-animation
              "Hello", // Types 'One'
              1000, // Waits 1s
              "السلام عليكم", // Deletes 'One' and types 'Two'
              1000,
              "やあ",
              1000
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-text1">
          My name's Ibrahim Kabbash
        </h1>
        <div className="flex">
          <p className="md:text-3xl sm:text-2xl text-2xl font-bold py-2 text-text2">
            I'm a DevOps Engineer and I am dedicated to driving innovation through technology and collaboration
          </p>
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500 text-text2">
          Infrastructure · Operations · Cloud Management · Security
        </p>
      </div>
    </div>
  );
}

export default Hero;
