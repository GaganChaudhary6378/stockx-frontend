import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

export default function Profile() {
    return (
        <div className="flex flex-row justify-center bg-[#1D2939] w-screen h-fit">
            {/* sidebar componet */}
            <div>
                {/* top bar */}
                <div className="flex flex-row justify-between items-center w-screen p-4">
                    {/* name */}
                    <div className="flex flex-row gap-5 justify-center items-center">
                        <div className="w-14 h-14">
                            <img src="https://imgs.search.brave.com/oZMjDiGSkwe4JfBU1rseEt5PxeELbQWHhff9qEHJVbA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVtYW5zZWN1cml0/eS5jb20vaHViZnMv/SHVtYW5fSG9tZXBh/Z2VfQWNjb3VudHMt/bWluLmpwZw" alt="user image" className="w-14 h-14 object-fill rounded-md" />
                        </div>
                        <div className="text-[32px] text-white font-semibold">John Johnson</div>
                    </div>
                    {/* search and alert */}
                    <div className="flex flex-row justify-center items-center gap-6">
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md">
                            <input type="text" placeholder="Search" className="outline-none bg-inherit text-white" />
                            <IoIosSearch className="text-white hover:cursor-pointer" />
                        </div>
                        <div className="flex justify-between items-center hover:cursor-pointer border border-solid-2px border-[#475467] p-2 rounded-md">
                            <IoIosNotifications className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="h-1 w-screen bg-[#475467] items-center justify-center flex"></div>
                {/* 1st row */}
                <div className="p-4 flex flex-row justify-between gap-36">
                    <div className="flex flex-col justify-start items-start gap-1 text-white w-1/2">
                        <h2 className="text-2xl font-bold">Add your email</h2>
                        <p>This info needs to be accurate with your ID document.</p>
                        <p>Email</p>
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                            <input type="text" placeholder="user@gmail.com" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1 text-white w-1/2">
                        <h2 className="text-2xl font-bold">Change email</h2>
                        <p>The confirmation code has been sent to your new email</p>
                        <p>New Email</p>
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                            <input type="text" placeholder="user@gmail.com" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                </div>
                {/* 2nd row */}
                <div className="p-4 flex flex-row justify-between gap-36">
                    <div className="flex flex-col justify-start items-start gap-1 text-white w-1/2">
                        <h2 className="text-2xl font-bold">Change password </h2>
                        <p>Сurrent password</p>
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                            <input type="text" placeholder="**********" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-start gap-1 text-white w-1/2">
                        <p>New Password</p>
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                            <input type="text" placeholder="**********" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="p-4 flex flex-row justify-between gap-36">
                    <div className="flex flex-col justify-center items-start w-1/2 gap-2">
                        <div className="flex flex-row justify-center items-end gap-16 w-full">
                            <div className="flex flex-col justify-start items-start gap-1 text-white w-full">
                                <h2 className="text-2xl font-bold">Home Address</h2>
                                <p>Address Line</p>
                                <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                                    <input type="text" placeholder="House number and street name" className="outline-none bg-inherit text-white w-full" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-1 text-white w-1/2">
                                <p>Postcode</p>
                                <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                                    <input type="text" placeholder="Ex: 0000" className="outline-none bg-inherit text-white w-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1 text-white w-full">
                            <p>City</p>
                            <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                                <input type="text" placeholder="City, State" className="outline-none bg-inherit text-white w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-start gap-1 text-white w-1/2">
                        <p>Country of residence</p>
                        <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                            <input type="text" placeholder="USA" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                </div>
                {/* 4th row */}
                <div className="p-4 flex flex-row justify-between gap-36">
                    <div className="flex flex-col justify-center items-start w-1/2 gap-2">
                        <div className="flex flex-row justify-center items-end gap-16 w-full">
                            <div className="flex flex-col justify-start items-start gap-1 text-white w-full">
                                <h2 className="text-2xl font-bold">Add your personal info</h2>
                                <p>Full Name</p>
                                <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full">
                                    <input type="text" placeholder="Mr. John Doe" className="outline-none bg-inherit text-white w-full" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-start items-start gap-1 text-white w-full">
                            <p>Username</p>
                            <div className="flex flex-row justify-between items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full gap-2">
                                <input type="text" placeholder="username" className="outline-none bg-inherit text-white w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end items-start gap-1 text-white w-1/2">
                        <p>Date of birth</p>
                        <div className="flex flex-row justify-center items-center border border-solid-2px border-[#475467] p-1 rounded-md w-full gap-3">
                            <SlCalender className="text-white" />
                            <input type="text" placeholder="MM/DD/YYYY" className="outline-none bg-inherit text-white w-full" />
                        </div>
                    </div>
                </div>

                <div className="text-white font-bold gap-8 flex justify-end items-center text-center p-4">
                    <button className="p-2 border border-solid-[2px] border-[#613DE4] rounded-md">Return to Home Screen</button>
                    <button className="pt-2 pb-2 pl-4 pr-4 bg-[#613DE4] rounded-md">Apply</button>
                </div>
            </div>
        </div>
    )
}