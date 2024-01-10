import React from 'react'

const Work = () => {


    return (


        <div name="work" className='md:min-h-screen bg-white from-cyan-100 via-cyan-50 to-cyan-100 dark:bg-gray-800 dark:text-white'>

            <div>

                <div className='p-5 mt-20 items-center'>

                    <h2 className='text-4xl font-bold flex hover:scale-105 duration-200 justify-center border-gray-500'>
                        Work Experience
                    </h2>

                </div>

                <div className='w-full flex flex-col text-center mt-20 mb-10 px-12 sm:px-0 space-y-20 '>

                    <details open={true} className='open:rounded-2xl hover:scale-110 rounded-md dark:bg-gradient-to-br dark:from-yellow-600  border-2 bg-blue-300 border-black dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-br bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Co-founder and CTO at SnowBotics</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>Co-founded and led tech initiatives, propelling our startup to the Top 20 in Edmonton within 6 months.</li>
                                <li>Led a 2-member tech team, ensuring weekly progress through coordinated schedules and effective collaboration.</li>
                                <li> Strategically aligned technology requirements with budget constraints, securing CFO approval.</li>
                                <li> Directed the recruitment process, conducting approximately 15 interviews in the hiring of contract workers.</li>
                                <li> Showcased SnowBotics to potential investors and diverse audiences across more than 10 platforms.</li>
                                <li> Got selected to more than 4 prominent events like Startup TNT, Collision, Alberta Catalyzer, and Alberta Innovates.</li>
                                <li> Secured a spot at Collision, North America's largest tech conference, showcasing the world's top 1500 startups.</li>
                                <li> Managed social media and website, implementing SEO for a notable daily 1000 impressions.</li>
                                <li> Achieved funding of around $10,000 through winnings in diverse competitions..</li>
                            </p>
                        </div>
                    </details>




                    <details open={true}  className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Research Intern</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>Explored the applicability of Ionic Devices in the Ising model.</li>
                                <li>Carried out experiments, examined data, and exhibited findings at an event within university.</li>
                                <li>Nominated as HQP (Highly Qualified Personnel) for NSERC report by the professor for exceptional contributions.</li>
                            </p>
                        </div>
                    </details>




                    <details className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Video Making/Editing Intern at BMUCO</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li> Edited educational videos using Adobe Premier Pro and Adobe After Effects</li>
                                <li> Managed social media accounts of the organization and made posters for them using Canva.</li>
                            </p>
                        </div>
                    </details>


                </div>              

            </div>
        </div>
    )
}

export default Work