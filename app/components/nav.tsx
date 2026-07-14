import React from 'react'
import { FaCloudSun, FaList, FaMap, FaSliders } from 'react-icons/fa6'

const NavPane = () => {
    return (
        <nav className="w-full flex-none md:w-20 bg-gray-800 rounded-2xl">
            <div className='flex flex-col items-center gap-4 p-2 pt-5'>
                <img src="MakUI-logo-removebg-preview.png" className='mb-5' alt="Mak UI logo" />

                <div className='flex flex-col gap-4 text-gray-400'>
                    <div className='flex flex-col items-center text-white'>
                    <FaCloudSun />
                    <p>Weather</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaList />
                    <p>Cities</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaMap />
                    <p>Map</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaSliders />
                    <p>Settings</p>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default NavPane