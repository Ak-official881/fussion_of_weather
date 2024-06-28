import React from 'react'
import Button from '../tools/Button';
import { FaRegClock } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className='absolute top-0 right-0 bottom-0 my-auto flex justify-center items-center gap-y-4 px-6 flex-col  '>
        <Button>
            <div className=' flex justify-center items-center'>
                <FaRegClock />
            </div>
        </Button>
       

        <Button>
            <div className='flex justify-center items-center'>
            <LuCalendarDays />
            </div>
        </Button>
    </div>
  )
}

export default SideBar