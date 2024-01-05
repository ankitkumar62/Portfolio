import Transition from "../components/Transition";
import { AnimatePresence, motion } from "framer-motion";
import About from "./About";
import Myprojact from "./Myprojact";
import Dash from "../components/Dash";
import Contact from '../components/contact'
export default function Home() {
 
  return (
    <>
      <AnimatePresence>
        <div>
          <motion.div>
            <Transition />
          </motion.div>
        </div>

       <Dash/>

        <div className="relative top-[150px] w-full sm:mt-[25px] text-center">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto type sm:ml-36">
            <About />
          </div>
        </div>

        <div className="relative top-[300px]">
          <h1 className="text-center text-4xl font-bold">My Projacts</h1>
          <Myprojact />
        </div>

         <div className="relative top-[300px] xl:top-[370px] xl:left-[100px] overflow-x-hidden mt-[150px]">
          <div className="relative top-32 text-left text-2xl ml-20 font-bold">
          <h1>Let's connect</h1>
          <p className="xl:max-w-[400px] max-w-[320px] text-[20px]">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          </div>
          <Contact/>
         
        </div> 
      </AnimatePresence>
    </>
  );
}
