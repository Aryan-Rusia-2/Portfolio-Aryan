import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import navsystem from "../assets/portfolio/navsystem.png";
import Microsoft from "../assets/portfolio/Microsoft.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import facebook from "../assets/portfolio/facebook.png";
import car from "../assets/portfolio/car.png";

const Portfolio = () => {
  const portfolios = [
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
      name="portfolio"
      className=" bg-gradient-to-br  from-black via-gray-900 to-gray-800 w-full text-white md:min-h-screen p-10 pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div>

          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="py-10">
            Check out some of my work right here
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-0 pb-10">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-fit px-6 py-3 m-4 duration-200 hover:scale-125">
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

export default Portfolio;
