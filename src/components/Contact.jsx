import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-white dark:bg-gradient-to-bl from-orange-100 via-orange-50 to-orange-100 dark:from-gray-800 dark:via-gray-900 dark:to-black pt-20 p-4 dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me 
          </p>
          <p className="py-6">Wanna get in touch ? Fill the form below and then let's talk !!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/1e0e9125-35eb-41d3-bf8d-424d7f6f5e62"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 bg-cyan-50 text-black dark:bg-gray-800 rounded-2xl shadow-lg shadow-black p-4 mb-10"
          >
         
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 m-2 bg-transparent border-4 rounded-md text-black  dark:text-white hover:scale-105 duration-200 focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className=" m-2 p-2 bg-transparent border-4 rounded-md  text-black hover:scale-105 duration-200 dark:text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 m-2 bg-transparent border-4 rounded-md text-black hover:scale-105 duration-200 dark:text-white focus:outline-none"
              ></textarea>

       

            <button className="text-black font-semibold bg-gradient-to-b from-blue-400 to-cyan-400 dark:from-yellow-500 dark:to-amber-500 px-6 py-3 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Contact;
