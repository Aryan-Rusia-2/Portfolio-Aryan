import React from "react";
import divide from "../assets/project/divide.png";
import navsystem from "../assets/project/navsystem.png";
import Microsoft from "../assets/project/Microsoft.png";
import matrix from "../assets/project/matrix.png";
import facebook from "../assets/project/facebook.png";
import car from "../assets/project/car.png";
import Whatsapp from "../assets/project/W.png";
import Laptop from "../assets/project/Laptop.png";
import Kessler from "../assets/project/kessler.png";

const project = () => {
  const projects = [
    {
      id: 1,
      src: Laptop,
      href: "https://github.com/Aryan-Rusia-2/Divide-and-Conquer-Example",
      text: "Laptop Price Predictor"
    },
    {
      id: 2,
      src: Whatsapp,
      href: "https://github.com/Aryan-Rusia-2/Matrix-Operations",
      text: "WhatsApp Chat Analyzer"
    },
    {
      id: 3,
      src: Kessler,
      href: "https://github.com/Aryan-Rusia-2/Microsoft-Clone",
      text: "Kessler Game Controller"
    },

    {
      id: 4,
      src: divide,
      href: "https://github.com/Aryan-Rusia-2/Divide-and-Conquer-Example",
      text: "Divide & Conquer Algorithm"
    },
    {
      id: 5,
      src: matrix,
      href: "https://github.com/Aryan-Rusia-2/Matrix-Operations",
      text: "Matrix Operations using Java"
    },
    {
      id: 6,
      src: Microsoft,
      href: "https://github.com/Aryan-Rusia-2/Microsoft-Clone",
      text: "Microsoft Clone"
    },
    {
      id: 7,
      src: facebook,
      href: "https://github.com/Aryan-Rusia-2/Facebook-signup-page-login",
      text: "Facebook sign-up page"
    },
    {
      id: 8,
      src: navsystem,
      href: "https://github.com/Aryan-Rusia-2/Navigation-System",
      text: "Edmonton Route"
    },
    {
      id: 9,
      src: car,
      href: "https://github.com/Aryan-Rusia-2/Moving_Car_Animation",
      text: "Moving Car Animation"
    },
  ];

  return (
    <div
      name="project"
      className=" dark:bg-gray-800 bg-white  w-full dark:text-white md:min-h-screen p-10 pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div>

          <p className="text-4xl font-bold inline border-b-4 dark:border-gray-500">
            Projects
          </p>

          <p className="py-10">
            Check out some of my work right here
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-0 pb-10">
          {projects.map(({ id, src, href, text }) => (
            <div key={id} className="shadow-xl shadow-gray-700 dark:shadow-blue-300 rounded-lg">

              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

             

              <div className="flex items-center justify-center">

                 <a href={href}  target="_blank" rel="noreferrer"> 
                {/* <button className="w-fit px-6 py-3 m-4 duration-300 border-2 bg-cyan-100 dark:bg-gray-600 dark:text-white rounded-md border-yellow-400 inline hover:scale-105"> */}
                <button className="dark:bg-gray-800 w-fit px-6 py-3 m-4 duration-300 bg-cyan-100 dark:text-white rounded-md border-2 border-gray-500 inline hover:scale-105">
                  {text}
                  
                </button>
                </a>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project;
