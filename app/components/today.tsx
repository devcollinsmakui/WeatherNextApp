import React from 'react'

const Today = ({data}:any) => {

    const formatDate = (dateString:string) => {
        const date = new Date(dateString);

        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12:true
        });
    }
  return (
    <div className='px-4 flex flex-col h-full justify-around'>
        <p className='text-gray-400 font-bold'>TODAY'S FORECAST</p>
        <table className='w-full'>
            <tbody >

            <tr className='text-center'>
                {data?.list?.map((item:any,index:number) => (
                    <td key={index} className={`p-2 ${index !== 0 && "border-l border-gray-400"}items-center`}>
                        <p className='text-gray-400'>{formatDate(item?.dt_txt)}</p>
                            <img src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`} alt="image" className='w-20 m-auto'/>
                        <p className='font-bold'>{item?.main?.temp}°</p>
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Today