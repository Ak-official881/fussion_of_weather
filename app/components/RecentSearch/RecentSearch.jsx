"use client";
import React from "react";
import { useState } from "react";

const RecentSearch = () => {
  const [recentSearch, setRecentSearch] = useState(["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"]);

 
  const removeRecentSearch = (id) => {
    const newRecentSearch = recentSearch.filter((item, index) => index !== id);
    setRecentSearch(newRecentSearch);
  };
  return (
    <div className="flex flex-col min-w-[420px] min-h-[320px] bg-[#fff7fc] rounded-3xl     justify-start ">
      <div className="flex text-start gap-3 flex-col  min-h-[310px] p-4 hover:bg-[#f5f5f5] rounded-3xl m-2 min-w-[410px] ">
        <p className="text-3xl mt-8 font-bold">Recent Searches</p>
        <div className="flex flex-col gap-x-5">
          {recentSearch.map((item,index) => (
            <div key={index} className="flex mt-3 gap-2">
              <p className="text-2xl underline font-bold">{item}</p>
              <button onClick={()=>removeRecentSearch(index)} className="rounded-2xl bg-[#f9513d] w-20 text-[#fff7fc]">
                Remove
              </button>
              <hr className="border-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSearch;
