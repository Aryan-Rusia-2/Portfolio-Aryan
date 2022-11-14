import React from "react";
import Tilt from "react-parallax-tilt";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import cplusplus from "../assets/cplusplus.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import premiere from "../assets/premiere.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

  
    {
      id: 6,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 9,
      src: premiere,
      title: "Adobe Premiere Pro",
      style: "shadow-blue-400"
    },
  ];

  return (
    <div
      name="experience"
      className="pt-20 dark:bg-gradient-to-br bg-white dark:from-black dark:via-gray-900 dark:to-gray-800 w-full min-h-screen p-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col text-black justify-center w-full h-full dark:text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-800 dark:border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 mt-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-14 text-center py-8 px-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor='lightblue' glarePosition="all"
            
              key={id}
              className={`shadow-lg hover:scale-110 text-black border-black border-2 dark:bg-[#31435c] dark:border-none dark:text-white bg-white cursor-pointer duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
