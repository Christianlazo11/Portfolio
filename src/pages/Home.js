import React from "react";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
