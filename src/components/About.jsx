import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-auto p-10 dark:bg-gradient-to-br  text-gray-900 bg-white dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl p-5 font-bold inline lg:border-b-4 border-black dark:border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl md:text-xl mt-10 p-2">
        Greetings! I'm Aryan Rusia, a passionate and results-driven computer engineering student at the University of Alberta, set to graduate in 2025. With a cumulative GPA of 3.6/4.0, I've delved deep into the realms of machine learning, data analytics, and database management systems during my academic journey.
       </p>

        <br />

        <p className="text-xl md:text-xl p-2">
        Currently serving as the Co-founder and CTO of SnowBotics, I've led our tech initiatives to propel our startup into the Top 20 in Edmonton within just 6 months. I thrive on strategic alignment, having successfully integrated technology requirements with budget constraints and securing funding through diverse competitions. As a tech enthusiast, I've explored various facets of the field, from web development to machine learning. Noteworthy projects include the creation of a user-friendly "Laptop Price Predictor" and the implementation of fuzzy logic for the Kessler Game Controller, earning us 2nd place in a university competition.

        </p>

        <br />

        <p className="text-xl md:text-xl p-2">
       Beyond coding, I've presented our projects at esteemed events like Collision, Startup TNT, and Alberta Catalyzer, showcasing my ability to communicate complex tech concepts to diverse audiences. My journey is a testament to my commitment to continuous learning, problem-solving, and a genuine love for all things tech. Let's connect and explore the possibilities at the intersection of innovation and technology.
   
        </p>
      
      </div>
    </div>
  );
};

export default About;
