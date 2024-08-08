import { React, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import weatherService from "../services/weatherService";

/**
 * Context for weather data.
 * @constant
 * @type {React.Context}
 */
const WeatherContext = createContext();

/**
 * WeatherProviderWrapper component provides weather data to its children.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element} The provider component that wraps its children.
 */
function WeatherProviderWrapper(props) {
  const Navigate = useNavigate();
  const [weather, setWeather] = useState(null);

  /**
   * Fetches weather data from the weather service.
   * @async
   * @function
   * @param {Array<number>} [coordinates] - The coordinates for fetching weather data.
   * @returns {Promise<void>}
   */
  const handleWeatherService = async (coordinates) => {
    const weatherDataFromAPI = await weatherService.getWeatherDataByLongLat(
      coordinates
    );
    if (typeof weatherDataFromAPI === "string") {
      Navigate("/error");
      return;
    }
    setWeather(weatherDataFromAPI);
  };

  /**
   * useEffect hook to fetch weather data on component mount.
   */
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
