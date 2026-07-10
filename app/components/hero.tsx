import React from 'react'
import { GoSun } from "react-icons/go";

const Hero = () => {
  return (
    <div className='flex justify-between h-full p-5'>
        <div className='flex flex-col h-full justify-between'>
            <div>
                <h2 className='text-3xl font-bold'>Location name</h2>
                <p className='text-gray-400'>Chance of rain: 0%</p>
            </div>
            <div className='text-3xl'>31°</div>
        </div>
        <div className='text-8xl'>☀️</div>
        {/* <GoSun className='md:h-full md:w-28 md:mr-20'/> */}
    </div>
  )
}

export default Hero