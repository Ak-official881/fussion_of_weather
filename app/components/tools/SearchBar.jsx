
import React, { useRef } from 'react'

const SearchBar = ({setSearchValue,onEnter,search}) => {

  return (
    <div className='mt-8'>
        <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
            <input onKeyDown={(e)=>onEnter(e)} onChange={(e)=>setSearchValue(e.target.value)}  type="text" placeholder="Search for any location..." className=" min-w-[350px] w-full h-16 border-2 border-gray-300 text-[#01204e] hover:bg-gray-100 bg-[#fff7fc]  rounded-3xl shadow-2xl placeholder-gray-500 focus:placeholder-gray-700 placeholder:px-5 placeholder:text-xl placeholder:ml-4 px-2" />
            <button onClick={search} className="w-1/3 h-10 bg-[#fff7fc] shadow-lg text-[#01204e] hover:bg-[#01204e] hover:text-[#fff7fc]  rounded-2xl">Search</button>
        </div>
    </div>
  )
}

export default SearchBar