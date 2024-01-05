
import { AnimatePresence, motion } from "framer-motion";
import ParticlesContainer from "./ParticlesContainer";
import ProjactBtn from "./ProjactBtn";
import { fadeIn } from "../variants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
export default function Dash() {
    const [text] = useTypewriter({
        words: ["Ankit Kumar Rai", "Web Developer"],
        typeSpeed: 90,
        delaySpeed: 100,
        delaySpeed: 1000,
        loop: Infinity,
      });
  return (
    <div>
    <div className="w-full sm:mt-[25px]">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto type sm:ml-36 mt-[160px]">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1 bg-gradient-to-br from-indigo-400 via-pink-500 to-red-500 text-transparent bg-clip-text sm:text-left opacity-10 text-4xl sm:text-6xl font-bold  select-none"
        >
          Hello, I'm <br />
          <span className="text-white text-5xl sm:text-7xl font-bold">
            {text}
          </span>
          <Cursor
            cursorBlinking="true"
            cursorColor="White"
            className="h-full"
          />
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-m-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 "
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
          nam! Dolore odio dolor est, nihil sed labore impedit fugiat hic
          veniam inventore cupiditate animi, unde laudantium repudiandae,
          molestiae perspiciatis officia!
        </motion.p>

        <div className="flex justify-center xl:hidden z-30">
          <ProjactBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjactBtn />
        </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-10 bottom-0">
      <div>
        <ParticlesContainer />
      </div>

      {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[997px] max-h-[858px] absolute -bottom-[220px] lg:right-[-1%]"
        >
         
        </motion.div> */}
    </div>
  </div>
  )
}
