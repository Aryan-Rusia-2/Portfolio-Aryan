import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-bl from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hello everyone, welcome to my website. My name is Aryan Rusia and I'm a third year computer engineering student at University of Alberta. I'm into web-development and 3d animation. I'm working on these skills from past one year.
        </p>

        <br />

        <p className="text-xl">
        I love learning new things about technology. I'm an enthusiast learner of technology. I also work as a freelancer for some of the most renowned freelancing websites. If you want to download the resume, hover over the fourth icon present on the left side of the screen.
        </p>
      </div>
    </div>
  );
};

export default About;
