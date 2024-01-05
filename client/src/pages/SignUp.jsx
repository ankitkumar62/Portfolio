import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email,setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  
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
    <div className="z-0 shadow-2xl shadow-indigo-500/100 brightness-90 border p-3 max-w-sm mx-auto m-40 rounded-xl sm:max-w-md ">
      <h1 className="select-none text-yellow-600 text-2xl text-center my-6">
        SignUp
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" sm:ml-5 rounded flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="focus:caret-indigo-500 border p-3 rounded-lg max-w-sm hover:sm:scale-105  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-indigo-500 invalid:text-indigo-600
          focus:invalid:border-indigo-500 focus:invalid:ring-indigo-500 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg max-w-sm hover:sm:scale-105 peer focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg max-w-sm hover:sm:scale-105 focus:outline-none"
          required
        />
        <button
          disabled={loading}
          className="text-white bg-blue-600 h-12 rounded-lg hover:opacity-95 disabled:opacity-85 max-w-sm hover:sm:scale-105 uppercase"
        >
          {loading ? "Loading..." : "SignUp"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 p-3">
        <p className="text-white ">Already have a account?</p>
        <Link to={'/sign-in'}>
          <span className="text-blue-500 ">SignIn</span>
        </Link>
      </div>
    </div>

    
    </>
  );
}
