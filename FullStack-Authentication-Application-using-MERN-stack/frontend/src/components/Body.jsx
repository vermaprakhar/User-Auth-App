import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className='h-screen flex justify-center items-center gap-5 bg-gradient-to-r from-[#00c6fb] to-[#005bea]'>
        <Link to={"/signin"}><button className='bg-transparent  px-6 py-2 text-xl font-bold rounded-full border-[3px] border-black font-mono'>SignIn</button></Link>
        <Link to={"/singup"}><button className='bg-transparent px-6 py-2 text-xl rounded-full border-[3px] border-black font-mono font-bold'>SignUp</button></Link>
    </div>
  )
}

export default Body