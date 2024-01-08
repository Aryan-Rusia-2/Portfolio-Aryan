import React from "react";
import "./contact.css"

const Contact = () => {
  return (
    <>
      <div id='contact' className="dark:bg-gray-800 bg-white ">
        <p className="text-4xl font-bold pt-10 p-2 text-center dark:text-white text-black">
          Contact Me!!
        </p>
        <p className="py-6 mt-2  dark:text-white text-black text-center pb-16">Please fill out the form below to get in touch !!</p>
      </div>
      <div className='outer dark:bg-[#1F2937] bg-white'>

        <div className="box bg-white dark:bg-[#5fa3f0b7]">
          <form action='https://getform.io/f/1e0e9125-35eb-41d3-bf8d-424d7f6f5e62' method='POST' className="form bg-white dark:bg-[#202027]">

            <h2>Contact Me 😃</h2>
            <div className="inputBox">
              <input type="text" name="Name" required='required' />
              <span>Your Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required='required' />
              <span>Your email id</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="message" required='required'/>
              <span>Your message</span>
              <i></i>
            </div>
            <input type="submit" value='Submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
