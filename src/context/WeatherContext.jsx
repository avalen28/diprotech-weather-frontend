import { React, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import weatherService from "../services/weatherService";

const WeatherContext = createContext();
function WeatherProviderWrapper(props) {
   const Navigate = useNavigate();
  const [weather, setWeather] = useState(null);

  const handleWeatherService = async (coordinates) => {
    const weatherDataFromAPI = await weatherService.getWeatherDataByLongLat(
      coordinates
    );
    if (typeof weatherDataFromAPI === "string") {
      Navigate("/error")
      return
    }
    setWeather(weatherDataFromAPI);
  };

  useEffect(() => {
    handleWeatherService();
  }, []);
  return (
    <WeatherContext.Provider value={{ weather, handleWeatherService }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export { WeatherProviderWrapper, WeatherContext };
