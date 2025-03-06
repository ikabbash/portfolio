import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="text-black px-10">
      <div className="max-w-screen-lg h-screen w-full mx-auto text-left flex flex-col justify-center sm:px-10 relative -mt-20">
        <p className="text-secondary font-bold p-2 text-lg">
          <TypeAnimation
            sequence={[
              "Greetings",
              1000,
              "السلام عليكم",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", display: "inline-block" }}
          />
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 text-text1">
          My name's Ibrahim Kabbash
        </h1>
        <div className="flex">
          <p className="md:text-xl sm:text-lg text-lg font-bold py-2 text-text2">
            I'm a DevOps Engineer with a focus on automation and cloud infrastructure, dedicated to
            improving system reliability, optimizing workflows, and integrating security best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
