import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import TiltComponent from '../TiltComponent';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div
      name="home" class
      className="pt-14 h-screen w-full bg-white dark:bg-gray-800 text-left">


      <div className="max-w-screen-lg mx-auto flex flex-col-reverse h-full px-4 md:flex-row p-4 ">




        <div className="flex flex-col justify-center items-center h-full -mt-44 md:mt-0">

          <h1 className="px-4 font-style text-5xl text-gray-800 dark:text-gray-200 hidden md:flex hover:scale-105 hover:drop-shadow-2xl duration-300">ARYAN RUSIA</h1>


          <ul className="px-8 space-y-4 font-semibold p-4 list-disc  text-gray-800 dark:text-gray-200 text-2xl mb-10 mt-10">
            <li className="hover:text-gray-900 dark:hover:text-white hover:scale-105 duration-200 cursor-pointer font-professional">Co-founder SnowBotics</li>
            <li className="hover:text-gray-900 dark:hover:text-white hover:scale-105 duration-200 cursor-pointer font-professional">Data Scientist</li>
            <li className="hover:text-gray-900 dark:hover:text-white hover:scale-105 duration-200 cursor-pointer font-professional">Machine Learning Enthusiast</li>
            <li className="hover:text-gray-900 dark:hover:text-white hover:scale-105 duration-200 cursor-pointer font-professional">Web Developer</li>


          </ul>

          <div className="flex md:mr-20 gap-8 flex-row-reverse text-center align-middle">
            <Link
              to="experience"
              smooth
              duration={500}
              className="group hover:scale-110 duration-200 text-gray-900 font-semibold w-fit px-6 py-3 my-2 flex items-center  align-middle rounded-md bg-gradient-to-r border-2 dark:border-0 border-slate-600 hover:border-slate-700 from-blue-300 to-cyan-300 dark:from-amber-600 dark:to-yellow-400 cursor-pointer">
              Experience
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>

            <Link
              to="project"
              smooth
              duration={500}
              className="group hover:scale-110 duration-200 text-gray-900 font-semibold w-fit px-6 py-3 my-2 flex items-center align-middle rounded-md bg-gradient-to-r border-2 dark:border-0 border-slate-600 hover:border-slate-700 from-blue-300 to-cyan-300 dark:from-amber-600 dark:to-yellow-400 cursor-pointer">
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

        </div>

        <Tilt>
          <img
            src={HeroImage}
            alt="my profile"
            className="hero-image rounded-2xl mx-auto w-2/3 mt-16 mb-32 md:mb-8 hover:scale-102 duration-300 cursor-pointer shadow-xl shadow-cyan-300 dark:shadow-gray-500 "
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;