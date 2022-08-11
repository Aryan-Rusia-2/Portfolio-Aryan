import React from "react";
import arrayDestruct from "../assets/project/arrayDestruct.jpg";
import navsystem from "../assets/project/navsystem.png";
import Microsoft from "../assets/project/Microsoft.png";
import reactParallax from "../assets/project/reactParallax.jpg";
import facebook from "../assets/project/facebook.png";
import car from "../assets/project/car.png";

const project = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: Microsoft,
    },
    {
      id: 4,
      src: facebook,
    },
    {
      id: 5,
      src: navsystem,
    },
    {
      id: 6,
      src: car,
    },
  ];

  return (
    <div
      name="project"
      className=" bg-gradient-to-bl from-emerald-100 via-emerald-50 to-emerald-100 dark:from-gray-800 dark:via-gray-900 dark:to-black w-full dark:text-white md:min-h-screen p-10 pt-20"
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
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-2xl shadow-gray-700 dark:shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-fit px-6 py-3 m-4 duration-300 hover:scale-125">
                   View Code on Github
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project;
