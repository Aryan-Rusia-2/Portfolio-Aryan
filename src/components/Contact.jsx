import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-br  from-black via-gray-900 to-gray-800 pt-20 p-4 text-white"
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
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2 bg-gray-800 rounded-2xl shadow-lg shadow-black p-4 mb-10"
          >
         
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 m-2 bg-transparent border-4 rounded-md text-white hover:scale-105 duration-200 focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className=" m-2 p-2 bg-transparent border-4 rounded-md hover:scale-105 duration-200 text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-2 m-2 bg-transparent border-4 rounded-md hover:scale-105 duration-200 text-white focus:outline-none"
              ></textarea>

       

            <button className="text-black font-semibold bg-gradient-to-b from-yellow-500 to-amber-500 px-6 py-3 my-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Contact;
