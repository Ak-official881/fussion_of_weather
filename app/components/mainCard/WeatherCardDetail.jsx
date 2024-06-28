import React from "react";
import { IoIosCloudOutline } from "react-icons/io";
import SearchBar from "../tools/SearchBar";
import ConversionTemp from "../tools/ConversionTemp";
import RecentSearch from "../RecentSearch/RecentSearch";

const WeatherCardDetail = ({setFahrenheit,Fahrenheit,setSearchValue,onEnter,search}) => {
  return (
    <div className="flex  justify-center">
      <div className=" bg-opacity-60   border-2 rounded-lg backdrop-blur-sm max-w-[500px]  h-full w-[65%] mt-3  bg-[#fff7fc]  text-[#01204e] absolute  ">
        <div className="w-full h-full flex flex-col items-center  justify-start">
          <div className="flex flex-col items-center uppercase ">
            <IoIosCloudOutline className="w-36 h-36 text-[#429ed6] font-thin leading-3" />
            <p className="relative bottom-4 text-4xl  font-bold underline">fusion of weather </p>
          </div>
            <SearchBar onEnter={onEnter} setSearchValue={setSearchValue} search={search}  />
            <ConversionTemp  setFahrenheit={setFahrenheit} Fahrenheit={Fahrenheit}  />
            <RecentSearch />
        </div>
      </div>
    </div>
  );
};

export default WeatherCardDetail;
