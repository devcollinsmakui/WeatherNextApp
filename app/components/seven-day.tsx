import React from 'react'

const SevenDayForecast = () => {
    const weekForecast: DaysForecast[]  = [
        {day:"Today",icon:"☀️", weatherType:"Sunny", value1:37,value2:22},
        {day:"Tue",icon:"☀️", weatherType:"Sunny", value1:37,value2:21},
        {day:"Wed",icon:"☀️", weatherType:"Sunny", value1:37,value2:21},
        {day:"Thursday",icon:"💭", weatherType:"Sunny", value1:37,value2:21},
        {day:"Fri",icon:"💭", weatherType:"Sunny", value1:37,value2:21},
        {day:"Sat",icon:"💭", weatherType:"Sunny", value1:37,value2:21},
        {day:"Sun",icon:"⚡", weatherType:"Sunny", value1:37,value2:21}

    ];
  return (
    <div className='h-full p-4'>
        <p className='text-gray-400 font-bold text-sm'>AIR CONDITIONS</p>
        <table className='h-full w-full'>
            <tbody>
                {
                    weekForecast.map((item, index)=>(
                        <tr key={index} className={`${index!== 0 && 'border-t border-gray-400'}`}>
                            <td className='text-gray-400'>{item.day}</td>
                            <td><span>{item.icon}</span> <span>{item.weatherType}</span></td>
                            <td><span>{item.value1}</span><span className='text-gray-400'>/{item.value2}</span></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default SevenDayForecast;