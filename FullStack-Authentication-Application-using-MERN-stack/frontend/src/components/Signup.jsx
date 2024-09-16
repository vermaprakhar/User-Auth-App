import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");
  const [password,setPassword] = useState("");
  const [avatar,setAvatar] = useState("");
  const [designation,setDesignation] = useState("");
  const [phone,setPhone] = useState("");
  const [user,setUser] = useState({});
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("name",name);
  formData.append("email",email);
  formData.append("age",password);
  formData.append("password",password);
  formData.append("phone",phone);
  formData.append("designation",designation);
  formData.append("avatar",avatar);

  const avatarHandler = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  }

  const formHandler = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/v1/user/register",formData,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    },
    ).then((res) => {
      console.log(res);
      setUser(res.data);
      toast.success(res?.data?.message);
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
      setAvatar("");
      navigate("/profile",{state:{...res?.data?.user}});
    }).catch((err) => {
      console.log("err",err?.response?.data?.message);
      toast.error(err.response.data.message);
    })
  }
  return (
    <>
    <div className='h-screen flex items-center justify-center bg-[#1c1c1c] bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500  flex-col'>
       <h1 className='font-bold text-2xl font-serif text-white'>Register Now</h1>
      <form onSubmit={formHandler} className='flex flex-col rounded-lg py-10 px-10  gap-2 shadow-2xl'>
         <label htmlFor="name" className='text-white text-xl font-bold font-sans'>Name</label>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-lg placeholder:text-lg' />
         <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Email</label>
         <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
         <label htmlFor="" type="age" className='text-white text-xl font-semibold font-sans'>Age</label>
         <input type="text" value={age} onChange={(e) => setAge(e.target.age)}  placeholder="Enter your age..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
         <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Password</label>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
         <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Phone</label>
         <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  placeholder="Enter your password..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
         <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Desigantion</label>
         <input type="desination" value={designation} onChange={(e) => setDesignation(e.target.value)}  placeholder="Enter your password..." className='w-full pr-10 pl-2 bg-transparent placeholder:text-white border-2 border-white py-2 rounded-md placeholder:text-lg' />
         <label htmlFor="name" className='text-white text-xl font-semibold font-sans'>Avatar</label>
         <input type="file" onChange={avatarHandler} className='bg-white text-black rounded-lg py-1 px-1'/>
         <p className='text-white font-semibold'>Already registered ? <Link to={"/signin"}><span className='text-white font-semibold underline'>Login</span></Link></p>
         <button className='bg-black text-white font-bold px-5 py-2 rounded-full' type='submit'>Submit</button>
      </form>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Signup;