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
  const ds_ml_projects = [
    {
      id: 1,
      src: Laptop,
      href: "/laptop-price-predictor",
      text: "Laptop Price Predictor",
    },
    {
      id: 2,
      src: Whatsapp,
      href: "https://github.com/Aryan-Rusia-2/Matrix-Operations",
      text: "WhatsApp Chat Analyzer",
    },
    {
      id: 3,
      src: Kessler,
      href: "https://github.com/Aryan-Rusia-2/Microsoft-Clone",
      text: "Kessler Game Controller",
    },
  ];

  const hardware_projects = [
    {
      id: 1,
      src: divide,
      href: "/motor-project",
      text: "Stepper Motor - Zybo Z7",
    },
    {
      id: 2,
      src: matrix,
      href: "/elevator-project",
      text: "Elevator System - VHDL",
    },
    {
      id: 3,
      src: Microsoft,
      href: "https://aryanrusia.me/cpu-project",
      text: "8-bit CPU Design",
    },
  ];

  const software_projects = [
    {
      id: 1,
      src: facebook,
      href: "https://github.com/Aryan-Rusia-2/Facebook-signup-page-login",
      text: "Facebook sign-up page",
    },
    {
      id: 2,
      src: navsystem,
      href: "https://github.com/Aryan-Rusia-2/Navigation-System",
      text: "Edmonton Route",
    },
    {
      id: 3,
      src: car,
      href: "https://github.com/Aryan-Rusia-2/Moving_Car_Animation",
      text: "Moving Car Animation",
    },
  ];

  return (
    <div
      name="project"
      className=" dark:bg-gray-800 bg-white w-full dark:text-white md:min-h-screen p-10 md:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center w-full h-full">
        <div>
          <p className="text-2xl md:text-4xl font-bold inline justify-center dark:border-gray-500 ">
            Machine Learning Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-0 pb-10 pt-20">
          {ds_ml_projects.map(({ id, src, href, text }) => (
            <div
              key={id}
              className="shadow-xl shadow-gray-700 dark:shadow-blue-300 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer">
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

      <div className="max-w-screen-lg pt-28 p-4 mx-auto flex flex-col items-center w-full h-full">
        <div>
          <p className="text-3xl md:text-4xl font-bold inline justify-center dark:border-gray-500 ">
            Hardware Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-0 pb-10 pt-20">
          {hardware_projects.map(({ id, src, href, text }) => (
            <div
              key={id}
              className="shadow-xl shadow-gray-700 dark:shadow-blue-300 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer">
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

      <div className="max-w-screen-lg p-4 pt-28 mx-auto flex flex-col items-center w-full h-full">
        <div>
          <p className="text-3xl md:text-4xl font-bold inline justify-center dark:border-gray-500 ">
            Software Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-0 pb-10 pt-20">
          {software_projects.map(({ id, src, href, text }) => (
            <div
              key={id}
              className="shadow-xl shadow-gray-700 dark:shadow-blue-300 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noreferrer">
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
