import React from 'react'

const WeatherCardLocation = ({location,temprapure}) => {
  return (
    <div className='absolute top-0 left-0 bottom-0 hc my-auto bg-[#FFF7FC] bg-opacity-60 backdrop-blur-sm text-[#01204E]  px-4 py-2 flex flex-col gap-y-8 justify-center items-center text-xl font-bold max-w-56 text-center' >
        <h2 className='mx-2 text-2xl uppercase'>weather in your location</h2>
        <div>
        <p className='my-2'>{location}</p>
        <p>{temprapure}</p>
        </div>
        <div className='px-4 py-2 text-sm border-[#01204E] border-solid border-2 rounded-full text-[#FFF7FC] bg-[#01204E] uppercase'>
        weather news
      </div>

    </div>
  )
}

export default WeatherCardLocation