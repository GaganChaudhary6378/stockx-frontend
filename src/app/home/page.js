"use client";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import SideBar from "@/components/SideBar";
import fetchCoins from "@/components/fetchCoins";
import Graph from "@/components/Chart";

function Page() {

  const [data, setData] = useState();
  const [coins, setCoins] = useState([])
 

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const coins = await fetchCoins();
        console.log("coins", coins)
        setCoins(coins)
        console.log("bit coin price", coins[10]?.sparkline_in_7d)
        setData(coins[0]?.sparkline_in_7d);
      };
      fetchData();
    }
  }, [data]);


  return (
    <div className="bg-[#1D2939] text-white min-h-screen flex">
      <div className="w-64">

      <SideBar page="home" />
      </div>
      <main className="flex-1 p-5">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl">Today News</h1>
          <div className="flex">
            <div className=" px-6 bg-violet-600 cursor-pointer mx-1 py-2 rounded-[5px]">Home</div>
            <div className="border cursor-pointer border-gray-600  px-6 py-2 mx-1 rounded-[5px]">Wallet</div>
          </div>
        </header>
        <section className="mb-4 flex">
          <div className="border border-gray-500 p-5 rounded-lg mx-1">
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
        <section>
          <section className="border border-gray-600 rounded-lg pl-2 ml-2 h-[400px] py-4 mb-4 w-full">
            {data && <Graph chartPrices={data?.price}/>}
          </section>
        </section>
        <section className="border border-gray-600 p-5 rounded-lg text-gray-400">
          <div className="flex border-b-[1px] py-2">
            <div className="w-[150px] text-[16px] font-bold">Coin:</div>
            <div className="flex justify-evenly w-full text-[14px]">
              <div>{coins[0]?.name}</div>
              <div>{coins[0]?.current_price}</div>
            </div>
          </div>
          <div className="flex border-b-[1px] py-2">
            <div className="w-[150px] text-[16px] font-bold">Timeframe:</div>
            <div className="flex justify-evenly w-full text-[14px]">
              <div>{coins[0]?.high_24h}</div>
              <div>{coins[0]?.low_24h}</div>
            </div>
          </div>
          <div className="flex border-b-[1px] py-2">
            <div className="w-[150px] text-[16px] font-bold">
              Recomendation:
            </div>
            <div className="flex justify-evenly w-full text-[14px]">
              <div>Command</div>
              <div>Add</div>
            </div>
          </div>
          <div className="flex border-b-[1px] py-2">
            <div className="w-[150px] text-[16px] font-bold">Entry Point:</div>
            <div className="flex justify-evenly w-full text-[14px]">
              <div className="justify-self-start">{coins[0]?.low_24h}</div>
            </div>
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
      <aside className="w-80 bg-[#101828] p-5">
        <div className="w-full border border-gray-600 py-2 pl-4 mb-4">
          User Name
        </div>
        <header className="flex items-center mb-5">
          <h2 className="text-xl font-bold">Articles List</h2>
          <button className="ml-auto bg-purple-500 py-1 px-3 rounded-full">
            Filter
          </button>
        </header>
        <div className="space-y-5">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Gold futures rose in price during American trading
            </h3>
            <p className="text-gray-400 mb-2">20 Oct, 2023 09:22</p>
            <p className="text-gray-400">
              USD index futures, which measure the US dollar against a basket of
              six major currencies...
            </p>
            <button className="mt-3 bg-purple-500 py-1 px-3 rounded-full">
              Read
            </button>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Adobe showed off a color-changing dress
            </h3>
            <p className="text-gray-400 mb-2">Can change colors...</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Twitter begins trading shares on its platform
            </h3>
            <p className="text-gray-400 mb-2">
              You can now view it in real time...
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              The dollar fell ahead of the release of key US data
            </h3>
            <p className="text-gray-400 mb-2">
              Today the dollar fell against...
            </p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              3 Bitcoin wallets from the Satoshi era
            </h3>
            <p className="text-gray-400 mb-2">According to BitInfoCharts...</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Page;
