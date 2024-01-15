import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/navbar2";
import Project from "./components/project";
// import MainProject from "./components/MainProject";
import SocialLinks from "./components/SocialLinks";
import Awards from "./components/Awards";
import React, { useEffect } from 'react';
import Education from "./components/Education";
import Footer from "./components/Footer"
import Laptoppricepredictor from "./projects/laptopprice"
import Motor from "./projects/motor"
import Elevator from "./projects/elevator"
import Cpu from "./projects/cpu"
import ReseachIntern from "./projects/researchintern"
import Working from "./components/work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {

  useEffect(() => {
    document.title = 'Aryan-Rusia-project';
  });


  return (
    <Router>
      <div className="flex space-y-1 flex-col p-1 pt-0 bg-white dark:bg-zinc-900">
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/laptop-price-predictor" element={<LaptopPricePage />} />
          <Route path="/motor-project" element={<MotorPage />} />
          <Route path="/elevator-project" element={<ElevatorPage />} />
          <Route path="/cpu-project" element={<CpuPage />} />
          <Route path="/research-intern" element={<ReseachInternPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
}

const MainPage = () => (
  <>
  <NavBar />
    <Home />
    <Project/>
    <About />
    <Working />
    <Experience />
    <Education />
    <Contact />
    <SocialLinks />
    <Awards />
  </>
);

const LaptopPricePage = () => (

  <>
  <NavBar2/>
<Laptoppricepredictor/>
  </>
)
const MotorPage = () => (

  <>
  <NavBar2/>
<Motor/>
  </>
)
const ElevatorPage = () => (

  <>
  <NavBar2/>
<Elevator/>
  </>
)
const CpuPage = () => (

  <>
  <NavBar2/>
<Cpu/>
  </>
)
const ReseachInternPage = () => (

  <>
  <NavBar2/>
<ReseachIntern/>
  </>
)

export default App;



