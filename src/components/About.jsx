import React from "react";
import vg from "../assets/2.png"

const About = () => {
  return (
<div className='about'>
        <div id='about' >
            <p className="text-4xl font-bold pt-32 p-2 text-center text-white">
                About me 😀
            </p>
        </div>
        <div className="home2" id='about' >


            <img src={vg} alt="Graphics" />
            <div>
                <p>I am a 3rd year undergrad student at University of Alberta pursuing Electrical Engineering with an expected year of completion Fall 2024. I am passionate about Computer Science and Software engineering, and have learned courses, completed internships, and participated in fests and clubs related to the field. </p>
                 <p>Doing numerous coding projects and implementing my skills in practical work I got the exposure of working in tech related fields in the real world environment. Doing electrical engineering made me learn complex and advanced microchip and microprocessors hardware programming language that serves as a significant help while using these skills in software programming at the machine level.</p> 
                 <p> I am currently working as a part time software engineer intern online in Surya Comtrade llp, in India, with expected completion date December, 2022.</p>

            </div>
        </div>
    </div>

)
};

export default About;
