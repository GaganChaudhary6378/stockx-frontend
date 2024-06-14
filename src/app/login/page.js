'use client'

import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";

import React from "react";
import { useState } from "react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState();
    const [visible, setVisible] = useState(false);

    console.log(email, "email");
    console.log(password, "pass");

    const obj = {
        email: email,
        password: password,
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="w-1/2 bg-signUp">

            </div>
            <div className="w-1/2 flex justify-center items-center bg-[#1D2939]">
                <div className="w-[516px] h-[512px] bg-transparent flex flex-col justify-center items-start">
                    {/* Tabs */}
                    <div className="w-full h-fit bg-[#101828] rounded-md p-2 text-white font-bold text-[16px]">
                        <div className="">
                            <button className={`${index == 0 ? 'bg-[#613DE4]' : 'border border-solid-[8px] border-[#475467] '} w-1/2 h-9 rounded-l-md`} onClick={(e) => setIndex(0)}>Sign In</button>
                            <button className={`${index == 1 ? 'bg-[#613DE4] ' : 'border border-solid-[8px] border-[#475467]'} w-1/2 h-9 rounded-r-md`} onClick={(e) => setIndex(1)}>Sign Up</button>
                        </div>

                    </div>
                    <div className="mt-6 w-full">
                        {index == 0 ? (
                            <div className="space-y-5 flex flex-col items-start w-full">
                                <h2 className="font-bold text-white text-3xl">Welcome Back</h2>
                                <p className="font-thin text-white">Enter your credentials to access your account</p>

                                <div className="space-y-3 w-[516px]">
                                    <div className="space-y-3">
                                        <p className="text-white">Email</p>
                                        <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white">
                                            <input type="email" placeholder="username@gmail.com" className="w-full outline-none bg-transparent" onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-white">Password</p>
                                        <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white flex flex-row justify-between items-center">
                                            <input type={`${visible == false ? 'password' : 'text'}`} placeholder="Enter your password" className="w-full outline-none bg-transparent" onChange={(e) => setPassword(e.target.value)} />
                                            {visible == false ? <BiSolidHide onClick={() => setVisible(!visible)} className="cursor-pointer" /> : <BiSolidShow onClick={() => setVisible(!visible)} className="cursor-pointer" />}
                                        </div>
                                        <p className="text-[#613DE4] cursor-pointer">Forgot Password?</p>
                                    </div>

                                    <button className="bg-[#613DE4] rounded-md w-full text-white h-fit p-2">Get started</button>

                                    <div className="text-white text-center">or</div>
                                    <button className="bg-[#101828] rounded-md w-full text-white h-fit p-2 flex flex-row gap-4 justify-center items-center"><FaGoogle />Sign in with Google</button>

                                </div>
                            </div>

                        )
                            : (

                                <div className="space-y-5 flex flex-col items-start w-full">
                                    <h2 className="font-bold text-white text-3xl">Get Started Now</h2>


                                    <div className="space-y-3 w-[516px]">
                                        <div className="space-y-3">
                                            <p className="text-white">Email</p>
                                            <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white">
                                                <input type="email" placeholder="username@gmail.com" className="w-full outline-none bg-transparent" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-white">Password</p>
                                            <div className="border border-solid-[8px] border-[#475467] w-full p-2 text-white flex flex-row justify-between items-center">
                                                <input type={`${visible == false ? 'password' : 'text'}`} placeholder="Enter your password" className="w-full outline-none bg-transparent" onChange={(e) => setPassword(e.target.value)} />
                                                {visible == false ? <BiSolidHide onClick={() => setVisible(!visible)} className="cursor-pointer" /> : <BiSolidShow onClick={() => setVisible(!visible)} className="cursor-pointer" />}
                                            </div>

                                        </div>

                                        <button className="bg-[#613DE4] rounded-md w-full text-white h-fit p-2">Get started</button>

                                        <div className="text-white text-center">or</div>
                                        <button className="bg-[#101828] rounded-md w-full text-white h-fit p-2 flex flex-row gap-4 justify-center items-center"><FaGoogle />Sign in with Google</button>

                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}