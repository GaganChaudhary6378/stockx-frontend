import React from "react";
import Image from "next/image";
const companies = [
    {
        id: 1,
        name: 'FORTUNE',

    },
    {
        id: 2,
        name: 'Forbes',
    },
    {
        id: 3,
        name: 'Invest & Detroit',
    },
    {
        id: 4,
        name: 'Robinhood',
    }
]
export default function Feauture() {
    return (
        <div className="bg-[#1D2939] min-h-screen pt-[30rem] flex flex-col justify-center items-center pb-10">
            <div className="text-white text-[24px] font-bold leading-4">We Featured on popular Partner like</div>
            <div className="flex flex-row mt-16 space-x-7">
                {companies.map((item, index) => {
                    return (
                        <div key={item.id} className="hover:cursor-pointer hover:bg-[#4E31B6] hover:border-[#613DE4] text-white font-bold flex text-center justify-center rounded-md items-center h-[120px] w-[275px] border border-solid-[2px] border-[#475467]">
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="text-center text-white mt-16 space-y-4">
                <h3 className="text-4xl font-bold">Accessible to Anyone</h3>
                <div className="space-y-1 font-thin">
                    <p>Lightning fast transaction.Buy and sell with ease and peace of mind.</p>
                    <p>Invest in cryptocurrency today with just a few clicks</p>
                </div>
            </div>


            <div className="h-[40rem] w-[75rem] mt-16">
                <img src="/app.svg" alt="App Image" className="h-full" />
            </div>

        </div>
    )
}