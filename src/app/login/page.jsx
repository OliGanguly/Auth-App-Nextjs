"use client";
import Link from "next/link";
import React, { useState } from "react";
//new version
import { useRouter } from "next/navigation";
// import {axios} from "axios";

export default function LoginPage(){
    const [user,setUser]=useState({
        email:" ",
        password:"***",
        
    })
  const onLogin = async ()=>{
    console.log(user)
  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-800">
        <h1 className="text-lg text-white pb-2">Login</h1>
        <hr/>
         
       
   <div>
   <div className="w-full max-w-xs">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
   
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input 
      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="email" 
      type="email" 
      placeholder="Enter Your valid mail-id"
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      />
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input 
      className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="******************"
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button 
      className="bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      onClick={onLogin}
      >
        Login
        
      </button>
      <Link href="/signup" className="inline-block align-baseline font-bold text-sm text-slate-800 hover:text-blue-800" >signup</Link>
      
     
    </div>
  </div>
  <p className="text-center text-gray-500 text-xs">
    &copy;Next js project by Oli
  </p>
</div>
   </div>

      </div>




        
    )
}