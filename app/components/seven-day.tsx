import React from 'react'

const SevenDayForecast = ({ data }: any) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }
    return (
        <div className='h-full p-4'>
            <p className='text-gray-400 font-bold text-sm'>AIR CONDITIONS</p>
            <table className='h-full w-full'>
                <tbody>
                    {
                        // weekForecast.map((item, index) => (
                        //     <tr key={index} className={`${index !== 0 && 'border-t border-gray-400'}`}>
                        //         <td className='text-gray-400'>{item.day}</td>
                        //         <td><span>{item.icon}</span> <span>{item.weatherType}</span></td>
                        //         <td><span>{item.value1}</span><span className='text-gray-400'>/{item.value2}</span></td>
                        //     </tr>
                        // ))

                        data?.list?.map((item: any, index: any) => (
                            <tr key={index} className={`${index !== 0 && 'border-t border-gray-400'}`}>
                                <td className='text-gray-400'>{formatDate(item.dt_txt)}</td>
                                <td className='flex items-center h-full'>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`} alt="image" className='w-15' />
                                    <span>{item.weather[0].main}</span>
                                </td>
                                <td className='text-gray-400'>{item.main.temp}°C</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SevenDayForecast;