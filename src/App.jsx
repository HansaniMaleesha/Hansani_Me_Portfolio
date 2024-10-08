// import components
import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import About from './components/About';
import Skills from "./components/Skills";
import Service from "./components/Services";

import Testimonials from "./components/Testimonials";
//import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Service />
       <Testimonials /> 
      {/* <Hireme /> */}
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Hansani Maleesha</h6>
        <p>Undergratuate</p>
      </footer>
    </div>
  );
};

export default App;
