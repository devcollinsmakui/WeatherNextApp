import React from 'react'
import { GoSun } from "react-icons/go";

const Hero = ({data}:any) => {
  console.log(data);
  
  return (
    <div className='flex justify-between h-full p-5'>
        <div className='flex flex-col h-full justify-between'>
            <div>
                <h2 className='text-3xl font-bold'>{data.name}</h2>
                <p className='text-gray-400'>Chance of rain: {data.rain}%</p>
            </div>
            <div className='text-3xl'>{data.name}°</div>
        </div>
        <div className='text-8xl'>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="image" />
        </div>
        {/* <GoSun className='md:h-full md:w-28 md:mr-20'/> */}
    </div>
  )
}

export default Hero