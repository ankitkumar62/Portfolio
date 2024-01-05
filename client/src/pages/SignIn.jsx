import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; 
import Transition from "../components/Transition";
export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
    {/* <AnimatePresence mode="wait">
      <div> */}
        {/* <motion.div>
        <Transition />
        </motion.div> */}
        <div className="z-0 shadow-2xl shadow-indigo-500/100 brightness-90 border p-3 max-w-sm mx-auto m-40 rounded-xl sm:max-w-md">
      <h1 className="select-none text-yellow-600 text-2xl text-center my-6">
        SignIn
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" sm:ml-5 rounded flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg max-w-sm hover:sm:scale-105"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg max-w-sm hover:sm:scale-105"
          required
        />
        <button
          disabled={loading}
          className="text-white bg-blue-600 h-12 rounded-lg hover:opacity-95 disabled:opacity-85 max-w-sm hover:sm:scale-105 uppercase"
          
        >
          {loading ? "Loading..." : "SignIn"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 p-3">
        <p className="text-white ">Don't have a account?</p>
        <Link to={'/sign-up'}>
          <span className="text-blue-500 ">SignUp</span>
        </Link>
      </div>
    </div>
      {/* </div>
    </AnimatePresence> */}
   

    
    </>
  );
}
