import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import ToggleButton from "./toggle.jsx";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "education",
    },
    {
      id: 4,
      link: "project",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },

    {
      id: 7,
      link: "awards",
    },
  ];


  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex font-semibold text-xl justify-between items-center w-full h-20 px-4 bg-white dark:bg text-gray-900 dark:text-white dark:bg-black fixed z-20">

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 md:flex cursor-pointer capitalize text-md justify-start mr-10 text-gray-900 hover:text-black dark:text-gray-400 hover:scale-125 dark:hover:text-gray-50 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>


        ))}

        <li className="hidden md:flex mr-5 ml-8 pr-4 z=-10">
          <ToggleButton onClick={toggleDarkMode} />
        </li>


      </ul>





      <div

        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black dark:text-gray-500 md:hidden">

        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      {nav && (
        <ul className=" flex flex-col justify-center space-y-7 items-center absolute max-h-screen top-0 left-0 w-full h-screen bg-gradient-to-b text-black from-cyan-200 via-cyan-100 to-blue-200 dark:from-black dark:to-gray-800 dark:text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}

          
        </ul>
        
      )}


      <div className="flex flex-row-reverse">
        <h1 className="text-2xl mb-2 font-normal font-special text-gray-800 dark:text-gray-400 -ml-10 duration-200 hover:scale-110 cursor-pointer mt-2 hover:text-black dark:hover:text-gray-50">Light/Dark</h1>
        <div className="mt-5 mr-6 px-4 md:hidden">
        <ToggleButton onClick={toggleDarkMode} />
        </div>
      </div>

    </div>
  );
};

export default NavBar;
