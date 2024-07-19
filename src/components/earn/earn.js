import React from "react";

export default function Earn() {
    return (
        <div className="flex flex-col justify-center text-center items-center bg-buySell bg-no-repeat w-screen h-full p-12 text-white gap-y-8">
            <div className="2xl:w-[792px] flex flex-col justify-center items-center gap-y-4">
                <div className="font-bold 2xl:text-[45px] text-center overflow-ellipsis 2xl:w-[700px]">
                    Earn more money when you shop.
                </div>
                <div className="font-thin">
                    <p className="2xl:w-[600px] text-[12px] 2xl:text-[16px]">Earn bonus investments by shopping at thousand of top brands - including ones you likely shop at anyway.</p>
                </div>
            </div>
            <div className="h-full">
                <img src="/assets/images/earn/buySell.svg"/>
            </div>
        </div>
    )
}