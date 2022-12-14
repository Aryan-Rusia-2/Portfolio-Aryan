import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/project";
import SocialLinks from "./components/SocialLinks";
import Awards from "./components/Awards";
import React, { useEffect } from 'react';
import Education from "./components/Education";
import Footer from "./components/Footer"




function App() {

  useEffect(() => {
    document.title = 'Aryan-Rusia-project';
  });


  return (
    <div className="flex space-y-2 flex-col p-1 pt-0 bg-white dark:bg-black ">

      <NavBar />
      <Home />
      <About />
      <Education/>
      <Project />
      <Experience /> 
      <Contact />
      <SocialLinks />
      <Awards />
      <Footer/>
    </div>

  );
}

export default App;
