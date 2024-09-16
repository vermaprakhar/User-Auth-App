import React from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const formHandler = async(e) => {
      e.preventDefault();
      await axios.post("http://localhost:3000/api/v1/user/login",
      {
        email,password
      },
      {
        headers:{"Content-Type":"application/json"}
      }).then(res => {
        console.log(res);
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
        navigate("/profile",{state:{...res?.data?.user}});
      }).catch(err => {
        console.log(err);
        toast(err?.response.data.msg);
      })
  }
    return (
      <>
      <div className='h-screen flex items-center justify-center bg-[#1c1c1c] bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500  flex-col'>
         <h1 className='font-bold text-2xl font-serif text-white'>Register Now</h1>
        <form onSubmit={formHandler} className='flex flex-col rounded-lg py-10 px-10  gap-2 shadow-2xl'>
           <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Email</label>
           <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg text-white font-semibold' />
           <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Password</label>
           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
           <p className='text-white font-semibold'>Don't have an account ? <Link to={"/singup"}><span className='text-white font-semibold underline'>Register</span></Link></p>
           <button className='bg-black text-white font-bold px-5 py-2 rounded-full' type='submit'>Submit</button>
        </form>
      </div>
      <ToastContainer/>
      </>
    )
}

export default SignIn;