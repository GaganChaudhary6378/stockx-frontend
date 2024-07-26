import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const MarketCoinBox = ({ image, symbol, current_price, id, isActive, coinName , preferenceArray}) => {
  
  
  const [isSelected, setIsSelected] = useState(false);
  console.log(preferenceArray);
  async function handleClick() {
    const res = await fetch(`http://localhost:8001/api/v1/users/${coinName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "66a2a8e4acd1c2bd7dce11a1"
      }),
    })

    const data = await res.json();
    if (data.success) {
      setIsSelected(!isSelected);
    }
    console.log(data);
  }

  
  return (
    <div className={`h-16 my-1 items-center justify-center rounded-[5px] pt-2 ${isActive ? 'bg-violet-600' : ''}`}>
      <div className="flex justify-between">
        <div className="flex pl-2 h-full items-center">
          <img
            src={image}
            className="w-[35px] h-[35px] mr-2"
            alt="Logo"
          />
          <div>
            <div>{symbol.toUpperCase()}</div>
            <div>{id}</div>

            <div></div>
          </div>

        </div>
        <div className='flex flex-row'>
          <div className="pr-4 h-full items-center text-center">${current_price}</div>
          {!isSelected ? <FaRegStar className={`hover:cursor-default`} onClick={handleClick} /> : <FaStar onClick={handleClick} className='text-yellow-300 hover:cursor-default' />}
        </div>

      </div>
    </div>
  );
};

export default MarketCoinBox;
