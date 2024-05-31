import React from "react";

export default function SignIn() {
    return (
        <div className="space-y-5 flex flex-col items-start ">
            <h2 className="font-bold text-white text-3xl">Welcome Back</h2>
            <p className="font-thin text-white">Enter your credentials to access your account</p>

            <div>
                <div className="space-y-3">
                    <p className="text-white">Email</p>
                    <input type="email" className=""/>
                </div>
            </div>
        </div>
    )
}