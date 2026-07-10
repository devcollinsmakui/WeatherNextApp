import AirConditions from "./components/air-conditions";
import Hero from "./components/hero";
import NavPane from "./components/nav";
import SevenDayForecast from "./components/seven-day";
import Today from "./components/today";

export default function Home() {
  //open meteo

  //weather API
  //https://www.weatherapi.com/docs/
  // https://www.c-sharpcorner.com/article/building-a-weather-app-with-next-js-and-tailwind/
  return (
    <main className="flex h-screen p-4 md:flex-row gap-4 md:overflow-hidden">
      <NavPane/>
      <div className="flex flex-col w-full gap-2">
        <div className="pr-2 w-2/3">
          <input type="search" name="" id="" placeholder="Search for cities" className="bg-gray-800 p-1 px-4 w-full rounded col-span-2" />
        </div>
        <div className="grid md:grid-cols-3 md:gap-4 md:h-full md:overflow-hidden mt-2">
          <div className="col-span-2 flex flex-col h-full gap-4">
            <div className="flex-1"><Hero /></div>
            <div className="flex-1 bg-gray-800 rounded-2xl p-2"><Today /></div>
            <div className="flex-1 bg-gray-800 rounded-2xl p-2">
              <AirConditions/>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-2"><SevenDayForecast/></div>
        </div>
      </div>
    </main>
  );
}
