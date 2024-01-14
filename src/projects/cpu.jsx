import React from "react";
import custom from "../assets/Cpu/custom.PNG";
import alu from "../assets/Cpu/alu.PNG";
import Combined from "../assets/Cpu/combined.PNG";
import cpu_interface from "../assets/Cpu/cpu_interface.PNG";
import mux from "../assets/Cpu/mux.PNG";
import hierarchy from "../assets/Cpu/hierarchy.PNG";


const elevator = () => {
  return (
    <div
      name="about"
      className=" font-thin w-full h-auto p-2 md:p-10 text-gray-900 bg-white dark:bg-gray-800 dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8">
          <p className="font-style  text-2xl md:text-4xl md:pl-2 md:p-5 font-bold inline border-black dark:border-gray-500">
            Building My Own 8-Bit CPU: A Hardware Adventure
          </p>
        </div>

        <p className=" text-xl md:text-xl md:mt-3 md:p-2">
          So, I decided to make my own 8-bit CPU. It's like a tiny brain that
          can follow 16 different commands. Let me break down how I put it
          together!
        </p>
        <br/>
        <img src={cpu_interface} alt="" />
        <br/>
        <p className=" text-xl md:text-xl md:mt-3 md:p-2">
          First of all, I was supposed to make the individual components of the
          datapath, and then group them together into a single file of datapath.
          The individual components included the multiplexer, arithmetic logic
          unit, register file, tri-state-buffer and accumulator. The explanation
          of each of the components is given below. Initially, I tested each of
          the components separately, and then I did a combined test of all the
          components together in the datapath file.
        </p>
        <p className=" text-xl md:text-xl md:mt-3 md:p-2">
          The datapath starts with the multiplexer, and depending on the mux
          select value, it passes the appropriate value to the accumulator. When
          the acc_write control signal is ‘1’, it reads and stores the output of
          the multiplexer. After that, the value of the accumulator can go to
          three possible components. First, it can go to the register file to
          write/store a value in one of the 8 registers. Second, it goes to the
          ALU and acts as one of the inputs for the ALU. Third, it also goes to
          the tri-state buffer, where depending on the control signal
          ‘output_enable’, it stores the value in the buffer and then further
          displays it on the seven-segment display.
        </p>
        <br />

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Step 1: Creating the Core (DataPath)
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Multiplexer Madness
        </p>
        <p className="text-xl md:text-xl md:p-2">
          The multiplexer chooses from four 8-bit inputs, determining which one
          gets written to the accumulator based on the specifications outlined
          in Table 2. There were 4 possible inputs to the multiplexer, namely
          ALU output, register file output, immediate data and the user input.’
        </p>
        <br/>
        <img src={mux} alt="" />
        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Registers: The Memory Keepers
        </p>
        <p className="text-xl md:text-xl md:p-2">
          The register entity consists of 8 registers each of width 8 bits,
          which makes a total of 8*8 = 64 bits storage in total. Since there are
          8 registers, we need only 3 bits to determine the address of a
          specific register. There’s also a write enable signal, which decides
          whether to read or write in the registers.
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          ALU: Arithmetic Wizardry
        </p>
        <p className="text-xl md:text-xl md:p-2">
          The role of the Arithmetic Logic Unit (ALU) is to perform arithmetic
          and logic operations on the data. It receives input from the register
          file and accumulator, which is then processed according to the
          instruction provided by the program, and then sends the results back
          for further use or storage. The ALU designed in lab 3, consisted of a
          total of 8 operations, which are shown in the table below. There were
          3 bits dedicated for the alu select, and 2 bits to determine the value
          of bits_rotate.
        </p>
        <br/>
        <img src={alu} alt="" />
        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Tri-State Buffer
        </p>
        <p className="text-xl md:text-xl md:p-2">
          The tri-state buffer consists of an enable signal, and when activated,
          it directs the content of the accumulator to be stored in the buffer.
          This buffered information is then showcased to the user through the
          two-digit seven-segment LED display, serving as the CPU's output.
        </p>

        <p className="text-2xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Accumulator: The Heartbeat
        </p>
        <p className="text-xl md:text-xl md:p-2">
          The accumulator is an essential 8-bit register which plays an
          important role in the overall system by working as a bridge between
          the multiplexer and the other components of the datapath. The output
          of the accumulator is distributed to three key components. Firstly, it
          contributes data to the register file. Secondly, it serves as an input
          for the Arithmetic Logic Unit (ALU). Lastly, the accumulator's output
          also goes into the tri-state buffer, enabling the display of CPU’s
          output to the user on the two-digit seven-segment LED display.
        </p>

        <p className="text-xl md:text-xl md:p-2">
          Combining these elements births the DataPath, the computational core
          where the magic unfolds. Simulating the DataPath validates the synergy
          of its components, setting the stage for the CPU's grand performance.
        </p>
        <p className="text-xl md:text-xl md:p-2">
          Datapath is the hardware that performs all the data processing and the
          required operations, for example, ALU, registers, and internal buses.
          It consists of all the 5 individual components, namely ALU,
          multiplexer, Register file, accumulator and tri-state buffer. In the
          datapath file, we instantiate all the components and link the signals
          and ports as required by the design
        </p>
        <br />

        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Step 2: Crafting the Controller
        </p>

        <p className="text-xl md:text-xl md:p-2">
          In next part, I was supposed to complete the design of the controller
          module, which is the brain of the whole CPU. Here, I defined different
          states in the finite state machine, one for each instruction (except
          CSKIP, it takes 2 clock cycles), one for STATE FETCH and one for STATE
          DECODE.
        </p>
        <p className="text-xl md:text-xl md:p-2">
          Firstly, the state machine fetches the instruction from the program
          memory and then decodes it in the next clock cycle. Now, after
          determining the opcode of the instruction, the state machine
          accordingly goes to the next state. After the execution of the
          instruction is over, the state machine again goes to the STATE FETCH
          to fetch the next instruction, and the whole cycle keeps on repeating.
        </p>

        <p className="text-xl md:text-xl md:p-2">
          So, the controller sends the required control signals to the datapath
          module, which then completes the execution of the instruction. There
          are a total of 15 instructions in the instruction set architecture,
          out of which, 13 were given to us in the manual and we were required
          to implement the rest of the 2 instructions. The two custom
          instructions, which we are using are JMPR and CSKIP. Below, we have
          described the implementation of both the instructions in detail.
        </p>
        <br />

        <p className="text-xl md:text-xl md:p-2">
          <b>
            <i>JMPR (Jump Relative) </i>{" "}
          </b>
          <br />
          <br />
          This instruction does a memory jump in the program. If we want to skip
          ahead, then use a positive number; if we need to go back, then use a
          negative number. We use 6 bits for this, where the first bit decides
          the direction (plus or minus), and the other 5 bits tell us how far to
          jump, allowing for a range from -32 to 31 in the memory shift.
        </p>
        <br />

        <p className="text-xl md:text-xl md:p-2">
          <b>
            <i>CSKIP (Conditional SKIP)</i>{" "}
          </b>
          <br />
          <br />
          CSKIP instruction skips the next instruction if the accumulator equals
          the value in register R[rrr], which is specified in the instruction
          binary code. Note that, CSKIP skips the entire next instruction,
          irrespective of its size; for instance, even if the instruction is 16
          bits, the entire instruction is bypassed instead of just skipping one
          memory location of 8 bits. In the CSKIP instruction, we examined the
          opcodes of the next instruction. If the next instruction was 16 bits,
          we advanced by 2 memory locations; for 8-bit instructions, we skipped
          just one memory location.
        </p>

        <br />
        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Step 3: Combining the Datapath and the Controller
        </p>

        <p className="text-xl md:text-xl md:p-2">
          Next I completed the cpu_core design file, which instantiated datapath
          and controller entities. So, cpu_core acts like a top level entity for
          datapath and controller. Then I finished the cpu core testbench and
          cpu core constraint files.
        </p>

        <p className="text-xl md:text-xl md:p-2">
          I defined ‘user_input’ and ‘enter’ values in the cpu core testbench.
          Unlike other testbench files the test program is defined in the
          controller design file. Therefore, I only need two inputs: user input
          only if user input is required by a program defined in controller
          entity and enter value which is required to translate from one state
          to another.
        </p>
        <br/>
        <img src={Combined} alt="" />
        <br/>
        <p className="text-xl md:text-xl md:p-2">
          At last, I created a top level entity, named “cpu_interface”, where I
          instantiated the cpu_core entity and the rest of the code was already
          instantiated. The other entity instantiations included SSD_Driver,
          keypad_detector, keypad_register and output_control. In the constraint
          file, I mapped all the output and input ports defined in the top level
          interface entity.
        </p>
        <br/>
        <img src={hierarchy} alt="" />
        <br/>
        <p className="text-3xl pl-2 p-5 font-bold inline border-black dark:border-gray-500">
          Custom Program: Single Product Inventory Manager
        </p>

        <p className="text-xl md:text-xl md:p-2">
        Our custom program is a <b>Single Product Inventory Management System</b> which stores the current and updated values of the inventory. Our program utilizes all 32 program memory spaces from PM(0) to PM(31), and also includes the custom instructions, namely CSKIP and JMPR. 

        </p>

        <p className="text-xl md:text-xl md:p-2">
          <ul className="list-disc pl-6">
            <li>
              User have to provide input at 9th instruction to choose add/sub (0
              for sub and 1 for add).
            </li>
            <li>
              Next the user have to provide the input 15th (0F) instruction
              (Number of items to add)
            </li>
            <li>
              Next the user have to provide the input 21st (15) instruction
              (Number of items to sub)
            </li>
            <li>
              Next the user have to provide the input 27th (1B) instruction (0
              to continue)
            </li>
          </ul>
        </p>
        <br/>

        <img src={custom} alt="" />

        <br/>

        <p className="text-xl md:text-xl md:p-2">
        The following registers are getting used in the program and their role is mentioned below -:  

          <ul className="list-disc pl-6">
            <br/>
            <li>
                
                Register 0 → Totals items while initialization

            </li>
            <li>
            Register 1 → No. of items to Add

            </li>
            <li>
            Register 2 → No. of items to remove

            </li>
            <li>
            Register 5 → Initialized with 1 
            </li>
            <li>
            Register 7 → Updated inventory value
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default elevator;
