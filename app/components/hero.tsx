import React from 'react'
import { GoSun } from "react-icons/go";
import { WeatherResponse } from '../definitions';

// interface WeatherProps{
//   data: WeatherResponse  | null
// }
const Hero = ({ data}:any ) => {
  let iconCode = data?.weather?.[0]?.icon;

  return (
    <div className='flex justify-between h-full p-5'>
      <div className='flex flex-col h-full justify-between'>
        <div>
          <h2 className='text-3xl font-bold'>{data?.name}</h2>
          <p className='text-gray-400'>Chance of rain: {data?.clouds?.all | 0}%</p>
        </div>
        <div className='text-3xl'>{data?.main?.temp | 0}°</div>
      </div>
      <div className=''>
        <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="image" className=''/>
      </div>
      {/* <GoSun className='md:h-full md:w-28 md:mr-20'/> */}
    </div>
  )
}

export default Hero