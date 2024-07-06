"use client";
import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import SideBar from "@/components/SideBar";
import fetchCoins from "@/components/fetchCoins";
import Graph from "@/components/Chart";
import { PieChart } from "react-minimal-pie-chart";

function Page() {
  const [data, setData] = useState();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const coins = await fetchCoins();
        console.log("coins", coins);
        setCoins(coins);
        console.log("bit coin price", coins[10]?.sparkline_in_7d);
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
        <div>
          <header className="flex justify-between items-center mb-10">
            <h1 className="text-[18px]">Current Balance</h1>
            <div className="flex">
              <div className=" px-6 border border-gray-600  mx-1 py-2 cursor-pointer rounded-[5px]">
                Home
              </div>
              <div className=" bg-violet-600 cursor-pointer px-6 py-2 mx-1 rounded-[5px]">
                Wallet
              </div>
            </div>
          </header>
          <div className="text-[30px] relative bottom-12">$ 24536178</div>
        </div>
        <section className="mb-4 flex">
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
          <section className="border border-gray-600 rounded-lg h-[400px] py-4 pl-4 mb-4 w-full">
            {data && <Graph chartPrices={data?.price} />}
          </section>
        </section>
        <section className="border flex justify-between text-gray-400 border-gray-600 p-5 rounded-lg">
          <div className="w-[250px] h-[200px] border border-gray-600 rounded-sm">
            <div className=" flex justify-between mx-4 mt-4">
              <div> {coins[0]?.name}</div>
              <img src={coins[0]?.image} className="h-[30px] w-[30px]" alt="" />
            </div>
            <div className="ml-4 text-[25px] font-bold">
              $ {coins[0]?.current_price}
            </div>
            <div className="mx-4 flex justify-between">
              <div>$ {coins[0]?.low_24h}</div>
              <div>$ {coins[0]?.high_24h}</div>
            </div>
            <div className="ml-4 text-[25px] font-600">
              $ {coins[0]?.total_volume}
            </div>
            <div className="ml-4 text-[15px] font-600">
              Total Supply:$ {coins[0]?.total_supply}
            </div>
          </div>
          <div className="w-[250px] h-[200px] border border-gray-600 rounded-sm">
            <div className=" flex justify-between mx-4 mt-4">
              <div> {coins[1]?.name}</div>
              <img src={coins[1]?.image} className="h-[30px] w-[30px]" alt="" />
            </div>
            <div className="ml-4 text-[25px] font-bold">
              $ {coins[1]?.current_price}
            </div>
            <div className="mx-4 flex justify-between">
              <div>$ {coins[1]?.low_24h}</div>
              <div>$ {coins[1]?.high_24h}</div>
            </div>
            <div className="ml-4 text-[25px] font-600">
              $ {coins[1]?.total_volume}
            </div>
            <div className="ml-4 text-[15px] font-600">
              Total Supply:$ {coins[1]?.total_supply}
            </div>
          </div>
          <div className="w-[250px] h-[200px] border border-gray-600 rounded-sm">
            <div className=" flex justify-between mx-4 mt-4">
              <div> {coins[2]?.name}</div>
              <img src={coins[2]?.image} className="h-[30px] w-[30px]" alt="" />
            </div>
            <div className="ml-4 text-[25px] font-bold">
              $ {coins[2]?.current_price}
            </div>
            <div className="mx-4 flex justify-between">
              <div>$ {coins[2]?.low_24h}</div>
              <div>$ {coins[2]?.high_24h}</div>
            </div>
            <div className="ml-4 text-[25px] font-600">
              $ {coins[2]?.total_volume}
            </div>
            <div className="ml-4 text-[15px] font-600">
              Total Supply:$ {coins[2]?.total_supply}
            </div>
          </div>
        </section>
      </main>
      <aside className="w-80 bg-[#101828] p-5">
      <div className="w-full border border-gray-600 py-2 pl-4 mb-4">
          User Name
        </div>
        <div className="w-full mb-4">
          <PieChart
            data={[
              { title: "One", value: coins[0]?.total_supply, color: "#E34" },
              { title: "Two", value: coins[1]?.total_supply, color: "#C13Ccc" },
              { title: "Three", value: coins[2]?.total_supply, color: "#6A2" },
              { title: "One", value: coins[3]?.total_supply, color: "#E38627" },
              { title: "Two", value: coins[4]?.total_supply, color: "#C13C37" },
              { title: "Three", value: coins[5]?.total_supply, color: "#6A2135" },
            ]}
          />
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