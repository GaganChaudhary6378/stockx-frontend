import React, { useEffect, useState } from "react";
import fetchCoins from "./fetchCoins";
import MarketCoinBox from "./MarketCoinBox";
import { useDispatch } from "react-redux";
import { addCoin } from "./store/coinSlice";
import Link from "next/link";
const MarketSideBar = ({ page }) => {
  const [coins, setCoins] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [preferenceArr, setPreferenceArr] = useState([]);
  const dispatch = useDispatch();
  const [coinName, setCoinName] = useState("");
  if (coins?.length > 0) {
    dispatch(addCoin(coins[activeIndex]));
  }

  useEffect(() => {
    const fetchData = async () => {
      const coins = await fetchCoins();
      setCoins(coins);
    };
    fetchData();
  }, []);



  // console.log(preferenceArr);

  return (
    <aside className="w-full h-full bg-[#101828] p-5">
      <div className="flex items-center mb-5">
        <Link href="/"><div className="text-2xl font-bold rounded-sm text-purple-300">
          StockX
        </div>
        </Link>


      </div>
      <section>

        <input
          type="text"
          placeholder="Search your coin"
          className="bg-gray-600 w-full h-[45px] rounded-[5px] pl-4 mt-4 mb-4"
        />
        <div className="h-[750px] overflow-y-scroll no-scrollbar">
          {coins?.length > 0 &&
            coins?.map((coin, index) => (
              <div onClick={() => handleCoinClick(index, coin)} className="cursor-pointer">
                <MarketCoinBox
                  key={index}
                  index={index}
                  coinName={coinName}
                  activeIndex={activeIndex}
                  isActive={activeIndex === index} // Pass isActive prop to determine if this box is active
                  {...coin}
                />

              </div>
            ))}
        </div>
      </section>
    </aside>
  );
};

export default MarketSideBar;
