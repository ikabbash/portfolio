import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import About from "./components/About";
import Work from "./components/Work";

function Portfolio() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Blogs />
      <Footer />
    </>
  );
}

export default Portfolio;
