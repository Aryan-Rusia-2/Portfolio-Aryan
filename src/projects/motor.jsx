import React from "react";
import Laptop from "../assets/project/Laptop.png";

const motor = () => {
  return (
    <div
      name="about"
      className=" font-thin w-full h-auto p-2 md:p-10 text-gray-900 bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="font-style  text-2xl md:text-4xl md:pl-2 md:p-5 font-bold inline border-black dark:border-gray-500">
          Controlling a Stepper Motor Using the Zybo Z7
          </p>
        </div>

        <p className=" text-xl md:text-xl md:mt-3 md:p-2">
        In the winter term of 2023, as part of the ECE 315 Computer Interfacing course, a project was undertaken to gain practical experience with a microcontroller, running the FreeRTOS real-time kernel, and controlling the operation of a small stepper motor. The project aimed to enhance the user interface of a stepper motor control application on the Zybo Z7 development board and measure experimentally the speed and acceleration limits of a small stepper motor.
        </p>

        <br />

        <img src={Laptop} alt="" />

        <br />

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
        Hardware Used
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
        The project utilized the following hardware components:
        </p>

        <p className="text-xl md:text-xl md:p-2">
        <ul className="list-disc pl-10">
            <li>
            <b>Zybo Z7 Development Board:</b> The Digilent Zybo Z7 development board with the Zynq-7000 SoC running the FreeRTOS real-time kernel.
            </li>
            <br/>
            <li>
            <b>28BYJ-48 Stepper Motor:</b> A small stepper motor with unipolar drive windings.
            </li>
            <br/>
            <li>
            <b>ULN2003-Based Driver Module: </b> A driver module based on the ULN2003 IC for controlling the stepper motor.
            </li>
            <br/>
            <li>
            <b>LTV-847 Opto-Isolator Transistor Array: </b>An opto-isolation circuit to protect sensitive digital components from voltage spikes.
            </li>
            <br/>
            <li>
            <b >Various Resistors and Wires: </b>Used in assembling the opto-isolation circuit.
            </li>
            <br/>
        </ul>
        </p>

        <p className="text-xl md:text-xl md:p-2">
        The project referred to various documentation and datasheets for reference, including the Digilent Zybo Z7 Reference Manual, FreeRTOS Reference Manual, ECE 315 lecture slides, and datasheets for the stepper motor, ULN2003 IC, and LTV-847 quad opto-isolator IC
        </p>
        <p className="text-xl md:text-xl md:p-2">
        Before starting the project, the hardware configuration needed to be assembled and verified. This involved removing the 7-segment LED display Pmod module from the Zybo Z7 board and assembling the opto-isolation circuit on the breadboard.
        </p>

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
        Provided Stepper Motor Control Software

        </p>

        <p className="text-xl md:text-xl md:p-2">

        The project included an initial user interface driven by a FreeRTOS task that interacts with the user through the UART. The interface allowed users to set parameters such as current position, rotational speed, acceleration, deceleration, destination positions, and dwell time.
        A library of stepper motor control functions was provided, including functions for initialization, setting parameters, moving to a position, checking motion completion, and disabling the motor.
        </p>



        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
        Exercise 1: Completing the FreeRTOS Task for Motor Rotation

        </p>
        <p className="text-xl md:text-xl md:p-2">
        We were required to complete the _Task_Motor() task responsible for moving the stepper motor based on the user-set parameters. The RGB LED was utilized to indicate the motor's status.

        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
        Exercise 2: Emergency Stop Command Implementation
        </p>
        <p className="text-xl md:text-xl md:p-2">
        An emergency stop function was implemented using the Zybo Z7 board's pushbutton (BTN0). The project required the RGB LED to blink in red when the emergency stop command was issued.

        </p>
        <p className="text-xl md:text-xl md:p-2">
        The project provided hands-on experience in interfacing with hardware components, implementing real-time tasks using FreeRTOS, and developing a user interface for stepper motor control. The successful completion of exercises demonstrated the understanding and application of concepts covered in the ECE 315 course. The integration of an emergency stop feature added an important safety aspect to the stepper motor control system.
        </p>

      
       </div>
    </div>
  );
};

export default motor;
