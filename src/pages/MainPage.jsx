import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import QuoteBreak from "../components/QuoteBreak";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <Home />

      <QuoteBreak />

      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
};

export default MainPage;
