import React from "react";
import motor from "../assets/project/3.png";
import navsystem from "../assets/project/navsystem.png";
import cpu from "../assets/project/1.png";
import elevator from "../assets/project/2.png";
import travel from "../assets/project/travel.png";
import facebook from "../assets/project/facebook.png";
import dashboard from "../assets/powerBI/dashboard.png";
import sales from "../assets/powerBI/sales.png";
import employee from "../assets/project/employee.png";
import car from "../assets/project/car.png";
import Whatsapp from "../assets/project/W.png";
import Laptop from "../assets/project/Laptop.png";
import Kessler from "../assets/project/kessler.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    {
      id: 4,
      src: travel,
      href: "https://travel-suggestion-bot.streamlit.app/",
      text: "GPT-3.5 Travel Suggestion Bot",
    },
    {
      id: 5,
      src: sales,
      href: "https://travel-suggestion-bot.streamlit.app/",
      text: "Product Sales Power BI",
    },
    {
      id: 6,
      src: dashboard,
      href: "https://travel-suggestion-bot.streamlit.app/",
      text: "SuperStore Sales Dashboard",
    },
  ];

  const hardware_projects = [
    {
      id: 1,
      src: motor,
      href: "/motor-project",
      text: "Stepper Motor - Zybo Z7",
    },
    {
      id: 2,
      src: elevator,
      href: "/elevator-project",
      text: "Elevator System - VHDL",
    },
    {
      id: 3,
      src: cpu,
      href: "/cpu-project",
      text: "8-bit CPU Design",
    },
  ];

  const software_projects = [
    {
      id: 1,
      src: employee,
      href: "https://employees-mangement-system.netlify.app/",
      text: "Employee Management System",
    },
    {
      id: 2,
      src: facebook,
      href: "https://github.com/Aryan-Rusia-2/Facebook-signup-page-login",
      text: "Facebook sign-up page",
    },
    {
      id: 3,
      src: navsystem,
      href: "https://github.com/Aryan-Rusia-2/Navigation-System",
      text: "Edmonton Route",
    },
    {
      id: 4,
      src: car,
      href: "https://github.com/Aryan-Rusia-2/Moving_Car_Animation",
      text: "Moving Car Animation",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div name="project" className="dark:bg-gray-800 bg-white w-full dark:text-white md:min-h-screen p-10">
      <div className="max-w-screen-lg mx-auto">
        <Section
          title="Machine Learning / Data Science Projects"
          projects={ds_ml_projects}
          settings={sliderSettings}
        />
        <Section
          title="Hardware Projects"
          projects={hardware_projects}
          settings={sliderSettings}
        />
        <Section
          title="Software Projects"
          projects={software_projects}
          settings={sliderSettings}
        />
      </div>
    </div>
  );
};

const Section = ({ title, projects, settings }) => (
  <div className="pt-10">
    <div className="text-center pb-16" >
      <p className="text-3xl md:text-4xl font-bold inline justify-center dark:border-gray-500 ">
        {title}
      </p>
    </div>
    <Slider {...settings} className="pb-20">
      {projects.map(({ id, src, href, text }) => (
        <div key={id} className="p-4">
          <div className="shadow-lg shadow-gray-700 dark:shadow-blue-400 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <a href={href} target="_blank" rel="noreferrer">
                <button className="dark:bg-gray-800 w-fit px-6 py-3 m-4 duration-300 bg-cyan-100 dark:text-white rounded-md border-2 border-gray-500 inline hover:scale-105">
                  {text}
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default project;
