// src/Components/Login.js
import React from "react";
import img from '../assets/no-projects.png'
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  let navigate = useNavigate()

  const handelloginButton=()=>{
    navigate("/Home")

  }
  const handelRegister=()=>{

  }

   
  return (


    
    <section className="  w-2/3 rounded-md flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
      <div className="md:w-1/5  max-w-sm">
        <img
          src={img}
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3  max-w-sm">
       
        
        <input
          className="text-sm w-full px-4 py-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full mt-4 px-4 py-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-stone-600 hover:text-stone-700 hover:underline hover:underline-offset-4"
           
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-stone-600 hover:bg-stone-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handelloginButton}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer   "
            onClick={()=>{
              navigate("/signup")
            }}
          >
            Register
          </a>
        </div>
      </div>
    </section>
    
    
  );
};

export default SignUp;