import React from 'react'

const Button = ({children}) => {
  return (
    <div className='flex justify-center items-center flex flex-col gap-y-2'>
        <div className='w-12 h-12 px-2 py-2 rounded-full text-[#FFF7FC] bg-[#01204E] flex justify-center items-center'>{children}</div>
        <div className='px-4 py-1 rounded-full font-semibold text-[#FFF7FC] bg-[#01204E] '>
            09:30 PM
        </div>

    </div>
  )
}

export default Button