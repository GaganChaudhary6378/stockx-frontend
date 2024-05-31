import React from "react";
import Navbar from "@/components/navbar/nav";
import Landing from "@/components/Landing/landing";
import Feauture from "@/components/feautures/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative w-screen">
        <div className="flex items-center justify-center bg-[#101828]">
          <Landing />
        </div>
        <div className="h-64 bg-white">
          <Feauture />
        </div>
        <img
          src="/assets/images/landing/dash.svg"
          alt="Shared Image"
          className="absolute top-[48%] left-1/2 transform -translate-x-1/2 w-[1194px] h-[776px]"
          style={{ clipPath: "inset(0 0 0 0)" }} // Adjust clipPath if needed
        />
      </div>
    </div>
  );
}
