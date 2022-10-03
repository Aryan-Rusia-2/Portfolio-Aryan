import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen dark:bg-gradient-to-br  text-gray-900 bg-white dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl p-5 font-bold inline lg:border-b-4 border-black dark:border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl md:text-2xl mt-10 p-4">
          Passionate and driven undergraduate student at University of Alberta, pursuing Bsc. in Computer Engineeering. I have been working on Web Development from past 6 months.
          I have experience working with HTML, CSS, Javascript, React, Tailwind CSS and Bootstrap. I now specialise more in front-end development, but I'm also learning more about back-end development.
        </p>

        <br />

        <p className="text-xl md:text-2xl p-4">
          This portfolio website is the first proper website created by me. I also continue to sharpen my Video Editing and 3D Animation abilities. 
        </p>
      </div>
    </div>
  );
};

export default About;
