"use client";
import React,{useState} from "react";

const ConversionTemp = ({setFahrenheit,Fahrenheit}) => {

    const conversionTemp = () => {
        setFahrenheit(!Fahrenheit)
    }
  return (
    <div className="w-36 h- mx-auto my-6">
      <button onClick={conversionTemp} className="w-full h-10 bg-[#fff7fc] shadow-lg text-[#01204e] hover:bg-[#01204e] hover:text-[#fff7fc]  rounded-2xl">
      Displaying in {Fahrenheit ? "°F " : "°C"}
        
      </button>
    </div>
  );
};

export default ConversionTemp;
