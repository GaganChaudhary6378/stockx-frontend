import React from "react";


export default function Landing() {
    return (
        <div className="flex flex-col text-center items-center bg-hero bg-no-repeat 2xl:w-[1300px] mb-9 2xl:h-[72rem] h-[40rem]">
            <div className="2xl:w-[714px] h-fit mt-14">
                <h2 className="2xl:text-wrap text-white text-wrap text-[25px] mx-8 font-bold 2xl:text-[50px]">
                    Quickly Grow Your Money with StockX.
                </h2>

            </div>
            <div className="w-fit flex items-center flex-col text-white font-thin mt-10">
                <p className="2xl:text-wrap text-[16px] 2xl:text-[25px] mx-8 ">Stockx is the easiest place to buy and sell your assets.</p>
                <p className="2xl:text-wrap text-[16px] 2xl:text-[25px] mx-8">Buy Bitcoin, Ethereum and other digital assets within minutes.</p>

            </div>

            <div className="h-[50px] flex flex-row justify-between items-center 2xl:w-96 border border-solid-[16px] border-[#1D2939] rounded-md p-2 mt-10">
                <input type="email" placeholder="Enter your Email" className="placeholder:text-[#9CA3AF] outline-none focus:outline-none text-start bg-transparent text-white w-60"/>
                <button className="bg-[#613DE4] rounded-md p-2 text-white font-bold h-9 text-center flex justify-center items-center">Get started</button>
            </div>

            <p className="text-white font-thin mt-8">No waitlist - available for download now</p>

        </div>
    )
}