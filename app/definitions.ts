type TodaysForecast = {
    time: string;
    icon: string;
    temperature: string;
}

type DaysForecast = {
    day: string;
    icon: string;
    weatherType: string;
    value1: number;
    value2: number;
}

type LocationWeather = {
    locationName: string;
    chanceOfRain: string;
    temperature: string;
    icon:string;
}
type City = {
    zip:string;
    name:string;
    lat:string;
    lon:string;
    country:string;
    state:string;
}
type CurrentWeather = {
    city_name: string;
    temp: number;
    icon: string;
    feels_like: string;
    wind_speed: string;
}

type Weather = {
    id: string,
    main:string,
    description:string,
    icon:string
}
type Weather_Main = {
    temp:number,
    feels_like:string,
    temp_min:number,
    temp_max:number,
    pressure:number,
    humidity:number,
    sea_level:number,
    grnd_level:number
}