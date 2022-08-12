import React from 'react'

const Education = () => {
    return (
        <div name="education" className='min-h-screen bg-gradient-to-br from-violet-200 via-violet-50 to-violet-100 dark:from-black dark:via-gray-900 dark:to-gray-800'>


            <div className="pb-8 mx-10 mt-20 md:mx-32 md:mt-28 mb-14">
                <p className="text-4xl font-bold inline border-b-4 text-black dark:text-white border-black dark:border-gray-500 ">
                    Education
                </p>
            </div>


            <div className='space-y-10 hidden md:flex flex-col md:mb-24'>

                <div className='flex p-2 text-sm ml-8 mr-4 px-2 md:mx-24 md:px-6 py-2 bg-cyan-300 hover:bg-cyan-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105 shadow-sm  dark:shadow-slate-600 duration-300 rounded-md md:p-6 dark:text-white'>


                    <div className='flex flex-col md:mx-10 space-y-2'>

                        <div>
                            Bachelor of Science (B.S.) - Computer Engineering
                        </div>
                        <div className='md:mx-4 font-thin'>
                            (University of Alberta, Edmonton, AB)
                        </div>


                    </div>


                    <div className='flex flex-col ml-auto space-y-2'>
                        <div>
                            Sep 2020 - May 2024 (Expected)
                        </div>
                        <div className='font-thin md:mx-4'>
                            (2nd Year GPA = 3.3/4)
                        </div>

                    </div>


                </div>



                <div className='flex p-2 text-sm ml-8 mr-4 px-2 md:mx-24 md:px-6 py-2 bg-cyan-300 hover:bg-cyan-400 dark:bg-gray-600 hover:scale-105 shadow-sm dark:hover:bg-gray-500 dark:shadow-slate-600 duration-300 rounded-md md:p-6  dark:text-white'>


                    <div className='flex flex-col md:mx-10 space-y-2'>

                        <div>
                            Class 12th, Non-medical (PCM) branch
                        </div>
                        <div className='md:mx-4 font-thin'>
                            (Kamm Scholars School, Bisalpur, UP)
                        </div>


                    </div>


                    <div className='flex flex-col ml-auto space-y-2'>
                        <div>
                            April 2018 - June 2019
                        </div>
                        <div className='font-thin md:mx-4'>
                            (Percentage-96.2%)
                        </div>

                    </div>


                </div>




                <div className='flex p-2 text-sm ml-8 mr-4 px-2 md:mx-24 md:px-6 py-2 hover:scale-105 bg-cyan-300 hover:bg-cyan-400 shadow-sm dark:hover:bg-gray-500 dark:shadow-slate-600 duration-300  dark:bg-gray-600 rounded-md md:p-6 dark:text-white'>


                    <div className='flex flex-col md:mx-10 space-y-2'>

                        <div>
                            Class 10th
                        </div>
                        <div className='font-thin'>
                            (DAV Public School Chamba, HP)
                        </div>


                    </div>


                    <div className='flex flex-col ml-auto space-y-2'>
                        <div>
                            April 2016 - June 2017
                        </div>
                        <div className='font-thin md:mx-4'>
                            (Percentage - 96.2%)
                        </div>

                    </div>


                </div>

            </div>

            <div className='md:hidden flex flex-col space-y-8 dark:text-white'>

                <div className=' bg-violet-200 dark:bg-gray-600 shadow-md shadow-zinc-500 m-3 rounded-md ml-8 mr-4 text-center p-2'>
                    <div>
                        Bachelor of Science - Computer Engineering
                    </div>
                    <div className='text-center'>
                        (University of Alberta, Edmonton, AB)

                    </div>
                    <div className='pt-6 text-center'>
                        April 2018 - June 2019
                    </div>

                    <div className='p-1 text-center '>
                        (2nd Year GPA = 3.3/4)
                    </div>
                </div>

                <div className='bg-violet-200 dark:bg-gray-600 m-3 shadow-md shadow-zinc-500 rounded-md ml-8 mr-4 text-center p-2'>
                    <div>
                        Class 12th
                    </div>
                    <div className='text-center'>
                        (Kamm Scholars School, UP)

                    </div>
                    <div className='pt-6 text-center'>
                        Sep 2020 - May 2024 (Expected)
                    </div>

                    <div className='p-1 text-center '>
                        (Percentage-96.2%)
                    </div>
                </div>

                <div className='bg-violet-200 dark:bg-gray-600 m-3 shadow-md shadow-zinc-500 rounded-md ml-8 mr-4 p-2 text-center'>
                    <div>
                        Class 10th
                    </div>
                    <div className='text-center'>
                        (DAV Public School Chamba, HP)

                    </div>
                    <div className='pt-6 text-center'>
                        April 2016 - June 2017
                    </div>

                    <div className='p-1 text-center '>
                        (Percentage-96.2%)
                    </div>
                </div>


            </div>



        </div>
    )
}

export default Education