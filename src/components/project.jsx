import React from "react";
import divide from "../assets/project/divide.png";
import navsystem from "../assets/project/navsystem.png";
import Microsoft from "../assets/project/Microsoft.png";
import matrix from "../assets/project/matrix.png";
import facebook from "../assets/project/facebook.png";
import car from "../assets/project/car.png";

const project = () => {
  const projects = [
    {
      id: 1,
      src: divide,
      href: "https://github.com/Aryan-Rusia-2/Divide-and-Conquer-Example"
    },
    {
      id: 2,
      src: matrix,
      href: "https://github.com/Aryan-Rusia-2/Matrix-Operations"
    },
    {
      id: 3,
      src: Microsoft,
      href: "https://github.com/Aryan-Rusia-2/Microsoft-Clone",
    },
    {
      id: 4,
      src: facebook,
      href: "https://github.com/Aryan-Rusia-2/Facebook-signup-page-login",
    },
    {
      id: 5,
      src: navsystem,
      href: "https://github.com/Aryan-Rusia-2/Navigation-System",
    },
    {
      id: 6,
      src: car,
      href: "https://github.com/Aryan-Rusia-2/Moving_Car_Animation"
    },
  ];

  return (
    <div
      name="project"
      className=" dark:bg-gradient-to-bl bg-white dark:from-gray-800 dark:via-gray-900 dark:to-black w-full dark:text-white md:min-h-screen p-10 pt-20"
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-0 pb-10">
          {projects.map(({ id, src, href }) => (
            <div key={id} className="shadow-2xl shadow-gray-700 dark:shadow-gray-600 rounded-lg">

              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

             

              <div className="flex items-center justify-center">

                 <a href={href}  target="_blank" rel="noreferrer"> 
                <button className="w-fit px-6 py-3 m-4 duration-300 border-2 bg-cyan-100 dark:bg-gray-600 dark:text-white rounded-md border-black inline hover:scale-125">
                  View Code on Github
                  
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
