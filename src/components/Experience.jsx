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
import stream from "../assets/stream.png";
import seaborn from "../assets/sea.png";
import powerbi from "../assets/Power-BI-Logo.png";
import Jenkins from "../assets/Jenkins.png";
import mySQL from "../assets/MySQL.png";
import Jupyter from "../assets/jupyter-removebg-preview.png";
import scikitlearn from "../assets/scikit-learn.png";
import tableau from "../assets/Tableau.png";
import docker from "../assets/docker.png";
import plotly from "../assets/plotly.png";
import flask from "../assets/flask.png";



const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Jupyter,
      title: "Jupyter Notebook",
      style: "shadow-yellow-600",
    },
    {
      id: 2,
      src: docker,
      title: "Docker",
      style: "shadow-[#0388D1]",
    },
    {
      id: 3,
      src: flask,
      title: "Flask",
      style: "shadow-gray-500",
    },
    {
      id: 4,
      src: Jenkins,
      title: "Jenkins CI/CD Pipelines",
      style: "shadow-[#FFE0B2]",
    },

    {
      id: 5,
      src: scikitlearn,
      title: "Scikit Learn",
      style: "shadow-[#26C0CD]",
    },
    {
      id: 6,
      src: tableau,
      title: "Tableau",
      style: "shadow-[#E9782E]",
    },

    {
      id: 7,
      src: stream,
      title: "StreamLit",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: plotly,
      title: "Plotly",
      style: "shadow-[#129DFB]",
    },
    {
      id: 9,
      src: seaborn,
      title: "Seaborn",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: powerbi,
      title: "Power BI",
      style: "shadow-yellow-600",
    },

    {
      id: 11,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 12,
      src: mySQL,
      title: "MySQL",
      style: "shadow-[#27557C]",
    },

    {
      id: 13,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 15,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 16,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 17,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-[#26C0CD]",
    },

  
    {
      id: 18,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-300",
    },


    {
      id: 19,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },

    {
      id: 20,
      src: premiere,
      title: "Adobe Premiere Pro",
      style: "shadow-blue-400"
    },
  ];

  return (
    <div
      name="experience"
      className="pt-20 bg-white dark:bg-gray-800 w-full min-h-screen p-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col text-black items-center w-full h-full dark:text-white">
        
        <div>
          <p className="text-4xl justify-center font-bold md:border-b-4 border-gray-800 dark:border-gray-500  inline">
          Skills
          </p>
          <p className="py-6 mt-6"></p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 font-serif gap-6 md:gap-14 text-center py-8 px-3 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor='lightblue' glarePosition="all"
            
              key={id}
              className={`shadow-lg  hover:scale-110 text-black border-black border-2 dark:bg-[#31435c] dark:border-2 dark:text-white bg-white cursor-pointer duration-300 py-2 rounded-lg ${style}`}
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
