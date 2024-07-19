import React from "react";

export default function Join() {
    return (
        <div className="bg-[#1D2939] h-fit flex flex-col justify-center items-center p-10 w-screen">
            <div className="w-[1394px] h-fit flex flex-col items-center space-y-8">
                <div className="flex flex-col gap-y-3 text-white text-center w-[326px]">
                    <p className="text-3xl font-bold">Join Our Team</p>
                    <p className="font-thin">Each author receives dividents from StockAI and subscribers</p>
                </div>
                <div className="bg-[#613DE4] w-[350px] 2xl:flex 2xl:flex-col justify-center items-center 2xl:w-full">
                    <div className="2xl:w-1/2 2xl:flex px-8 py-4">
                        <div className="2xl:overflow-ellipsis flex flex-col mb-4 text-white space-y-6">
                            <p className="2xl:text-4xl text-[20px] font-bold 2xl:tracking-wider text-center">Our authors use all StockAI tools for Free</p>
                            <p className="font-thin text-[15px] text-center 2xl:text-xl"> Send your resume right now and our managers will contact you.</p>
                            <button className="p-2 border flex justify-center items-center border-white border-solid-[2px] rounded-md">Send a Request</button>
                        </div>
                    </div>
                    <div className="w-[330px] pb-4 2xl:w-1/2  flex justify-center items-center">
                        <img className="w-[200px]"  src="/assets/images/join/join.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}