import React from 'react'

const Awards = () => {


    return (


        <div name="awards" className='min-h-screen bg-white from-cyan-100 via-cyan-50 to-cyan-100 dark:bg-gray-800  dark:text-white'>

            <div>

                <div className='p-5 mt-20 items-center'>

                    <h2 className='text-4xl font-bold flex hover:scale-105 duration-200 justify-center border-gray-500'>
                        Awards and Honors
                    </h2>

                </div>

                <div className='w-full flex flex-col text-center mt-20 mb-10 px-12 sm:px-0 space-y-20 '>

                    <details className='open:rounded-2xl hover:scale-110 rounded-md dark:bg-gradient-to-br dark:from-yellow-600  border-2 bg-blue-300 border-black dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-br bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Karate</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>Getting my black belt on 19th January, 2018, Judo Karate was always there from my childhood.</li>
                                <li> I started my journey of Karate at the age of 8 years, and have consistently been doing it till now.</li>
                                <li>I was the most senior student at the dojo and after 2 years of experience, I used to teach other students in the absence of our Guruji (instructor). </li>
                            </p>
                        </div>
                    </details>




                    <details className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Scholarship</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>University of Alberta Continuing International Award, 2022</li>
                                <li>University of Alberta Continuing International Award, 2021</li>
                                <li>University of Alberta Gold Standard Scholarship, 2020</li>
                                <li>Faculty of Engineering Gold Standard Scholarship, 2020</li>
                                <li>International Student Scholarship, 2020</li>
                            </p>
                        </div>
                    </details>




                    <details className='open:rounded-2xl  border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Music</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>I have earned the Level-A certificate in piano.</li>
                                <li> I used to go to music classes after school, when I was 11-12 years old.</li>
                            </p>
                        </div>
                    </details>

                    <details className='open:rounded-2xl border-2 border-black hover:scale-110 rounded-md dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400 w-full sm:w-2/3 sm:justify-center mx-auto open:shadow-lg duration-200 open:shadow-black'>

                        <summary className='text-black w-full font-semibold py-4 sm:w-2/3 place-content-center px-8 mx-auto flex rounded-md duration-300 dark:bg-gradient-to-b bg-blue-300 dark:from-yellow-600 dark:to-amber-400'>Certificate</summary>
                        <div>
                            <p className='dark:text-white rounded-b-2xl bg-gray-300 dark:bg-gray-800 text-sm px-6 py-4 list-outside capitalize sm:w-full space-y-4 justify-start pt-6 text-justify'>
                                <li>Concepts in Safety Leadership for Engineering (WHMIS), March 2021</li>
                                <li> Online Training on Video Editing from INTERNSHALA</li>
                            </p>
                        </div>
                    </details>


                </div>              

            </div>
        </div>
    )
}

export default Awards