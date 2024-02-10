import React from "react";
import Laptop from "../assets/project/Laptop.png";

const laptopprice = () => {
  return (
    <div
      name="about"
      className=" font-thin w-full h-auto p-2 md:p-10 text-gray-900 bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-style md:text-4xl md:pl-2 md:p-5 font-bold inline border-black dark:border-gray-500">
           Laptop Price Predictor 
          </p>
        </div>

        <p className=" text-xl md:text-xl md:mt-10 md:p-2">
          In December 2023, I launched a user-friendly "Laptop Price Predictor"
          application that simplifies the often confusing world of laptop
          pricing. By leveraging user-friendly technologies like Streamlit,
          scikit-learn, and NumPy, this project provides an accessible way to
          predict laptop prices based on various specifications.
        </p>

        <br />

        <img src={Laptop} alt="" />

        <br />

        <a href="https://laptoppricepredictor-byaryan.streamlit.app/">Click here for demo</a>

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          The Tech Behind the Magic
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Streamlit: Making it User-Friendly
        </p>

        <p className="text-xl md:text-xl md:p-2">
          The interface is powered by Streamlit, a Python tool known for its
          simplicity in creating interactive web applications. With Streamlit,
          users can easily select laptop specifications and see real-time price
          predictions, making the process straightforward and engaging.
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline font-professional border-black dark:border-gray-500">
          scikit-learn: The Machine Learning Wizard
        </p>

        <p className="text-xl md:text-xl md:p-2">
          At the core of the Laptop Price Predictor is scikit-learn, a powerful
          machine learning library in Python. I experimented with different
          regression models, comparing their performance to find the most
          accurate predictor for laptop prices.
        </p>
        <br />

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Picking the Best Model
        </p>

        <p className="text-xl md:text-xl md:p-2">
          In the quest for accuracy, I explored several regression models, each
          offering a unique way of understanding the relationship between laptop
          specs and prices. The models included:

          <ul className="list-disc pl-6">
            <br />
            <li>Linear Regression</li>
            <li>Lasso Regression</li>
            <li>Ridge Regression</li>
            <li>Decision Tree</li>
            <li>K-Nearest Neighbors (KNN)</li>
            <li>Random Forest</li>
            <li>XGBoost</li>
            <br />
          </ul>
          Reaching an impressive 80% average accuracy across these models was a
          result of a careful evaluation process. But Random Forest Algorithm
          outshone the rest with an impressive <b>88% accuracy</b>.
        </p>

        <br />

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Key Technologies and Tools
        </p>

        <ul className="list-disc text-xl md:text-xl md:p-2 pl-6">
          <li>
            <b>Python:</b> The entire application is crafted using Python, a
            versatile and powerful programming language.{" "}
          </li>
          <li>
            <b>Pickle:</b> To save and load the machine learning model and
            dataset, the Pickle library in Python comes into play.
          </li>
          <li>
            <b>NumPy:</b> Essential for numerical operations, NumPy is used for
            handling arrays and data manipulation.
          </li>
          <br />
        </ul>

        <p className="text-xl md:text-xl md:p-2">
        The Laptop Price Predictor isn't just a tool; it's a testament to the seamless integration of machine learning and user interface design. It's a demonstration of how complex technologies can be harnessed to simplify decision-making, whether you're a tech enthusiast or a recruiter looking for the next standout talent.
        </p>
       </div>
    </div>
  );
};

export default laptopprice;
