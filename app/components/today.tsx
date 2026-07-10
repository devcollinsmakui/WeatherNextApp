import React from 'react'

const Today = () => {
    const todayForecasts: TodaysForecast [] = [
        {time:"6:00 AM",icon:"💭",temperature:"25"},
        {time:"9:00 AM",icon:"⛅",temperature:"25"},
        {time:"12:00 PM",icon:"☀️",temperature:"25"},
        {time:"3:00 PM",icon:"☀️",temperature:"25"},
        {time:"6:00 PM",icon:"☀️",temperature:"25"},
        {time:"9:00 PM",icon:"⛅",temperature:"25"},
    ];
  return (
    <div className='px-4 flex flex-col h-full justify-around'>
        <p className='text-gray-400 font-bold'>TODAY'S FORECAST</p>
        <table className='w-full'>
            <tbody>
            <tr className='text-center'>
                {todayForecasts.map((item,index) => (
                    <td key={index} className={`p-2 ${index !== 0 && "border-l border-gray-400"}`}>
                        <p className='text-gray-400'>{item.time}</p>
                        <p className='text-2xl'>{item.icon}</p>
                        <p className='font-bold'>{item.temperature}°</p>
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Today