"use client"
import React, { useRef, useState } from 'react'
import WeatherCardLocation from './components/weatherCardLoaction/WeatherCardLocation'
import SideBar from './components/sidebar/SideBar'
import WeatherCardDetail from './components/mainCard/WeatherCardDetail'
import axios from 'axios'

const page = () => {
  const [searchValue, setSearchValue] = useState('')
  const [temprapure, setTemprapure] = useState("temprapure")
  const [Fahrenheit , setFahrenheit] = useState(true)
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }
  const search = async () => {
    try {
      const data = await axios.get(`/api/get-city-location/${searchValue}`)
      setTemprapure(data.data.message.main.temp)
      console.log(data.data.message.main)
      // setSearchValue(data.data.message.name)
      
    } catch (error) {
      
    }

  }

  return (
    <div>
      <div className='w-screen  h-screen fixed top-0 left-0 -z-50'>
        <img className='w-full h-full object-cover' src="/clouds.jpg" alt="cloudsbackground" />
      </div>
      <WeatherCardLocation location={"delhi"} temprapure={"36 °C"}/>
      <WeatherCardDetail  setFahrenheit={setFahrenheit} Fahrenheit={Fahrenheit} onEnter={onEnter} setSearchValue={setSearchValue}  search={search}/>
      <SideBar/>
      {/* <WeaterCard/> */}
      
    </div>
  )
}

export default page