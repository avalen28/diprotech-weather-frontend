import { React, createContext, useEffect, useState } from "react";
import weatherService from "../services/weatherService";

const WeatherContext = createContext();
function WeatherProviderWrapper(props) {
  const [weather, setWeather] = useState(null);

  const handleWeatherService = async () => {
      const weatherDataFromAPI = await weatherService.getWeatherDataByLongLat();
      setWeather(weatherDataFromAPI)
  };

  useEffect(() => {
    handleWeatherService();
  }, []);
  return (
    <WeatherContext.Provider value={{ weather }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherProviderWrapper, WeatherContext };
