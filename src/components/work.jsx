// import React from 'react'

// const Work = () => {

//     return (

//         <div name="experience" className='md:min-h-screen bg-white from-cyan-100 via-cyan-50 to-cyan-100 dark:bg-gray-800 dark:text-white'>

//             <div>

//                 <div className='p-5 mt-20 items-center'>

//                     <h2 className='text-4xl font-bold flex hover:scale-105 duration-200 justify-center border-gray-500'>
//                         Work Experience
//                     </h2>

//                 </div>

//                 <div className='w-full flex flex-col text-center mt-20 mb-10 px-12 sm:px-0 space-y-20 '>

//                     <details open={true} className='open:rounded-2xl hover:scale-110 rounded-md dark:bg-gradient-to-br dark:from-yellow-600  border-2 bg-blue-300 border-black dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

//                         <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-br bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Co-founder and CTO at SnowBotics</summary>
//                         <div>
//                             <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
//                                 <li>Co-founded and led tech initiatives, propelling our startup to the Top 20 in Edmonton within 6 months.</li>
//                                 <li>Led a 2-member tech team, ensuring weekly progress through coordinated schedules and effective collaboration.</li>
//                                 <li> Strategically aligned technology requirements with budget constraints, securing CFO approval.</li>
//                                 <li> Directed the recruitment process, conducting approximately 15 interviews in the hiring of contract workers.</li>
//                                 <li> Showcased SnowBotics to potential investors and diverse audiences across more than 10 platforms.</li>
//                                 <li> Got selected to more than 4 prominent events like Startup TNT, Collision, Alberta Catalyzer, and Alberta Innovates.</li>
//                                 <li> Secured a spot at Collision, North America's largest tech conference, showcasing the world's top 1500 startups.</li>
//                                 <li> Managed social media and website, implementing SEO for a notable daily 1000 impressions.</li>
//                                 <li> Achieved funding of around $10,000 through winnings in diverse competitions..</li>
//                             </p>
//                         </div>
//                     </details>

//                     <details open={true}  className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

//                         <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Research Intern</summary>
//                         <div>
//                             <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
//                                 <li>Explored the applicability of Ionic Devices in the Ising model.</li>
//                                 <li>Carried out experiments, examined data, and exhibited findings at an event within university.</li>
//                                 <li>Nominated as HQP (Highly Qualified Personnel) for NSERC report by the professor for exceptional contributions.</li>
//                             </p>
//                         </div>
//                     </details>

//                     <details className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

//                         <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Video Making/Editing Intern at BMUCO</summary>
//                         <div>
//                             <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
//                                 <li> Edited educational videos using Adobe Premier Pro and Adobe After Effects</li>
//                                 <li> Managed social media accounts of the organization and made posters for them using Canva.</li>
//                             </p>
//                         </div>
//                     </details>

//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Work

// import React from "react";
import React, { useState } from 'react';

const Work = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (id) => {
    setShowDetails(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div name="experience" className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Work Experience</h1>
          <p className="text-md mt-4 text-gray-300">A showcase of my professional journey.</p>
        </div>

        <div className="space-y-12">
          {/* Work Experience Item 1 */}
          <div className="bg-gray-700 shadow-lg shadow-slate-400 rounded-lg  p-6 cursor-pointer" onClick={() => toggleDetails('item1')}>
            <h2 className="text-2xl font-bold">SnowBotics - Co-founder & Technology Lead</h2>
            <p className="text-md text-gray-400">December 2022 - Present</p>
            {showDetails['item1'] && (
              <div className="mt-4 text-gray-300">
                <li>Guided SnowBotics' technological direction, elevating it to the top 20 startups in Edmonton.</li>
                <li>Drove revenue to $10,000, affirming market potential and achieving a high customer satisfaction rate.</li>
                <li>Pitched to over 20,000 people across 20+ events like Startup TNT, Collision, Alberta Catalyzer, and Alberta Innovates.</li>
                <li>Utilized computer vision and ultrasonic sensors, enriching data accuracy by 35% for environmental analysis.</li>
                <li>Integrated sensor fusion in robotic navigation, reducing collision incidents by 25% through Python-based algorithms.</li>
                <li>Engineered a snow robot with Jetson Nano; implemented TensorFlow's CNN, enhancing object detection accuracy by 30%.</li>

              </div>
            )}
          </div>

          <div className="bg-gray-700 rounded-lg shadow-lg shadow-slate-400  p-6 cursor-pointer" onClick={() => toggleDetails('item2')}>
            <h2 className="text-2xl font-bold">VK-Tech - Software Developer</h2>
            <p className="text-md text-gray-400">May 2022 - Aug 2023</p>
            {showDetails['item2'] && (
              <div className="mt-4 text-gray-300">
              
                    <li>Led Agile-Scrum full-stack projects, achieving a 28% rise in customer satisfaction with tailored solutions.</li>
                    <li>Enhanced GUIs for control panels using Java/Python, leading to a 15% uptick in system throughput and user interactivity. </li>
                    <li>Developed Python test scripts for automating regression of electrical systems, cutting down fault isolation time by 20%. </li>
                    <li>Managed Git version control and JIRA sprint cycles, yielding a 36% boost in deployment efficiency and CI/CD compliance. </li>
                    <li>Implemented RESTful APIs and microservices architecture, improving system scalability and reducing response time by 24%.</li>
                    <li>Created a React-based real-time system monitoring dashboards, increasing user engagement and analytics clarity.</li>

              </div>
            )}
          </div>


          <div className="bg-gray-700 rounded-lg shadow-lg shadow-slate-400 p-6 cursor-pointer" onClick={() => toggleDetails('item3')}>
            <h2 className="text-2xl font-bold">Under Professor Dr. Jie Han - Research Intern</h2>
            <p className="text-md text-gray-400">Jan 2023 - April 2023</p>
            {showDetails['item3'] && (
              <div className="mt-4 text-gray-300">
                <li>Conducted 20+ experiments applying Monte Carlo simulations to study Ionic Devices in the Ising model. </li>
                <li>Presented Monte Carlo simulation results at a university event, receiving 90% positive feedback. </li>
                <li>Explored electron tunneling and investigated migration probability, revealing crucial insights into Ionic Devices. </li>
                <li>Nominated as HQP (Highly Qualified Personnel) for NSERC report by the professor for exceptional contributions. </li>
                <li>Explored nanostructure factor's impact, demonstrating Metropolis algorithm proficiency in Ionic Devices' complex studies. </li>

              </div>
            )}
          </div>


          <div className="bg-gray-700 rounded-lg shadow-lg shadow-slate-400  p-6 cursor-pointer" onClick={() => toggleDetails('item4')}>
            <h2 className="text-2xl font-bold">U of A Blueprint - Software Developer (Freelance)</h2>
            <p className="text-md text-gray-400">Sept 2022 - Dec 2022</p>
            {showDetails['item4'] && (
              <div className="mt-4 text-gray-300">
                <li>Led initiatives to optimize performance and responsiveness for a student application platform at U of A Blueprint. </li>
                <li>Developed REST API using JavaScript for a student application platform, reduced response times by 40%. </li>
                <li>Emphasized rigorous testing using React Testing Library to guarantee the reliability and performance of the React application.</li>
                <li>Implemented Redux for efficient state management, ensuring organized handling of application data.</li>
                <li>Streamlined communication between student application FAQ and MongoDB, resulting in a 50% reduction in query processing time.</li>

              </div>
            )}
          </div>


          {/* Repeat for other items */}
        </div>
      </div>
    </div>
  );
};

export default Work;
