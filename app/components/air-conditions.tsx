import React from 'react'
import { FaDroplet, FaSun, FaTemperatureHalf, FaWind } from 'react-icons/fa6'

const AirConditions = () => {
  return (
    <div className='flex flex-col h-full px-4 justify-around'>
        <div className='flex justify-between'>
            <p className='text-gray-400 font-bold text-sm'>AIR CONDITIONS</p>
            <button className='bg-sky-600 p-1 px-2 text-sm rounded-2xl'>See more</button>
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex gap-2 items-baseline'>
                <FaTemperatureHalf className='text-gray-400 text-md'/>
                <div>
                    <p className='text-gray-400 text-md'>Real Feel</p>
                    <p className='font-bold text-2xl'>30°</p>
                </div>  
            </div>

            <div className='flex gap-2 items-baseline'>
                <FaWind className='text-gray-400 text-md'/>
                <div>
                    <p className='text-gray-400 text-md'>Wind</p>
                    <p className='font-bold text-2xl'>0.2 km/h</p>
                </div>  
            </div>

            <div className='flex gap-2 items-baseline'>
                <FaDroplet className='text-gray-400 text-md'/>
                <div>
                    <p className='text-gray-400 text-md'>Chance of rain</p>
                    <p className='font-bold text-2xl'>0%</p>
                </div>  
            </div>

            <div className='flex gap-2 items-baseline'>
                <FaSun className='text-gray-400 text-md'/>
                <div>
                    <p className='text-gray-400 text-md'>UV Index</p>
                    <p className='font-bold text-2xl'>3</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default AirConditions