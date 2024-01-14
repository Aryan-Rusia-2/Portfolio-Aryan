import React from "react";
import part1rtl from "../assets/Elevator/part1rtl.PNG";
import part2 from "../assets/Elevator/part2.png";
import part3 from "../assets/Elevator/part3.PNG";

const elevator = () => {
  return (
    <div
      name="about"
      className=" font-thin w-full h-auto p-2 md:p-10 text-gray-900 bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="font-style  text-2xl md:text-4xl md:pl-2 md:p-5 font-bold inline border-black dark:border-gray-500">
            Crafting an Elevator System with VHDL on Zybo Z7
          </p>
        </div>

        <p className=" text-xl md:text-xl md:mt-3 md:p-2">
          Embark on a captivating digital odyssey with me as we navigate the
          intricate world of VHDL and the Zybo Z7 board in three exhilarating
          acts. Through this journey, we'll unravel complexities, decode
          challenges, and, at the heart of it all, craft a remarkable Elevator
          System. Join me in exploring the nuances of digital design and
          celebrating victories in each chapter of this engaging exploration.
        </p>

        <br />

        <br />

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Act 1: Deciphering '00XX1' with Moore Magic
        </p>

        <p className="text-xl md:text-xl md:p-2">
          In the first part, I created a digital dance on Zybo Z7 to recognize a
          specific binary pattern - '00XX1'. Think of it like a smart light
          changing colors when it spots the correct sequence. VHDL was my tool,
          helping me describe this digital dance, and Zybo Z7 made it all come
          to life.
        </p>
        <br/>
        <img src={part1rtl} alt="" />
        <br/>
        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Act 2: The Mysterious SequenceSpectrum
        </p>

        <p className="text-xl md:text-xl md:p-2">
          The second act involved unraveling a mysterious black box called
          "SequenceSpectrum" from CircuitWorks. It's like a digital detective
          that can spot specific patterns in binary data. The challenge?
          Decoding its inner workings. I had to understand its language, the
          inputs (like clock and data), and the outputs (like LEDs changing
          colors).
          <br />
          <br />
          <i>Inputs:</i>
          <br />
          <ul>
            <li>
              <b>Clock (K17): </b>The heartbeat of the system.
            </li>
            <li>
              <b>Data_in (G15, SW0): </b>The binary data to be analyzed.
            </li>
            <li>
              <b>Clock Button (K18, BTN0): </b>A button to kickstart the
              process.
            </li>
          </ul>
          <br />
          <i>Outputs:</i>
          <br />
          <ul>
            <li>
              <b>Data Display (M14, LD0): </b>Showing the processed data.
            </li>
            <li>
              <b>LEDs (M15, G14, D18, LD1, LD2, LD3): </b>Visual hints for
              figuring out what's happening.
            </li>
            <li>
              <b>Sequence Detected (F17, LD6): </b> A special light signaling a
              successful detection.
            </li>
          </ul>
          <br />
        </p>
        <br/>
        <img src={part2} alt="" />
        <br/>
        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Act 3: Elevating Creativity with an Elevator System
        </p>

        <p className="text-xl md:text-xl md:p-2">
          The grand finale! I designed an elevator system on Zybo Z7. Imagine it
          like a digital elevator going up and down. It had 4 floors, emergency
          features, and even a display showing the current status. The real
          challenge? Making the Zybo Z7 patiently wait for 20 seconds in case of
          an emergency. It took time to get the rhythm right, understanding how
          the clock ticks and frequencies play a role.
        </p>
        <br/>
        <img src={part3} alt="" />
        <br/>
        <p className="text-xl md:text-xl md:p-2">
        The Part 3 testbench was crucial for checking our Elevator Controller. First, we tested emergencies to ensure quick response during critical situations. After that, we checked how well the elevator moved between floors: zero to first, then from first to second, and finally from second to third. We observed its performance in making these sequential floor transitions. Later, we reversed the process, watching it go from the third floor back to the second, then the second to the first, and finally from the first back to the zero. This testing helped us make sure our design works well in different situations.

        </p>
        <p className="text-xl md:text-xl md:p-2">
          In this digital adventure, Zybo Z7 became my partner in crime,
          revealing the secrets of VHDL and FSMs. Each challenge turned into a
          lesson, deepening my understanding of digital design. As the digital
          curtain falls, this VHDL project not only equipped me with digital
          design skills but also sparked creativity. The dance of logic and
          imagination on Zybo Z7 becomes a foundation for future digital
          explorations. The journey continues, promising new possibilities in
          this ever-expanding digital wonderland! 🎩✨
        </p>
        
      </div>
    </div>
  );
};

export default elevator;
