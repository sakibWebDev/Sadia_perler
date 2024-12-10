"use client"
import { signIn } from "next-auth/react";


import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
        const handlesociallogin = async(provider) =>{
            const response =await signIn(provider)
        }
    
    
  return (
    <div className="flex items-center justify-center space-x-3">
      <button onClick={()=>handlesociallogin('google')}  className="btn  flex items-center justify-center text-green-500">
        <BsGoogle />
      </button>

      <button  className="btn  flex items-center justify-center text-primary">
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;
