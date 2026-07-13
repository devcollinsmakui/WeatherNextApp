'use client';
import { useState } from "react";
import AirConditions from "./components/air-conditions";
import Hero from "./components/hero";
import NavPane from "./components/nav";
import SevenDayForecast from "./components/seven-day";
import Today from "./components/today";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams,useRouter } from "next/navigation";

export default function Home() {
  const [city, setCity] = useState('');
  const [locations, setLocations] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City>();
  const [isLoading, setIsLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({ });

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`

  const handleSearch = () => {
    setIsLoading(true);
    //
    axios.get(url).then((res) => {
      setLocations(res.data);
      setShowList(true);
    })
  }
  const handleCitySelection = (location:City) => {
    setShowList(false);
    setSelectedCity(location);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=imperial&appid=${apiKey}`;

    axios.get(url).then((res)=>{
      setCurrentWeather(res.data);
    })
  }

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  // const handleSearch = useDebouncedCallback((text: string)=> {
  //   const params = new URLSearchParams(searchParams);

  //   if(text){
  //     params.set('query',text)
  //   }
  //   else {
  //     params.delete('query')
  //   }

  //   replace(`${pathname}?${params.toString()}`);
  //   let str = searchParams.get('query')?.toString() as string
  //   setCity(str);
  //   let url = `http://api.openweathermap.org/geo/1.0/direct?q=${str}&limit=5&appid=${apiKey}`
  //   axios.get(url).then((res) => {
  //     setLocations(res.data)
  //     console.log(locations);
  //   })
  // },300);
  
  return (
    <main className="flex h-screen p-4 md:flex-row gap-4 md:overflow-hidden">
      <NavPane />
      <div className="relative flex flex-col w-full gap-2">
        <div className="w-2/3">
          <div className="flex items-center gap-2 text-gray-400 rounded bg-gray-800 p-1 px-2">
            <input type="search" name="" id="" placeholder="Search for cities" className="bg-gray-800 w-full rounded col-span-2 focus:outline-none" 
            value={city} onChange={(e) => setCity(e.target.value)} />
            <div className="bg-gray-600 rounded p-1 px-2 w-8 text-center">
              <FaSearch className="text-sm" onClick={handleSearch} />
            </div>
          </div>
          {showList && locations.length > 0 && (
          <div className="relative">
            <ul className="absolute top-2 rounded p-2 z-1 bg-black/80 backdrop-blur-md border border-black/50 shadow-lg w-full">
              {locations.map((location, index) => (
                <li className="p-1" key={index} onClick={() => handleCitySelection(location)}>
                  <div className="flex gap-2">
                    <p>{location.country},</p>
                    <div>
                      <p className="text-gray-200 text-sm">{`${location.name}, ${location.state}`}</p>
                      <p className="text-gray-400 text-xs">{`${location.lat}, ${location.lon}`}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>

        <div className="grid md:grid-cols-3 md:gap-4 md:h-full md:overflow-hidden mt-2">
          <div className="col-span-2 flex flex-col h-full gap-4">
            <div className="flex-1"><Hero data={currentWeather} /></div>
            <div className="flex-1 bg-gray-800 rounded-2xl p-2"><Today /></div>
            <div className="flex-1 bg-gray-800 rounded-2xl p-2">
              <AirConditions />
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-2"><SevenDayForecast /></div>
        </div>
      </div>
    </main>
  );
}
//open meteo

//weather API
//https://www.weatherapi.com/docs/
// https://www.c-sharpcorner.com/article/building-a-weather-app-with-next-js-and-tailwind/
