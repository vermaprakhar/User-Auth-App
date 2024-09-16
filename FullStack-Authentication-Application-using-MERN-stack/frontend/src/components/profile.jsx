import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
    const {state} = useLocation();
    console.log("profile",state);
    useEffect(() => {},[])
    return (
        <div className="w-full h-screen bg-[#1c1c1c]
        bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 flex-col">
            <header className="flex justify-between px-6 py-2 items-center backdrop-blur-xl bg-white/30 backdrop-brightness-105 h-[7vh]">
                <div className="font-sans font-semibold text-black">
                    <h1>Hello User !!</h1>
                </div>
                <Link to={"/"}><button className="border-2 border-white text-white font-semibold px-5 py-2 rounded-md bg-black">Logout</button></Link>
            </header>
            <div className="flex justify-center items-center h-[90vh]">
                <div className="min-w-[300px] h-auto rounded-xl shadow-xl flex flex-col py-5 px-2 bg-black">
                    <div className="w-full flex justify-center item-center">
                        <div className="rounded-full w-[110px] h-[110px] bg-black flex items-center justify-center p-1 item-center bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500">
                            <img src={state?.avatar} alt="" className="rounded-full w-[100px] h-[100px]" />
                        </div>
                    </div>
                    <div className="w-full py-4 px-2 h-full flex justify-center flex-col text-white font-mono font-semibold">
                        <div className="flex gap-1">
                            <h1>Name : </h1>
                            <p>{state?.name}</p>
                        </div>
                        <div className="flex gap-1">
                            <h1>Email : </h1>
                            <p>{state?.email}</p>
                        </div>
                        <div className="flex gap-1">
                            <h1>Age : </h1>
                            <p>{state?.age}</p>
                        </div>
                        <div className="flex gap-1">
                            <h1>Phone : </h1>
                            <p>{state?.phone}</p>
                        </div>
                        <div className="flex gap-1">
                            <h1>Designation : </h1>
                            <p>{state?.designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;