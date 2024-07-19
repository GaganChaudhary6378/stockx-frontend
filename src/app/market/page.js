"use client";
import React, { useEffect, useRef, useState } from 'react';
import MarketSideBar from '@/components/MarketSideBar';
import { useSelector } from 'react-redux';
import TradingViewWidget from '@/components/TradingViewWidget';

function TradingViewChart() {
    const container = useRef();
    const [selectedCoinId, setSelectedCoinId]= useState("BTC")
    const store= useSelector((store)=> store)
    console.log("store", store)
    useEffect(() => {
        console.log("coin id",selectedCoinId)
        setSelectedCoinId(store?.coin?.symbol?.toUpperCase());
    }, [store?.coin?.symbol]);

    
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
                "width": "880",
                "height": "410",
                "symbol": "${selectedCoinId}",
                "interval": "1",
                "timezone": "Etc/UTC",
                "theme": "dark",
                "style": "1",
                "locale": "en",
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
            }`;
        container.current.appendChild(script);

        return () => {
            container.current.removeChild(script);
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "400px", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "400px", width: "100%" }}></div>
        </div>
    );
}

function Market() {
   
    return (
        <div className="bg-[#1D2939] text-white min-h-screen 2xl:flex">
            <div className="w-full 2xl:w-[350px]">
                <MarketSideBar page="market" />
            </div>
            <main className="flex-1 p-5">
                <header className="flex justify-between items-center mb-10">
                    <h1 className="text-2xl">Today News</h1>
                    <div className="flex">
                        <div className=" px-6 bg-violet-600 cursor-pointer mx-1 py-2 rounded-[5px]">Home</div>
                        <div className="border cursor-pointer border-gray-600  px-6 py-2 mx-1 rounded-[5px]">Wallet</div>
                    </div>
                </header>
                <section className="mb-4 2xl:flex">
                    <div className="border border-gray-500 my-2 p-5 rounded-lg mx-1">
                        <div className="flex justify-between">
                            <h2 className="text-[16px] mb-2">US WASDE Report</h2>
                            <p className="text-gray-400">01:27:04</p>
                        </div>
                        <p className="text-gray-400 text-[13px]">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="border border-gray-600 p-5 rounded-lg mx-1">
                        <div className="flex justify-between">
                            <h2 className="text-[16px] mb-2">US WASDE Report</h2>
                            <p className="text-gray-400">01:27:04</p>
                        </div>
                        <p className="text-gray-400 text-[13px]">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </section>
                <TradingViewChart />
                <section className="border border-gray-600 p-5 rounded-lg text-gray-400 mt-5">
                    <div className="flex border-b-[1px] py-2">
                        <div className="w-[150px] text-[16px] font-bold">
                            Recommendation:
                        </div>
                        <div className="flex justify-evenly w-full text-[14px]">
                            <div>Command</div>
                            <div>Add</div>
                        </div>
                    </div>
                    <div className="flex border-b-[1px] py-2">
                        <div className="w-[150px] text-[16px] font-bold">Entry Point:</div>
                        {/* <div className="flex justify-evenly w-full text-[14px]">
                            <div className="justify-self-start">{coins[0]?.low_24h}</div>
                        </div> */}
                    </div>
                    <div className="flex border-b-[1px] py-2">
                        <div className="w-[150px] text-[16px] font-bold">Take Profit:</div>
                        <div className="flex justify-evenly w-full text-[14px]">
                            <div>Command</div>
                            <div>Add</div>
                        </div>
                    </div>
                    <div className="flex border-b-[1px] py-2">
                        <div className="w-[150px] text-[16px] font-bold">Stop Loss:</div>
                        <div className="flex justify-evenly w-full text-[14px]">
                            <div>Command</div>
                            <div>Add</div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button className="mt-5 bg-purple-500 w-[75px] rounded-[5px] py-2">
                            Trade
                        </button>
                    </div>
                </section>
            </main>
            <aside className="2xl:w-80 flex-col justify-center bg-[#101828] ">
                <div className="mx-5 mt-5 border border-gray-600 py-2 pl-4 mb-4">
                    User Name
                </div>
               <div className="w-full flex justify-center">
                <TradingViewWidget width={250} height={850}/>
               </div>
            </aside>
        </div>
    );
}

export default Market;
